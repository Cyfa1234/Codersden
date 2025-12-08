import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const category = searchParams.get('category');
    const level = searchParams.get('level');
    const platform = searchParams.get('platform');

    let filteredCourses = courses || [];

    // Filter by search query
    if (query && query.trim()) {
      const lowerQuery = query.toLowerCase();
      filteredCourses = filteredCourses.filter((course) => {
        return (
          (course.title && course.title.toLowerCase().includes(lowerQuery)) ||
          (course.description && course.description.toLowerCase().includes(lowerQuery))
        );
      });
    }

    // Filter by category
    if (category && category.trim()) {
      filteredCourses = filteredCourses.filter((course) => {
        return course.category && course.category.toLowerCase() === category.toLowerCase();
      });
    }

    // Filter by level
    if (level && level.trim()) {
      filteredCourses = filteredCourses.filter((course) => {
        return course.level && course.level.toLowerCase() === level.toLowerCase();
      });
    }

    // Filter by platform
    if (platform && platform.trim()) {
      filteredCourses = filteredCourses.filter((course) => {
        return course.platform && course.platform.toLowerCase() === platform.toLowerCase();
      });
    }

    return NextResponse.json(filteredCourses);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json([], { status: 200 });
  }
}
