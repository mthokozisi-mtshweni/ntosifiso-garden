// src/components/FloatingSocial.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { venueInfo } from '../data/venueInfo';
import '../styles/layout.css';

// Custom Brand Icons
const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
);
const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const TikTokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
);

export default function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    { id: 'whatsapp', icon: <WhatsAppIcon />, url: `https://wa.me/${venueInfo.whatsapp}`, color: '#25D366' },
    { id: 'tiktok', icon: <TikTokIcon />,  url: "https://www.tiktok.com/@ntosifisogarden946", color: '#000000' },
    { id: 'facebook', icon: <FacebookIcon />, url: '#!', color: '#1877F2' },
  ];

  return (
    <div className="floating-social-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="social-menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ color: social.color }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: index * 0.08 }} // Staggered animation
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        className={`fab-main ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 45 : 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <Plus size={28} />
      </motion.button>
    </div>
  );
}