import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import resumePDF from '../assets/resume.pdf';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="header-container">
        <a href="#home" className="logo text-gradient">CS</a>
        
        <nav className={`nav ${mobileMenuOpen ? 'nav-open glass' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase()}`} 
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <a href={resumePDF} className="btn btn-outline resume-btn" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </nav>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
