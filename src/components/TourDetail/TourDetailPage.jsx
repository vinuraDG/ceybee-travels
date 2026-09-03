import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { tours } from '../../data/siteData';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {
  IconStar, IconCalendar, IconUsers, IconHiking,
  IconCheck, IconWhatsApp, IconMapPin, IconChevronUp,
} from '../common/Icons';
import './TourDetailPage.css';

export default function TourDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('itinerary');
  const tour = tours.find(t => String(t.id) === String(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (tour) document.title = `${tour.title} | CeyBee Travels`;
    return () => { document.title = 'CeyBee Travels | Sri Lanka Tours & Travel'; };
  }, [id, tour]);

  if (!tour) {
    return (
      <>
        <Navbar />
        <div className="tdp-not-found">
          <h2>Tour not found</h2>
          <button onClick={() => navigate('/')} className="tdp-back-btn">Back to Tours</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="tdp-page">

        {/* ── Hero ── */}
        <div className="tdp-hero" style={{ backgroundImage: `url('${tour.image}')` }}>
          <div className="tdp-hero-overlay" />
          <div className="container tdp-hero-inner">
            <button className="tdp-back-btn" onClick={() => navigate(-1)}>
              ← Back to Tours
            </button>
            <div className="tdp-hero-content">
              <div className="tdp-tags">
                <span className="tdp-tag">{tour.tag}</span>
                <span className="tdp-tag tdp-tag-alt">{tour.days} Days · {tour.distance}</span>
              </div>
              <h1 className="tdp-title">{tour.title}</h1>
              <div className="tdp-rating">
                <IconStar width={18} height={18} style={{ color: '#F5A623' }} />
                <strong>{tour.rating}</strong>
                <span className="tdp-rev">({tour.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Breadcrumb ── */}
        <div className="tdp-breadcrumb-bar">
          <div className="container tdp-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>Tours</span>
            <span>/</span>
            <span className="tdp-bc-current">{tour.title}</span>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="container tdp-body">

          {/* Main content */}
          <div className="tdp-main">

            {/* About */}
            <div className="tdp-section">
              <h2 className="tdp-section-title">About This Tour</h2>
              <p className="tdp-desc">{tour.description}</p>
            </div>

            {/* Stats row */}
            <div className="tdp-stats-row">
              <div className="tdp-stat">
                <span className="tdp-stat-icon"><IconCalendar width={24} height={24} /></span>
                <div>
                  <p className="tdp-stat-label">Best Time</p>
                  <p className="tdp-stat-val">{tour.bestTime}</p>
                </div>
              </div>
              <div className="tdp-stat">
                <span className="tdp-stat-icon"><IconUsers width={24} height={24} /></span>
                <div>
                  <p className="tdp-stat-label">Group Size</p>
                  <p className="tdp-stat-val">{tour.groupSize}</p>
                </div>
              </div>
              <div className="tdp-stat">
                <span className="tdp-stat-icon"><IconHiking width={24} height={24} /></span>
                <div>
                  <p className="tdp-stat-label">Difficulty</p>
                  <p className="tdp-stat-val">{tour.difficulty}</p>
                </div>
              </div>
              <div className="tdp-stat">
                <span className="tdp-stat-icon"><IconMapPin width={24} height={24} /></span>
                <div>
                  <p className="tdp-stat-label">Distance</p>
                  <p className="tdp-stat-val">{tour.distance}</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="tdp-section">
              <h3 className="tdp-label">Tour Highlights</h3>
              <div className="tdp-highlights">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="tdp-highlight-item">
                    <span className="tdp-check"><IconCheck width={14} height={14} /></span>
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="tdp-tabs">
              <button
                className={`tdp-tab ${tab === 'itinerary' ? 'active' : ''}`}
                onClick={() => setTab('itinerary')}
              >
                Detailed Itinerary
              </button>
              <button
                className={`tdp-tab ${tab === 'included' ? 'active' : ''}`}
                onClick={() => setTab('included')}
              >
                What's Included
              </button>
            </div>

            <AnimatePresence mode="wait">
              {tab === 'itinerary' ? (
                <motion.div
                  key="itin"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="tdp-itin"
                >
                  {tour.itinerary.map((day, i) => (
                    <div key={i} className="tdp-day">
                      <div className="tdp-day-num">Day {i + 1}</div>
                      <div className="tdp-day-body">
                        <h4 className="tdp-day-title">{day.title}</h4>
                        <p className="tdp-day-desc">{day.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="incl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="tdp-included"
                >
                  {tour.included.map((item, i) => (
                    <div key={i} className="tdp-inc-item">
                      <span className="tdp-check-green"><IconCheck width={14} height={14} /></span>
                      {item}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="tdp-sidebar">
            <div className="tdp-price-card">
              <p className="tdp-from">From</p>
              <p className="tdp-price">${tour.price}</p>
              <p className="tdp-per">per person</p>
              <a href="/#contact" className="tdp-book-btn">Book This Tour</a>
              <div className="tdp-help">
                <p className="tdp-help-title">Need Help Planning?</p>
                <p className="tdp-help-desc">
                  Our local experts are here to help you plan the perfect Sri Lanka experience.
                </p>
                <a
                  href="https://wa.me/94773506345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tdp-wa-btn"
                >
                  <IconWhatsApp width={16} height={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Other tours */}
            <div className="tdp-other-tours">
              <h4 className="tdp-other-title">Other Tours</h4>
              {tours.filter(t => t.id !== tour.id).slice(0, 3).map(t => (
                <Link key={t.id} to={`/tours/${t.id}`} className="tdp-other-item">
                  <img src={t.image} alt={t.title} className="tdp-other-img" />
                  <div className="tdp-other-info">
                    <p className="tdp-other-name">{t.title}</p>
                    <p className="tdp-other-meta">{t.days} Days · From ${t.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
