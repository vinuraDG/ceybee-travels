import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconPhone, IconMail, IconMapPin, IconWhatsApp,
  IconInstagram, IconFacebook, IconTikTok, IconTripAdvisor, IconCheckCircle
} from '../common/Icons';
import './Contact.css';

const methods = [
  { Icon: IconPhone,    label: 'Phone',     value: '+94 77 350 6345',       href: 'tel:+94773506345' },
  { Icon: IconMail,     label: 'Email',     value: 'info@ceyBeetravels.lk', href: 'mailto:info@ceyBeetravels.lk' },
  { Icon: IconMapPin,   label: 'Location',  value: 'Sri Lanka',             href: '#' },
  { Icon: IconWhatsApp, label: 'WhatsApp',  value: '+94 77 350 6345',       href: 'https://wa.me/94773506345' },
];

const socials = [
  { Icon: IconInstagram,   label: 'Instagram',   href: '#' },
  { Icon: IconFacebook,    label: 'Facebook',    href: '#' },
  { Icon: IconTikTok,      label: 'TikTok',      href: '#' },
  { Icon: IconTripAdvisor, label: 'TripAdvisor', href: '#' },
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
            Ready to explore Sri Lanka? Get in touch and we'll plan the trip together
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
              {methods.map(({ Icon, label, value, href }, i) => (
                <a key={i} href={href} className="contact-method" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <div className="method-icon"><Icon width={20} height={20} /></div>
                  <div className="method-text">
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-row">
              {socials.map(({ Icon, label, href }, i) => (
                <a key={i} href={href} className="social-btn" title={label} target="_blank" rel="noopener noreferrer">
                  <Icon width={18} height={18} />
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
                <div className="success-icon"><IconCheckCircle width={48} height={48} style={{ color: '#17A58A' }} /></div>
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
                      <option>1-2 people</option>
                      <option>3-4 people</option>
                      <option>5-8 people</option>
                      <option>9+ people</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us about your dream trip..." required />
                </div>
                <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
