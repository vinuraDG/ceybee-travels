import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { destinations } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Destinations.css';

const marqueeItems = [...destinations, ...destinations];

export default function Destinations() {
  const headerRef = useScrollReveal();

  return (
    <section id="destinations" className="destinations">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-tag">Explore Sri Lanka</span>
          <h2 className="section-title">
            Corners of <span>Paradise</span>
          </h2>
          <p className="section-subtitle">
            From ancient rock fortresses to sun-kissed beaches — every destination tells a story
          </p>
        </div>
      </div>

      {/* Auto-scrolling marquee strip */}
      <div className="dest-marquee-wrap">
        <div className="dest-marquee">
          {marqueeItems.map((d, i) => (
            <div key={i} className="dest-marquee-card">
              <img src={d.image} alt={d.name} loading="lazy" />
              <div className="dest-marquee-card-overlay" />
              <div className="dest-marquee-card-info">
                <span className="dest-card-tag">{d.tag}</span>
                <div className="dest-card-name">{d.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial collage grid */}
      <div className="container">
        <div className="dest-grid-header">
          <div>
            <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
              Top <span>Destinations</span>
            </h3>
            <p className="section-subtitle" style={{ marginTop: 8 }}>
              Handpicked locations for your perfect Sri Lankan journey
            </p>
          </div>
          <ScrollLink to="tours" smooth duration={600} offset={-70} className="btn btn-dark">
            View All Tours
          </ScrollLink>
        </div>

        <div className="dest-grid">
          {destinations.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`dest-grid-item dest-grid-item--${i}`}
            >
              <img src={d.image} alt={d.name} loading="lazy" />
              <div className="dest-grid-overlay" />
              <div className="dest-grid-info">
                <span className="dest-grid-tag">{d.tag}</span>
                <div className="dest-grid-name">{d.name}</div>
                <div className="dest-grid-tagline">{d.tagline}</div>
                <div className="dest-grid-discover">Discover &rarr;</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
