// src/components/VenueHireSection.jsx
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Building2, Check, ArrowRight } from 'lucide-react';
import '../styles/layout.css';

const packages = [
  {
    id: 'weddings',
    name: 'Weddings',
    icon: <Heart size={22} />,
    price: 'R 15,000',
    period: 'starting price',
    description: 'The perfect canvas for your forever moment under the open sky.',
    features: [
      'Exclusive garden use',
      'Premium sound system',
      'Bridal preparation area',
      'Ample secure parking'
    ],
    isPopular: true,
  },
  {
    id: 'corporate',
    name: 'Corporate',
    icon: <Building2 size={22} />,
    price: 'R 10,000',
    period: 'starting price',
    description: 'Swap the boardroom for an inspiring, open-air environment.',
    features: [
      'Team building lawn space',
      'On-site sound system',
      'Braai & catering access',
      'Flexible setups'
    ],
    isPopular: false,
  },
  {
    id: 'traditional',
    name: 'Traditional',
    icon: <Users size={22} />,
    price: 'Custom',
    period: 'quote based',
    description: 'Honour your heritage with ample space for family and culture.',
    features: [
      'Massive group capacity',
      'Flexible ceremony layout',
      'Dedicated braai areas',
      'Overnight setup options'
    ],
    isPopular: false,
  },
  {
    id: 'parties',
    name: 'Celebrations',
    icon: <Sparkles size={22} />,
    price: 'R 5,000',
    period: 'starting price',
    description: 'From milestone birthdays to baby showers and family reunions.',
    features: [
      'Swimming pool access',
      'Braai and picnic areas',
      'Sound system for music',
      'Shaded relaxation spots'
    ],
    isPopular: false,
  }
];

export default function VenueHireSection() {
  return (
    <section id="venue-hire" className="venue-pricing-section">
      <div className="container">
        
        <div className="venue-header text-center">
          <span className="section-label">Venue Hire</span>
          <h2 className="section-title">Choose Your Celebration</h2>
          <p className="venue-subtitle">
            Transparent starting prices for unforgettable moments. All packages include access to our 10-hectare garden estate.
          </p>
        </div>

        <div className="pricing-cards-grid">
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              className={`pricing-card ${pkg.isPopular ? 'popular-card' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {pkg.isPopular && (
                <div className="popular-badge">Most Requested</div>
              )}
              
              <div className="pricing-icon-wrapper">
                {pkg.icon}
              </div>
              
              <h3 className="pricing-name">{pkg.name}</h3>
              <p className="pricing-desc">{pkg.description}</p>
              
              <div className="pricing-price-area">
                <span className="pricing-price">{pkg.price}</span>
                <span className="pricing-period">{pkg.period}</span>
              </div>

              <div className="pricing-divider"></div>

              <ul className="pricing-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={16} className="feature-check" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#enquiry" className={`btn full-width ${pkg.isPopular ? 'btn-gold' : 'btn-primary'}`}>
                Book {pkg.name} <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="venue-bottom-note text-center">
          <p>* All prices are starting rates. Final quotes depend on guest count, duration, and specific requirements. A 50% deposit secures your date.</p>
        </div>

      </div>
    </section>
  );
}