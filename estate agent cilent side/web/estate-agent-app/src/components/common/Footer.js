import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">

      {/* Main Footer Content */}
      <div className="footer-content">

        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="https://www.keells.com/careers/">Careers</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="/investment-advisory">Investment Advisory</a></li>
            <li><a href="/development-advisory">Development Advisory</a></li>
            <li><a href="/deal-advisory">Deal Advisory</a></li>
          </ul>
        </div>

        {/* Services for Specific Groups */}
        <div className="footer-section">
          <h3>Services for</h3>
          <ul>
            <li><a href="/buyer">Buyer</a></li>
            <li><a href="/landlords">Landlords</a></li>
            <li><a href="/tenants">Tenants</a></li>
            <li><a href="/seller">Seller</a></li>
            <li><a href="/developers">Developers</a></li>
          </ul>
        </div>

        {/* Social Media and Newsletter Section */}
        <div className="footer-section">
          <h3>LIONEL PROPERTIES</h3>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>

          {/* Newsletter Form */}
          <p className="news-letter">Join our newsletter</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        {/* Footer Text */}
        <p>© {new Date().getFullYear()} LIONEL PROPERTIES Private Limited. All Rights Reserved.</p>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="/privacy">Privacy & Cookies</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
