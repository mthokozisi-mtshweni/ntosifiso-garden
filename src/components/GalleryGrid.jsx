// src/components/GalleryGrid.jsx
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import '../styles/layout.css';

export default function GalleryGrid({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleKeyDown = useCallback((e) => {
    if (selectedIndex === null) return;
    if (e.key === 'Escape') setSelectedIndex(null);
    if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % items.length);
    if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [selectedIndex, items.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (selectedIndex !== null) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown, selectedIndex]);

  return (
    <>
      <div className="gallery-masonry">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            onClick={() => setSelectedIndex(index)}
          >
            {item.type === 'video' ? (
              <div className="video-thumbnail-wrapper">
                <video 
                  src={item.src} 
                  muted 
                  loop 
                  autoPlay 
                  playsInline 
                  className="gallery-media"
                />
                <div className="video-play-icon">
                  <Play fill="white" size={24} />
                </div>
              </div>
            ) : (
              <img src={item.src} alt={item.alt} className="gallery-media" loading="lazy" />
            )}
            
            <div className="gallery-item-overlay">
              <span>{item.type === 'video' ? 'Play Video' : 'View Image'}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedIndex(null)}>
              <X size={32} />
            </button>
            <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev - 1 + items.length) % items.length); }}>
              <ChevronLeft size={40} />
            </button>
            
            {items[selectedIndex].type === 'video' ? (
              <motion.video 
                key={selectedIndex}
                src={items[selectedIndex].src} 
                className="lightbox-media"
                controls
                autoPlay
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img 
                key={selectedIndex}
                src={items[selectedIndex].src} 
                alt={items[selectedIndex].alt} 
                className="lightbox-media"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev + 1) % items.length); }}>
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}