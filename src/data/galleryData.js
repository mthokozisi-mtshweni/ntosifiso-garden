// src/data/galleryData.js

// Import images from src/assets/images
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.jpg'; 
import pic4 from '../assets/images/pic4.jpg';
import pic6 from '../assets/images/pic6.jpg';
import mainImage from '../assets/images/mainImage.png';
import topImage from '../assets/images/TopImage.png';
import bottomImage from '../assets/images/bottomImage.png';

export const allGalleryImages = [
  // --- Main Assets ---
  { type: 'image', src: mainImage, alt: "Main venue view" },
  { type: 'image', src: topImage, alt: "Venue exterior" },
  { type: 'image', src: bottomImage, alt: "Venue details" },
  
  // --- Pictures ---
  { type: 'image', src: pic1, alt: "Ntosifiso Garden moments" },
  { type: 'image', src: pic2, alt: "Garden view" },
  { type: 'image', src: pic3, alt: "Event setup" },
  { type: 'image', src: pic4, alt: "Celebration" },
  { type: 'image', src: pic6, alt: "Garden greenery" },

  // --- Videos (These stay in the public folder) ---
  { type: 'video', src: "/vid1.mp4", alt: "Venue walk-through" },
  { type: 'video', src: "/vid2.mp4", alt: "Event highlights" },
  { type: 'video', src: "/vid3.mp4", alt: "Scenery" },
  { type: 'video', src: "/vid4.mp4", alt: "Guest experiences" },
  { type: 'video', src: "/vid5.mp4", alt: "Swimming pool" },
];