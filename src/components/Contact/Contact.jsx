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
  { Icon: IconMail,     label: 'Email',     value: 'ceybeetravels@gmail.com', href: 'mailto:ceybeetravels@gmail.com' },
  { Icon: IconMapPin,   label: 'Location',  value: 'Sri Lanka',             href: '#' },
  { Icon: IconWhatsApp, label: 'WhatsApp',  value: '+94 77 350 6345',       href: 'https://wa.me/94773506345' },
];

const socials = [
  { Icon: IconInstagram,   label: 'Instagram',   href: '#' },
  { Icon: IconFacebook,    label: 'Facebook',    href: '#' },
  { Icon: IconTikTok,      label: 'TikTok',      href: '#' },
  { Icon: IconTripAdvisor, label: 'TripAdvisor', href: '#' },
];

// ─── Web3Forms access key ──────────────────────────────────────────────────
// 1. Go to https://web3forms.com/
// 2. Enter ceybeetravels@gmail.com and click "Create Access Key"
// 3. Copy the key from the email you receive and paste it below
const WEB3FORMS_KEY = '540276d7-e545-406e-8ee8-e07760f86051';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target;
    const data = {
      access_key: WEB3FORMS_KEY,
      subject: 'New Tour Inquiry — CeyBee Travels',
      from_name: `${form.firstName.value} ${form.lastName.value}`,
      email: form.email.value,
      travel_dates: form.travelDates.value || 'Not specified',
      travelers: form.travelers.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try WhatsApp or email directly.');
      }
    } catch {
      setError('Could not send message. Please try WhatsApp or email directly.');
    } finally {
      setLoading(false);
    }
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
                    <input name="firstName" type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input name="lastName" type="text" placeholder="Doe" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Travel Dates</label>
                    <input name="travelDates" type="date" />
                  </div>
                  <div className="form-group">
                    <label>Number of Travelers</label>
                    <select name="travelers">
                      <option>1-2 people</option>
                      <option>3-4 people</option>
                      <option>5-8 people</option>
                      <option>9+ people</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Tell us about your dream trip..." required />
                </div>
                {error && <p className="form-error">{error}</p>}
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
