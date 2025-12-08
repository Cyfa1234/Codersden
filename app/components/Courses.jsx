import Link from "next/link"

const Courses = ({ courses }) => {
   
    if (!courses || courses.length === 0) {
        return (
            <div className="courses-empty">
                <div className="empty-state">
                    <h2>No Courses Found</h2>
                    <p>Try adjusting your search criteria or browse all available courses.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="courses">
            {courses.map((course) => (
                <div key={course.id} className="card">
                    <div className="card-header">
                        <h2>{course.title}</h2>
                        <span className="platform-badge">{course.platform || 'Other'}</span>
                    </div>
                    <div className="course-meta">
                        <small className="level-badge">📚 {course.level || 'All Levels'}</small>
                        <small className="category-badge">🏷️ {course.category || 'Other'}</small>
                        {course.rating && <small className="rating-badge">⭐ {course.rating}</small>}
                    </div>
                    <p>{course.description}</p>
                    <Link href={course.link} target="_blank" rel="noopener noreferrer" className="btn">
                        Go To Course
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Courses