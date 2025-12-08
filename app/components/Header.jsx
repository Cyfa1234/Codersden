import Link from "next/link"
import { FaBook, FaHome, FaInfo, FaUsers, FaCode } from "react-icons/fa"

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <FaBook className="logo-icon" />
                    <Link href="/">CodersDen</Link>
                </div>

                <nav className="nav-menu">
                   <Link href="/" className="nav-link">
                       <FaHome className="nav-icon" />
                       <span>Home</span>
                   </Link>
                    <Link href="/about" className="nav-link">
                        <FaInfo className="nav-icon" />
                        <span>About</span>
                    </Link>
                    <Link href="/about/team" className="nav-link">
                        <FaUsers className="nav-icon" />
                        <span>Team</span>
                    </Link>
                    <Link href="/code/repos" className="nav-link">
                        <FaCode className="nav-icon" />
                        <span>Code</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
