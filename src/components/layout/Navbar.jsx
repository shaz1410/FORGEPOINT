import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <Link
          to="/"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          FORGE<span>POINT</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>

          <Link to="/process" onClick={() => setMenuOpen(false)}>
            Process
          </Link>

          <Link to="/pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>

          <Link
            to="/contact"
            className="navbar-contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;