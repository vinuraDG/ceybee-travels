import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { heroSlides } from '../../data/siteData';
import './Hero.css';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const scrollProps = { smooth: true, duration: 700, offset: -70 };
  const slide = heroSlides[current];

  return (
    <section id="hero" className="hero">
      {/* Background crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="hero-slide-bg"
          style={{ backgroundImage: `url('${slide.image}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="container hero-inner">
        <div className="hero-content">

          <div className="hero-badge hero-anim" style={{ '--d': '0s' }}>
            <span className="hero-stars">★★★★★</span>
            Trusted by 1000+ travelers
          </div>

          {/* Title — key swap triggers CSS animation */}
          <h1 key={current} className="hero-title hero-anim" style={{ '--d': '0.1s' }}>
            {slide.title}<br />
            <span className="highlight">{slide.highlight}</span>
          </h1>

          <p key={`d-${current}`} className="hero-desc hero-anim" style={{ '--d': '0.25s' }}>
            {slide.sub}
          </p>

          <div className="hero-actions hero-anim" style={{ '--d': '0.38s' }}>
            <ScrollLink to="tours" {...scrollProps} className="btn btn-primary">
              Explore Tours →
            </ScrollLink>
            <ScrollLink to="contact" {...scrollProps} className="btn btn-outline">
              Talk to a Planner
            </ScrollLink>
          </div>

          <div className="hero-dots hero-anim" style={{ '--d': '0.48s' }}>
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

        <div className="hero-stats">
          {[
            { num: '1000+', label: 'Happy Travelers' },
            { num: '50+', label: 'Tour Packages' },
            { num: '5★', label: 'Avg. Rating' },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="hero-stat-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
            >
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hero-progress">
        <motion.div
          key={current}
          className="hero-progress-bar"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5.5, ease: 'linear' }}
        />
      </div>

      <div className="scroll-hint">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
