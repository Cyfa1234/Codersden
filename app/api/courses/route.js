import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const level = searchParams.get('level');
  const platform = searchParams.get('platform');

  let result = courses;

  if (category) {
    result = result.filter((course) => 
      course.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (level) {
    result = result.filter((course) => 
      course.level.toLowerCase() === level.toLowerCase()
    );
  }

  if (platform) {
    result = result.filter((course) => 
      course.platform.toLowerCase() === platform.toLowerCase()
    );
  }

  return NextResponse.json(result);
}

export async function POST(request) {
  try {
    const { title, description, level, link, category, platform, rating } = await request.json();

    // Validation
    if (!title || !description || !link) {
      return NextResponse.json(
        { error: 'Missing required fields: title, description, link' },
        { status: 400 }
      );
    }

    const newCourse = {
      id: uuidv4(),
      title,
      description,
      level: level || 'Beginner',
      link,
      category: category || 'Other',
      platform: platform || 'Other',
      rating: rating || 0,
    };

    courses.push(newCourse);

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    );
  }
}
