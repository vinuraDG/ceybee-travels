import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TourDetail.css';

export default function TourDetail({ tour, onClose }) {
  const [tab, setTab] = useState('itinerary');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!tour) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="td-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={e => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className="td-panel"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 280 }}
        >
          {/* Hero */}
          <div className="td-hero" style={{ backgroundImage: `url('${tour.image}')` }}>
            <div className="td-hero-overlay" />
            <button className="td-back" onClick={onClose} aria-label="Close">
              ← Back to Tours
            </button>
            <div className="td-hero-content">
              <div className="td-tags">
                <span className="td-tag">{tour.tag}</span>
                <span className="td-tag td-tag-alt">{tour.days} Days · {tour.distance}</span>
              </div>
              <h1 className="td-title">{tour.title}</h1>
              <div className="td-rating">
                <span className="td-star">★</span>
                <strong>{tour.rating}</strong>
                <span className="td-rev">({tour.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="td-body">
            <div className="td-main">

              {/* About */}
              <div className="td-section">
                <h2 className="td-section-title">About This Tour</h2>
                <p className="td-desc">{tour.description}</p>
              </div>

              {/* Highlights */}
              <div className="td-section">
                <h3 className="td-label">Highlights</h3>
                <div className="td-highlights">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="td-highlight-item">
                      <span className="td-check">✓</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="td-stats-row">
                <div className="td-stat">
                  <span className="td-stat-icon">📅</span>
                  <div>
                    <p className="td-stat-label">Best Time</p>
                    <p className="td-stat-val">{tour.bestTime}</p>
                  </div>
                </div>
                <div className="td-stat">
                  <span className="td-stat-icon">👥</span>
                  <div>
                    <p className="td-stat-label">Group Size</p>
                    <p className="td-stat-val">{tour.groupSize}</p>
                  </div>
                </div>
                <div className="td-stat">
                  <span className="td-stat-icon">🥾</span>
                  <div>
                    <p className="td-stat-label">Difficulty</p>
                    <p className="td-stat-val">{tour.difficulty}</p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="td-tabs">
                <button className={`td-tab ${tab === 'itinerary' ? 'active' : ''}`} onClick={() => setTab('itinerary')}>
                  Detailed Itinerary
                </button>
                <button className={`td-tab ${tab === 'included' ? 'active' : ''}`} onClick={() => setTab('included')}>
                  What's Included
                </button>
              </div>

              <AnimatePresence mode="wait">
                {tab === 'itinerary' ? (
                  <motion.div key="itin" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    {tour.itinerary.map((day, i) => (
                      <div key={i} className="td-day">
                        <div className="td-day-num">Day {i + 1}</div>
                        <div className="td-day-body">
                          <h4 className="td-day-title">{day.title}</h4>
                          <p className="td-day-desc">{day.desc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div key="incl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="td-included">
                    {tour.included.map((item, i) => (
                      <div key={i} className="td-inc-item">
                        <span className="td-check-green">✓</span>
                        {item}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="td-sidebar">
              <div className="td-price-card">
                <p className="td-from">From</p>
                <p className="td-price">${tour.price}</p>
                <p className="td-per">per person</p>
                <button className="td-book-btn" onClick={onClose}>
                  Book This Tour
                </button>
                <div className="td-help">
                  <p className="td-help-title">Need Help Planning?</p>
                  <p className="td-help-desc">Our local experts are here to help you plan the perfect Sri Lanka experience.</p>
                  <a
                    href="https://wa.me/94773506345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="td-wa-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
