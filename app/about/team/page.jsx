import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaPalette, FaMobileAlt } from "react-icons/fa"

const TeamPage = () => {
  const team = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Full Stack Developer",
      icon: <FaCode />,
      bio: "Expert in React, Node.js, and cloud technologies. Passionate about building scalable web applications.",
      expertise: ["React", "Node.js", "AWS", "GraphQL"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Backend Architect",
      icon: <FaServer />,
      bio: "Specialized in microservices, Docker, and Kubernetes. Loves solving complex system design problems.",
      expertise: ["Docker", "Kubernetes", "PostgreSQL", "Python"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "Frontend Specialist",
      icon: <FaPalette />,
      bio: "Creative UI/UX developer with a focus on responsive design and accessibility standards.",
      expertise: ["Vue.js", "Tailwind CSS", "TypeScript", "UI/UX"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Mobile Developer",
      icon: <FaMobileAlt />,
      bio: "Expert in React Native and iOS development. Building beautiful cross-platform mobile experiences.",
      expertise: ["React Native", "Swift", "Firebase", "Android"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "DevOps Engineer",
      icon: <FaServer />,
      bio: "Infrastructure and deployment specialist. Expert in CI/CD pipelines and cloud infrastructure.",
      expertise: ["CI/CD", "Jenkins", "AWS", "Terraform"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "AI/ML Engineer",
      icon: <FaCode />,
      bio: "Data scientist passionate about machine learning and neural networks. Building intelligent systems.",
      expertise: ["Python", "TensorFlow", "Deep Learning", "Data Science"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ]

  return (
    <div className="team-container">
      <div className="team-hero">
        <h1>Meet Our Team</h1>
        <p className="team-subtitle">Talented developers building the future of tech education</p>
      </div>

      <section className="team-intro">
        <h2>Our Story</h2>
        <p>
          CodersDen was founded by a group of passionate developers who believe that quality tech education should be accessible to everyone. Our diverse team brings together expertise from various tech domains to create the best learning platform possible.
        </p>
        <p>
          We're committed to continuously improving CodersDen, discovering new courses, and providing the best learning experience for our community.
        </p>
      </section>

      <section className="team-members">
        <h2>Meet the Team</h2>
        <div className="members-grid">
          {team.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-header">
                <div className="member-icon">
                  {member.icon}
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>

              <p className="member-bio">{member.bio}</p>

              <div className="expertise">
                <p className="expertise-label">Expertise:</p>
                <div className="skill-tags">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="social-links">
                <a href={member.social.github} className="social-icon" title="GitHub">
                  <FaGithub />
                </a>
                <a href={member.social.linkedin} className="social-icon" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href={member.social.twitter} className="social-icon" title="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="team-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-number">1</div>
            <h3>Quality First</h3>
            <p>We prioritize quality in everything we do, from course selection to platform development.</p>
          </div>
          <div className="value-card">
            <div className="value-number">2</div>
            <h3>Continuous Learning</h3>
            <p>We practice what we preach by constantly learning and staying updated with latest technologies.</p>
          </div>
          <div className="value-card">
            <div className="value-number">3</div>
            <h3>Community First</h3>
            <p>Our community of learners is at the heart of everything we do. Your feedback drives our decisions.</p>
          </div>
          <div className="value-card">
            <div className="value-number">4</div>
            <h3>Innovation</h3>
            <p>We embrace innovation and constantly explore new ways to improve the learning experience.</p>
          </div>
        </div>
      </section>

      <section className="team-join">
        <h2>Join Our Mission</h2>
        <p>
          We're always looking for passionate developers to join our team. If you believe in democratizing tech education and want to make an impact, we'd love to hear from you!
        </p>
        <a href="mailto:team@codersden.com" className="contact-btn">Get In Touch</a>
      </section>
    </div>
  )
}

export default TeamPage
