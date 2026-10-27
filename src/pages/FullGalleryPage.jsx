// src/pages/FullGalleryPage.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryGrid from '../components/GalleryGrid';
import { allGalleryImages } from '../data/galleryData';
import '../styles/layout.css';

export default function FullGalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-wrapper" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <Navbar />
      
      <main className="full-gallery-main">
        <div className="container">
          <div className="full-gallery-header">
            <Link to="/" className="back-link">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="section-title">The Full Gallery</h1>
            <p className="section-subtitle">
              Browse through all our captured memories, beautiful landscapes, and event setups.
            </p>
          </div>

          {/* Render all items */}
          <GalleryGrid items={allGalleryImages} />
          
        </div>
      </main>

      <Footer />
    </div>
  );
}