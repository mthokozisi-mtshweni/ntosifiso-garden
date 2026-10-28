// src/components/Footer.jsx
import { venueInfo } from '../data/venueInfo';
import logo from '../assets/images/logo.jpg'; // <-- THIS LINE WAS MISSING
import '../styles/layout.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Ntosifiso Garden Logo" className="footer-logo-img" />
            <span>{venueInfo.name}</span>
          </div>
          
          <p>Your escape. Your moments. Your garden.</p>
          <p className="copyright">
            © {new Date().getFullYear()} {venueInfo.legalName}. All Rights Reserved.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#day-visits">Day Visits</a>
          <a href="#gallery">Gallery</a>
          <a href="#venue-hire">Venue Hire</a>
          <a href="#enquiry">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>{venueInfo.address}</p>
          <p>{venueInfo.phone}</p>
          <a href={`https://wa.me/${venueInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-wa-link">
            Message us on WhatsApp
          </a>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#!" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#!" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
             <a href={venueInfo.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}