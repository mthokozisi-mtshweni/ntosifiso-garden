// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { venueInfo } from '../data/venueInfo';
import logo from '../assets/images/logo.jpg'; 
import '../styles/layout.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Day Visits', href: '#day-visits' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Venue Hire', href: '#venue-hire' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="Ntosifiso Garden Logo" className="logo-img" />
          <span className="logo-text">{venueInfo.name}</span>
        </a>
        {/* Desktop Nav */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#enquiry" className="btn btn-primary nav-cta">
            Make an Enquiry
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#enquiry" 
          className="btn btn-primary" 
          style={{ margin: '1rem', textAlign: 'center' }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Make an Enquiry
        </a>
      </div>
    </header>
  );
}