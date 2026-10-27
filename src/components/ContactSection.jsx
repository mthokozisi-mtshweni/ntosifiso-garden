// src/components/ContactSection.jsx
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { venueInfo } from '../data/venueInfo';
import '../styles/layout.css';

// Simple SVG icons to avoid external dependencies
const InstagramIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
const FacebookIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const TikTokIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>;
const WhatsAppIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>;


export default function ContactSection() {
  return (
    <section id="contact" className="contact-section-light">
      <div className="container">
        
        <motion.div 
          className="contact-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Find Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            We'd love to hear from you. Connect and reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="contact-layout-grid">
          
          {/* Left Column: Map & Address */}
          <motion.div 
            className="contact-column-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-info-card">
              <div className="info-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div>
                <h4>Office Address</h4>
                <p>{venueInfo.address}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueInfo.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="map-embed-wrapper">
              <iframe 
                title="Ntosifiso Garden Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(venueInfo.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact-info-card">
              <div className="info-icon-wrapper">
                <Clock size={20} />
              </div>
              <div>
                <h4>Opening Hours</h4>
                <p>{venueInfo.openingHours}</p>
                <span className="small-note">(Public holidays may affect hours)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Details & CTA */}
          <motion.div 
            className="contact-column-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-action-card">
              <div className="info-icon-wrapper">
                <Phone size={20} />
              </div>
              <div>
                <h4>Call Us</h4>
                <p className="large-text">{venueInfo.phone}</p>
                <span className="small-note">Day visitors & venue enquiries</span>
              </div>
            </div>

            <div className="contact-action-card">
              <div className="info-icon-wrapper">
                <Mail size={20} />
              </div>
              <div>
                <h4>Email Us</h4>
                <p className="large-text">{venueInfo.email}</p>
                <span className="small-note">We typically reply within 48 hours</span>
              </div>
            </div>

            <div className="contact-cta-card">
              <h3>Ready to plan your visit?</h3>
              <p>Fill out our booking form and we will get back to you with availability.</p>
              <a href="#enquiry" className="btn btn-primary full-width">
                Go to Enquiry Form <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div 
          className="socials-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="socials-title">Follow Us</h4>
          <div className="socials-grid">
            <a href="#!" className="social-box">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
            <a href="#!" className="social-box">
              <FacebookIcon />
              <span>Facebook</span>
            </a>
            <a href="#!" className="social-box">
              <TikTokIcon />
              <span>TikTok</span>
            </a>
            <a href={`https://wa.me/${venueInfo.whatsapp}`} className="social-box">
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}