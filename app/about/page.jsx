export const metadata = {
  title: 'About CodersDen',  // Dat's the metadata api.
};

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About CodersDen</h1>
        <p className="hero-subtitle">Empower Your Tech Learning Journey</p>
      </div>
      
      <section className="about-section">
        <div className="section-icon">📚</div>
        <h2>Welcome to CodersDen</h2>
        <p>
          CodersDen is your comprehensive platform for discovering and accessing world-class technology courses from leading educational providers. Whether you&apos;re a beginner taking your first steps into web development or an advanced professional mastering cutting-edge technologies, CodersDen connects you with the learning resources you need to succeed.
        </p>
      </section>

      <section className="about-section">
        <div className="section-icon">🎯</div>
        <h2>Our Mission</h2>
        <p>
          We believe that quality education should be accessible to everyone. Our mission is to democratize tech education by providing a centralized hub where learners can discover, compare, and access courses across all major technology domains. We partner with industry-leading platforms like Udemy and Coursera to bring you vetted, high-quality content from experienced instructors.
        </p>
      </section>

      <section className="about-section features-section">
        <div className="section-icon">✨</div>
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Extensive Course Catalog</h3>
            <p>25+ carefully curated courses covering Frontend, Backend, Full-Stack, Mobile, DevOps, Cloud, AI/ML, and more.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Advanced Search & Filtering</h3>
            <p>Find courses by technology category, skill level, and learning platform with intuitive search filters.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Trusted Platforms</h3>
            <p>Direct links to Udemy and Coursera courses, ensuring quality education from established providers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Comprehensive Coverage</h3>
            <p>From foundational HTML/CSS to advanced Kubernetes, AWS, and Deep Learning topics.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛤️</div>
            <h3>Skill-Based Learning Paths</h3>
            <p>Courses organized by category to help you build a structured learning journey.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals and experienced educators with proven track records.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-icon">⚡</div>
        <h2>Technology Stack</h2>
        <div className="tech-stack">
          <div className="tech-item">
            <span className="tech-badge">Next.js 14</span>
            <span className="tech-desc">Modern React framework</span>
          </div>
          <div className="tech-item">
            <span className="tech-badge">React 18</span>
            <span className="tech-desc">Interactive UI library</span>
          </div>
          <div className="tech-item">
            <span className="tech-badge">Tailwind CSS</span>
            <span className="tech-desc">Utility-first CSS</span>
          </div>
          <div className="tech-item">
            <span className="tech-badge">GitHub APIs</span>
            <span className="tech-desc">Repository integration</span>
          </div>
        </div>
        <p>
          CodersDen is built with modern web technologies for performance, scalability, and optimal user experience.
        </p>
      </section>

      <section className="about-section">
        <div className="section-icon">🗂️</div>
        <h2>Course Categories</h2>
        <div className="categories-grid">
          <div className="category-item">
            <div className="category-emoji">🎨</div>
            <h3>Frontend Development</h3>
            <p>React, Vue, Angular, TypeScript, JavaScript</p>
          </div>
          <div className="category-item">
            <div className="category-emoji">⚙️</div>
            <h3>Backend Development</h3>
            <p>Node.js, Django, Python, GraphQL</p>
          </div>
          <div className="category-item">
            <div className="category-emoji">💾</div>
            <h3>Databases</h3>
            <p>MongoDB, PostgreSQL, SQL</p>
          </div>
          <div className="category-item">
            <div className="category-emoji">🚀</div>
            <h3>DevOps</h3>
            <p>Docker, Kubernetes, Containerization</p>
          </div>
          <div className="category-item">
            <div className="category-emoji">☁️</div>
            <h3>Cloud Computing</h3>
            <p>AWS, Azure, Cloud Architecture</p>
          </div>
          <div className="category-item">
            <div className="category-emoji">📱</div>
            <h3>Mobile Development</h3>
            <p>React Native, iOS, Android</p>
          </div>
          <div className="category-item">
            <div className="category-emoji">🤖</div>
            <h3>AI/Machine Learning</h3>
            <p>Deep Learning, Data Science, Neural Networks</p>
          </div>
          <div className="category-item">
            <div className="category-emoji">🔒</div>
            <h3>Security</h3>
            <p>Web Security, Ethical Hacking, OWASP</p>
          </div>
        </div>
      </section>

      <section className="about-section why-section">
        <div className="section-icon">💡</div>
        <h2>Why Choose CodersDen?</h2>
        <div className="reasons-list">
          <div className="reason-item">
            <div className="reason-number">1</div>
            <div className="reason-content">
              <h3>Curated Selection</h3>
              <p>We&apos;ve carefully selected the best courses available to save you time in finding quality content.</p>
            </div>
          </div>
          <div className="reason-item">
            <div className="reason-number">2</div>
            <div className="reason-content">
              <h3>Quality Ratings</h3>
              <p>All courses include community ratings and detailed descriptions to help you choose the right fit.</p>
            </div>
          </div>
          <div className="reason-item">
            <div className="reason-number">3</div>
            <div className="reason-content">
              <h3>Smart Search</h3>
              <p>Advanced filtering options let you find exactly what you&apos;re looking for by category, level, and platform.</p>
            </div>
          </div>
          <div className="reason-item">
            <div className="reason-number">4</div>
            <div className="reason-content">
              <h3>Global Community</h3>
              <p>Join thousands of learners with supportive communities on Udemy and Coursera.</p>
            </div>
          </div>
          <div className="reason-item">
            <div className="reason-number">5</div>
            <div className="reason-content">
              <h3>Career Growth</h3>
              <p>Our courses are designed to help you build in-demand skills and advance your tech career.</p>
            </div>
          </div>
          <div className="reason-item">
            <div className="reason-number">6</div>
            <div className="reason-content">
              <h3>Continuous Updates</h3>
              <p>We regularly add new courses as technologies evolve to keep your skills current.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section cta-section">
        <div className="cta-content">
          <h2>Ready to Start Learning?</h2>
          <p>
            Browse our extensive course catalog, use our advanced search filters to find the perfect course for your skill level, and start your learning journey with CodersDen.
          </p>
          <div className="cta-buttons">
            <a href="/" className="cta-button primary">Explore Courses</a>
            <a href="/about/team" className="cta-button secondary">Meet Our Team</a>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>Happy learning! 🚀</p>
        <p className="footer-tagline">Empowering developers, one course at a time</p>
      </footer>
    </div>
  )
}



export default AboutPage
