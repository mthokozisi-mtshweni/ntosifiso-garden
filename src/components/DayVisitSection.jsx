// src/components/DayVisitSection.jsx
import { motion } from 'framer-motion';
import { Waves, Flame, Trees, Music, MapPin } from 'lucide-react';
import { venueInfo } from '../data/venueInfo';
import '../styles/layout.css';

export default function DayVisitSection() {
  const facilities = [
    { icon: <Waves size={24} />, name: "Swimming Pools", desc: "Cool off in our pools." },
    { icon: <Flame size={24} />, name: "Braai Areas", desc: "Dedicated spaces for family braais." },
    { icon: <Trees size={24} />, name: "10+ Hectares", desc: "Endless open space to explore." },
    { icon: <Music size={24} />, name: "Sound System", desc: "On-site audio for your gathering." },
  ];

  const dayRates = [
    { label: "Adults", price: "R 50" },
    { label: "Kids (Under 12)", price: "R 20" },
    { label: "Cooler Box", price: "R 50" },
  ];

  return (
    <section id="day-visits" className="day-visit-section">
      <div className="container">
        
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Visit Us</span>
          <h2 className="section-title">Day Visits & Facilities</h2>
          <p className="section-subtitle">
            Walk-ins welcome. No booking required. Simply arrive and enjoy the garden.
          </p>
        </motion.div>

        <div className="day-visit-layout">
          
          {/* Image/Video Side */}
          <motion.div 
            className="day-visit-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            {/* REPLACED IMAGE WITH VIDEO */}
            <video 
              src="/about%20(2).mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="day-visit-main-img"
            />
            
            <div className="image-accent-box">
              <span>Walk-ins Welcome</span>
              <strong>Open Daily</strong>
            </div>
          </motion.div>

          {/* Pricing / Details Side */}
          <motion.div 
            className="day-visit-details"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="premium-pricing-card">
              <span className="card-label">Entry Rates</span>
              <h3>Day Visitor Access</h3>
              
              <div className="clean-price-list">
                {dayRates.map((rate, index) => (
                  <div className="price-row" key={index}>
                    <span className="price-label">{rate.label}</span>
                    <span className="price-amount">{rate.price}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueInfo.address)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary full-width"
              >
                <MapPin size={18} /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="facility-icon">{facility.icon}</div>
              <h4>{facility.name}</h4>
              <p>{facility.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}