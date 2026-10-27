// src/components/AboutSection.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Users, Sparkles } from 'lucide-react';
import '../styles/layout.css';

// IMPORT THE IMAGES HERE
import mainImage from '../assets/images/mainImage.png';
import topImage from '../assets/images/TopImage.png';
import bottomImage from '../assets/images/bottomImage.png';
import pic3 from '../assets/images/pic3.jpg'; 

// Notice the video paths do NOT have "/public/"
const mediaItems = [
  { type: 'image', src: mainImage },
  { type: 'video', src: "/vid1.mp4" }, 
  { type: 'image', src: pic3 },
  { type: 'video', src: "/vid2.mp4" }
];

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        <motion.div 
          className="about-image-collage"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="deco-dot dot-1"></div>
          <div className="deco-dot dot-2"></div>
          <div className="deco-ring"></div>

          <div className="collage-main-slider">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="slider-media-wrapper"
              >
                {mediaItems[currentIndex].type === 'video' ? (
                  <video 
                    src={mediaItems[currentIndex].src} 
                    autoPlay 
                    muted 
                    loop
                    playsInline 
                    className="collage-main"
                  />
                ) : (
                  <img 
                    src={mediaItems[currentIndex].src} 
                    alt="Celebration at Ntosifiso" 
                    className="collage-main" 
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Floating Static Images */}
          <img src={topImage} alt="Venue exterior" className="collage-top" />
          <img src={bottomImage} alt="Event details" className="collage-bottom" />
        </motion.div>

        <div className="about-text-wrapper">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-label">
            Our Story
          </motion.span>
          
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="section-title">
            Every Celebration<br />
            <span className="text-gradient">Deserves Excellence</span>
          </motion.h2>
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="about-description">
            Founded in 2015 by a group of young entrepreneurs, Ntosifiso Garden has grown 
            from a community clean-up project into one of Mpumalanga's most beloved outdoor venues. 
            Spanning over 10 hectares, we offer a breathtaking canvas for your most important moments.
          </motion.p>
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="about-description">
            From intimate first birthdays to grand traditional weddings and corporate productions, 
            our team handles every detail with care. We provide the space, the sound, and the serene 
            environment so you can be fully present in every moment.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="about-features-grid">
            <div className="feature-box">
              <Leaf className="feature-icon" size={20} />
              <h4>Unique Venue</h4>
              <p>Over 10 hectares of natural beauty.</p>
            </div>
            <div className="feature-box">
              <Users className="feature-icon" size={20} />
              <h4>Community First</h4>
              <p>100% youth-owned and locally operated.</p>
            </div>
            <div className="feature-box">
              <Sparkles className="feature-icon" size={20} />
              <h4>Endless Potential</h4>
              <p>Tailored spaces for any occasion.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="about-actions">
            <a href="#enquiry" className="btn btn-primary">Work With Us</a>
            <a href="#gallery" className="btn btn-outline-light">View Gallery</a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}