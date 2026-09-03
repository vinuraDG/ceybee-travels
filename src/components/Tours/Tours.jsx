import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { tours } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Tours.css';

const filters = [
  { label: 'All Tours',  value: 'all',      image: 'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=300&h=200&auto=format&fit=crop&q=80' },
  { label: 'Couples',   value: 'couples',   image: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=300&h=200&auto=format&fit=crop&q=80' },
  { label: 'Family',    value: 'family',    image: 'https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?w=300&h=200&auto=format&fit=crop&q=80' },
  { label: 'Beach',     value: 'beach',     image: 'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=300&h=200&auto=format&fit=crop&q=80' },
  { label: 'Adventure', value: 'adventure', image: 'https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?w=300&h=200&auto=format&fit=crop&q=80' },
  { label: 'Culture',   value: 'culture',   image: 'https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?w=300&h=200&auto=format&fit=crop&q=80' },
];

export default function Tours() {
  const [active, setActive] = useState('all');
  const navigate = useNavigate();
  const headerRef = useScrollReveal();
  const filtered = active === 'all' ? tours : tours.filter(t => t.category === active);

  return (
    <>
      <section id="tours" className="tours">
        <div className="container">
          <div ref={headerRef} className="section-header reveal">
            <span className="section-tag">Featured Tours</span>
            <h2 className="section-title">
              Carefully Crafted <span>Journeys</span>
            </h2>
            <p className="section-subtitle">
              Showcasing the best of Sri Lanka from ancient ruins to pristine beaches
            </p>
          </div>

          <div className="tour-filters">
            {filters.map(f => (
              <button
                key={f.value}
                className={`filter-card ${active === f.value ? 'active' : ''}`}
                onClick={() => setActive(f.value)}
              >
                <img src={f.image} alt={f.label} loading="lazy" />
                <div className="filter-card-overlay" />
                <span className="filter-card-label">{f.label}</span>
              </button>
            ))}
          </div>

          <div className="tours-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((tour, i) => (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="tour-card"
                  onClick={() => navigate(`/tours/${tour.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="tour-img">
                    <img src={tour.image} alt={tour.title} loading="lazy" />
                    <div className="tour-img-overlay" />
                    <span className="tour-tag">{tour.tag}</span>
                    <span className="tour-price">From ${tour.price}</span>
                    <div className="tour-rating">
                      <span className="tour-star">&#9733;</span>
                      {tour.rating} <span className="tour-reviews">({tour.reviews})</span>
                    </div>
                  </div>

                  <div className="tour-body">
                    <div className="tour-meta">
                      <span>{tour.days} Days</span>
                      <span>{tour.distance}</span>
                    </div>
                    <h3 className="tour-title">{tour.title}</h3>

                    <div className="tour-highlights">
                      <h4>Highlights</h4>
                      <div className="highlights-list">
                        {tour.highlights.slice(0, 4).map((h, j) => (
                          <span key={j} className="highlight-chip">{h}</span>
                        ))}
                      </div>
                    </div>

                    <div className="tour-itinerary">
                      <h4>Itinerary</h4>
                      {tour.itinerary.slice(0, 3).map((day, j) => (
                        <div key={j} className="itinerary-item">
                          <div className="day-dot">{j + 1}</div>
                          <p className="day-desc">{day.title}</p>
                        </div>
                      ))}
                    </div>

                    <div className="tour-footer">
                      <div className="tour-from">
                        From <strong>${tour.price}</strong>
                        <span className="per-person">/person</span>
                      </div>
                      <ScrollLink to="contact" smooth duration={600} offset={-70} className="btn btn-primary">
                        Book Now
                      </ScrollLink>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="tours-cta">
            <ScrollLink
              to="contact"
              smooth
              duration={600}
              offset={-70}
              className="btn btn-outline"
              style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              Request a Custom Tour
            </ScrollLink>
          </div>
        </div>
      </section>
    </>
  );
}
