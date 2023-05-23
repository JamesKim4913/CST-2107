import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <p>&copy; James</p>
    </footer>
  );
};

export default Footer;
