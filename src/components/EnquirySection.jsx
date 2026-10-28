// src/components/EnquirySection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Phone, Calendar, Users, Send, CheckCircle, X 
} from 'lucide-react';
import { venueInfo } from '../data/venueInfo';
import '../styles/layout.css';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', date: '', guests: '', notes: ''
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOpenConfirm = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // ⚠️ REPLACE THE EMAIL BELOW WITH THE VENUE'S REAL EMAIL ADDRESS
      const destinationEmail = "mthosbudah03@gmail.com"; 

      const response = await fetch(`https://formsubmit.co/ajax/${destinationEmail}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Venue Enquiry] ${formData.eventType} - ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          "Event Type": formData.eventType,
          "Preferred Date": formData.date,
          Guests: formData.guests,
          Notes: formData.notes || 'None provided',
        })
      });

      if (response.ok) {
        setIsSending(false);
        setIsSuccess(true);
        
        setTimeout(() => {
          setShowConfirm(false);
          setIsSuccess(false);
          setFormData({ name: '', email: '', phone: '', eventType: '', date: '', guests: '', notes: '' });
        }, 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setIsSending(false);
      alert("There was an issue sending your enquiry. Please try again.");
    }
  };

  return (
    <section id="enquiry" className="enquiry-section-dark">
      <div className="container">
        
        <motion.div className="enquiry-header text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-label text-gold">Book Your Event</span>
          <h2 className="section-title text-white">Let's Plan Your Event</h2>
          <p className="enquiry-subtitle">Fill in your details and we'll get back to you with a personalised quote.</p>
        </motion.div>

        <motion.div className="enquiry-form-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          <form onSubmit={handleOpenConfirm} className="modern-form">
            
            <div className="form-row">
              <div className="input-group">
                <label>Full Name *</label>
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input type="text" name="name" required placeholder="Your Name" value={formData.name} onChange={handleChange} />
                </div>
              </div>
              <div className="input-group">
                <label>Email Address *</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input type="email" name="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Phone Number *</label>
                <div className="input-with-icon">
                  <Phone size={18} className="input-icon" />
                  <input type="tel" name="phone" required placeholder="071 000 0000" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="input-group">
                <label>Event Type *</label>
                <select name="eventType" required value={formData.eventType} onChange={handleChange}>
                  <option value="">Select Event Type</option>
                  <option value="Wedding">Wedding (Starting from R15,000)</option>
                  <option value="Corporate">Corporate Function (Starting from R10,000)</option>
                  <option value="Traditional">Traditional Celebration (Custom Quote)</option>
                  <option value="Party">Party / Celebration (Starting from R5,000)</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

                      <div className="form-row">
                    <div className="input-group">
                <label>Event Date *</label>
                <div className="input-with-icon date-input-wrapper">
                  <Calendar size={18} className="input-icon" />
                  <input 
                    type="date"
                    name="date" 
                    min={today} 
                    required 
                    value={formData.date} 
                    onChange={handleChange}
                    className={!formData.date ? "empty-date" : ""}
                  />
                  {/* Custom placeholder that disappears when a date is selected */}
                  {!formData.date && (
                    <span className="custom-date-placeholder">Choose the event date</span>
                  )}
                </div>
              </div>
              <div className="input-group">
                <label>Estimated Guests *</label>
                <div className="input-with-icon">
                  <Users size={18} className="input-icon" />
                  <input type="number" name="guests" min="1" required placeholder="e.g. 50" value={formData.guests} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="input-group">
              <label>Tell Us About Your Event</label>
              <textarea name="notes" rows="4" placeholder="Share your vision, theme, or any special requirements..." value={formData.notes} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn-gold full-width submit-btn">
              <Send size={18} /> Send Enquiry
            </button>
          </form>
        </motion.div>

        {/* ── CONFIRMATION POPUP MODAL ── */}
        <AnimatePresence>
          {showConfirm && (
            <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="modal-content" initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}>
                {!isSuccess ? (
                  <>
                    <button className="modal-close" onClick={() => setShowConfirm(false)} disabled={isSending}>
                      <X size={20} />
                    </button>
                    <h3>Confirm Enquiry</h3>
                    <p>Are you sure you want to send this event enquiry to Ntosifiso Garden?</p>
                    
                    <div className="modal-actions">
                      <button className="btn btn-outline-dark" onClick={() => setShowConfirm(false)} disabled={isSending}>
                        Cancel
                      </button>
                      <button className="btn btn-gold" onClick={handleSendEmail} disabled={isSending}>
                        {isSending ? 'Sending...' : 'Yes, Send'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="modal-success">
                    <CheckCircle size={50} className="success-icon" />
                    <h3>Enquiry Sent!</h3>
                    <p>Thank you, {formData.name}. Your enquiry has been sent successfully. We will get back to you shortly.</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}