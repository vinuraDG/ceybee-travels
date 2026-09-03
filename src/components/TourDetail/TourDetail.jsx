import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconStar, IconCalendar, IconUsers, IconHiking, IconCheck, IconWhatsApp } from '../common/Icons';
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
              Back to Tours
            </button>
            <div className="td-hero-content">
              <div className="td-tags">
                <span className="td-tag">{tour.tag}</span>
                <span className="td-tag td-tag-alt">{tour.days} Days &middot; {tour.distance}</span>
              </div>
              <h1 className="td-title">{tour.title}</h1>
              <div className="td-rating">
                <IconStar width={16} height={16} style={{ color: '#F5A623' }} />
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
                      <span className="td-check"><IconCheck width={14} height={14} /></span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="td-stats-row">
                <div className="td-stat">
                  <span className="td-stat-icon"><IconCalendar width={22} height={22} /></span>
                  <div>
                    <p className="td-stat-label">Best Time</p>
                    <p className="td-stat-val">{tour.bestTime}</p>
                  </div>
                </div>
                <div className="td-stat">
                  <span className="td-stat-icon"><IconUsers width={22} height={22} /></span>
                  <div>
                    <p className="td-stat-label">Group Size</p>
                    <p className="td-stat-val">{tour.groupSize}</p>
                  </div>
                </div>
                <div className="td-stat">
                  <span className="td-stat-icon"><IconHiking width={22} height={22} /></span>
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
                        <span className="td-check-green"><IconCheck width={14} height={14} /></span>
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
                    <IconWhatsApp width={16} height={16} />
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
