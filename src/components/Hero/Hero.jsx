import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { heroSlides } from '../../data/siteData';
import './Hero.css';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollProps = { smooth: true, duration: 700, offset: -70 };
  const slide = heroSlides[current];

  return (
    <section id="hero" className="hero">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="hero-slide-bg"
          style={{ backgroundImage: `url('${slide.image}')` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <div className="hero-overlay" />

      <div className="hero-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <p className="hero-eyebrow">★★★★★ &nbsp; Trusted by 1000+ travelers</p>
            <h1 className="hero-title">{slide.title} <em>{slide.highlight}</em></h1>
            <p className="hero-sub">{slide.sub}</p>

            <div className="hero-actions">
              <ScrollLink to="tours" {...scrollProps} className="btn-hero-primary">
                Explore Packages
              </ScrollLink>
              <ScrollLink to="contact" {...scrollProps} className="btn-hero-ghost">
                Plan a Custom Tour
              </ScrollLink>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`hero-dot ${i === current ? 'active' : ''}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating search bar */}
      <div className="hero-search-wrap">
        <div className="hero-search">
          <div className="hero-search-fields">
            <div className="search-field">
              <label>Destination</label>
              <div className="search-input">
                <span className="search-icon">📍</span>
                <select>
                  <option value="">Where to go?</option>
                  <option>Sigiriya</option>
                  <option>Ella</option>
                  <option>Mirissa Beach</option>
                  <option>Kandy</option>
                  <option>Yala</option>
                  <option>Galle</option>
                </select>
              </div>
            </div>
            <div className="search-field">
              <label>Experience</label>
              <div className="search-input">
                <span className="search-icon">✨</span>
                <select>
                  <option value="">What's your mood?</option>
                  <option>Adventure</option>
                  <option>Beach & Relaxation</option>
                  <option>Cultural Heritage</option>
                  <option>Wildlife Safari</option>
                  <option>Honeymoon</option>
                  <option>Family Fun</option>
                </select>
              </div>
            </div>
            <div className="search-field">
              <label>Dates</label>
              <div className="search-input">
                <span className="search-icon">📅</span>
                <select>
                  <option value="">Approx. Month</option>
                  <option>January</option><option>February</option>
                  <option>March</option><option>April</option>
                  <option>May</option><option>June</option>
                  <option>July</option><option>August</option>
                  <option>September</option><option>October</option>
                  <option>November</option><option>December</option>
                </select>
              </div>
            </div>
          </div>
          <div className="hero-search-action">
            <ScrollLink to="contact" {...scrollProps} className="search-btn">
              🔍 Search Inquiry
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="hero-progress">
        <motion.div
          key={current}
          className="hero-progress-bar"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
        />
      </div>
    </section>
  );
}
