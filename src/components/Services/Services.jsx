import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { services } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Services.css';

export default function Services() {
  const headerRef = useScrollReveal();

  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div ref={headerRef} className="section-header reveal">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">
              Comprehensive <span>Travel Solutions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need for an unforgettable Sri Lankan experience
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="service-card"
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Let our experienced team create the perfect Sri Lankan adventure just for you</p>
            <div className="cta-actions">
              <ScrollLink to="contact" smooth duration={600} offset={-70} className="btn btn-primary">
                Get Your Custom Quote
              </ScrollLink>
              <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
