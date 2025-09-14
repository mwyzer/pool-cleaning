import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <span className="logo-icon">🏊‍♂️</span>
            AquaClean Pool Services
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/#services" className="nav-link">Services</Link>
            <Link to="/#about" className="nav-link">About</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/#contact" className="nav-link contact-btn">Get Quote</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header