import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const methods = [
  { icon: '📞', label: 'Phone', value: '+94 77 350 6345', href: 'tel:+94773506345' },
  { icon: '✉️', label: 'Email', value: 'info@ceyBeetravels.lk', href: 'mailto:info@ceyBeetravels.lk' },
  { icon: '📍', label: 'Location', value: 'Sri Lanka', href: '#' },
  { icon: '💬', label: 'WhatsApp', value: '+94 77 350 6345', href: 'https://wa.me/94773506345' },
];

const socials = [
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '👤', label: 'Facebook', href: '#' },
  { icon: '🎵', label: 'TikTok', href: '#' },
  { icon: '⭐', label: 'TripAdvisor', href: '#' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header reveal" ref={useScrollReveal()}>
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">
            Let's Plan Your <span>Adventure</span>
          </h2>
          <p className="section-subtitle">
            Ready to explore Sri Lanka? Get in touch and let's create unforgettable memories
          </p>
        </div>

        <div className="contact-grid">
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info-title">Get In Touch</h3>
            <p className="contact-info-desc">
              Our friendly team is ready to help you plan the perfect trip. Whether you have questions or want a custom itinerary, we're just a message away.
            </p>

            <div className="contact-methods">
              {methods.map((m, i) => (
                <a key={i} href={m.href} className="contact-method" target={m.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <div className="method-icon">{m.icon}</div>
                  <div className="method-text">
                    <strong>{m.label}</strong>
                    <span>{m.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-row">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="social-btn" title={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-form-wrap"
          >
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Travel Dates</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Number of Travelers</label>
                    <select>
                      <option>1–2 people</option>
                      <option>3–4 people</option>
                      <option>5–8 people</option>
                      <option>9+ people</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us about your dream trip..." required />
                </div>
                <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
