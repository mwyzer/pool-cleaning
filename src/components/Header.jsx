import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { HashLink } from "react-router-hash-link";

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
            <Link to="/" className="nav-link">
              Home
            </Link>
            <HashLink smooth to="/#services" className="nav-link">
              Services
            </HashLink>
            <HashLink smooth to="/#about" className="nav-link">
              About
            </HashLink>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <ThemeToggle className="nav-theme-toggle" />
            <Link to="/#contact" className="nav-link contact-btn">
              Get Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
