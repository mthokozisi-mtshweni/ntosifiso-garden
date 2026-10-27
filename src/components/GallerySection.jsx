// src/components/GallerySection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GalleryGrid from './GalleryGrid';
import { allGalleryImages } from '../data/galleryData'; // <-- Update import
import '../styles/layout.css';

export default function GallerySection() {
  // Show first 6 items on the homepage
  const featuredItems = allGalleryImages.slice(0, 6);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-label">Visual Journey</span>
          <h2 className="section-title">Life at the Garden</h2>
          <p className="section-subtitle">
            Explore the natural beauty and vibrant moments that make Ntosifiso unique.
          </p>
        </div>

        {/* Render the reusable grid with items */}
        <GalleryGrid items={featuredItems} />

        <motion.div 
          className="gallery-view-more"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/gallery" className="btn btn-outline-light">
            View Full Gallery <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}