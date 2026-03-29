import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo text-gradient">CS</div>
          <p className="footer-text">Building modern web experiences with passion.</p>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/sudeyse-145" className="social-link" aria-label="GitHub"><FiGithub size={20} /></a>
          <a href="#" className="social-link" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
          <a href="#" className="social-link" aria-label="Twitter"><FiTwitter size={20} /></a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sudeyse Yusuf. All rights reserved.</p>
      </div>
      
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <FiArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
