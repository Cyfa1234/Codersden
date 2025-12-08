'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [platform, setPlatform] = useState('');

  const categories = [
    'Frontend', 'Backend', 'FullStack', 'Database', 'DevOps', 
    'Cloud', 'AI/ML', 'Mobile', 'Security', 'Architecture', 'Tools'
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const platforms = ['Udemy', 'Coursera', 'Other'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (category) params.append('category', category);
    if (level) params.append('level', level);
    if (platform) params.append('platform', platform);

    const url = `/api/courses/search${params.toString() ? '?' + params.toString() : ''}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch courses');
      const courses = await res.json();
      getSearchResults(courses);
    } catch (error) {
      console.error('Search error:', error);
      getSearchResults([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <div className='search-grid'>
        <input
          type='text'
          className='search-input'
          placeholder='Search Courses...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        <select 
          className='search-select'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=''>All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select 
          className='search-select'
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value=''>All Levels</option>
          {levels.map((lv) => (
            <option key={lv} value={lv}>{lv}</option>
          ))}
        </select>

        <select 
          className='search-select'
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value=''>All Platforms</option>
          {platforms.map((plat) => (
            <option key={plat} value={plat}>{plat}</option>
          ))}
        </select>

        <button className='search-button' type='submit'>
          Search
        </button>
      </div>
    </form>
  );
};
export default CourseSearch;