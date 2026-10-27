// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroScrollVideo from './components/HeroScrollVideo';
import AboutSection from './components/AboutSection';
import DayVisitSection from './components/DayVisitSection';
import GallerySection from './components/GallerySection';
import VenueHireSection from './components/VenueHireSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import EnquirySection from './components/EnquirySection';
import FloatingSocial from './components/FloatingSocial'; // <-- IMPORT HERE
import Footer from './components/Footer';
import FullGalleryPage from './pages/FullGalleryPage';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';

function HomePage() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <HeroScrollVideo />
        <AboutSection />
        <DayVisitSection />
        <GallerySection />
        <VenueHireSection />
        <ReviewsSection />
        <ContactSection />
        <EnquirySection />
      </main>
      <Footer />
      <FloatingSocial /> {/* <-- ADD HERE */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<FullGalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;