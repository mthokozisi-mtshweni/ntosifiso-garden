// src/components/ReviewsSection.jsx
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import '../styles/layout.css';

const reviews = [
  {
    id: 1,
    name: "Thandiwe M.",
    date: "October 2023",
    rating: 5,
    text: "Such a beautiful and peaceful place. We came for a family picnic and the kids absolutely loved the swimming pools. The grounds are so clean and well kept. Highly recommend for a weekend getaway!"
  },
  {
    id: 2,
    name: "Sipho N.",
    date: "September 2023",
    rating: 5,
    text: "We hosted our year-end corporate function here. The space is massive, the sound system is excellent, and the team was very accommodating. It’s amazing to see what the youth have built here."
  },
  {
    id: 3,
    name: "Lerato K.",
    date: "August 2023",
    rating: 5,
    text: "Attended a traditional wedding at Ntosifiso Gardens. The venue provided the perfect backdrop for all our photos. There is more than enough space for large gatherings. A true gem in Mpumalanga."
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="reviews-header text-center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="reviews-subtitle">
            Read about the experiences of the families, couples, and businesses who have visited us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Quote className="quote-icon" size={40} />
              
              <div className="stars-container">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "var(--color-gold)" : "none"} 
                    color={i < review.rating ? "var(--color-gold)" : "#ddd"} 
                  />
                ))}
              </div>

              <p className="review-text">"{review.text}"</p>
              
              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="reviewer-details">
                  <h4>{review.name}</h4>
                  <span>{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="reviews-cta">
  <a 
    href="https://www.google.com/maps/search/?api=1&query=Ntosifiso+Garden+Mpumalanga" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn btn-outline-light google-review-btn"
  >
    <MapPin size={18} />
    Read More Reviews on Google
  </a>
</div>

      </div>
    </section>
  );
}