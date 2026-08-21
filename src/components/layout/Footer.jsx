import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              FORGE<span>POINT</span>
            </Link>

            <p>
              Building reliable digital solutions for businesses
              ready to grow, innovate, and move forward.
            </p>
          </div>

          <div className="footer-column">
            <h3>Company</h3>

            <Link to="/about">About Us</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/process">Our Process</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className="footer-column">
            <h3>Services</h3>

            <Link to="/services">Website Development</Link>
            <Link to="/services">App Development</Link>
            <Link to="/services">Quality Assurance</Link>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

            <Link to="/contact">Get in Touch</Link>
            <a href="mailto:hello@forgepoint.co.za">
              hello@forgepoint.co.za
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Forgepoint Technologies (Pty) Ltd. All rights reserved.
          </p>

          <p>
            Software • Websites • Quality Assurance
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;