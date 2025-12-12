import Link from "next/link"
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* About Section */}
                <div className="footer-section">
                    <h3>About CodersDen</h3>
                    <p>
                        CodersDen is your comprehensive platform for discovering world-class 
                        technology courses. Learn coding skills from industry experts.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/about/team">Our Team</Link></li>
                        <li><Link href="/code/repos">Code Repos</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="footer-section">
                    <h3>Resources</h3>
                    <ul className="footer-links">
                        <li><Link href="/">Browse Courses</Link></li>
                        <li><Link href="/api/courses">API Docs</Link></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="mailto:info@codersden.com" className="social-icon">
                            <FaEnvelope />
                        </a>
                    </div>
                    <p className="contact-info">Email: info@codersden.com</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {currentYear} CodersDen. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link href="#privacy">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="#terms">Terms of Service</Link>
                        <span>|</span>
                        <Link href="#contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
