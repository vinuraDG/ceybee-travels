import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { testimonials, stats } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { IconStar } from '../common/Icons';
import './Testimonials.css';

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          setVal(Math.round(current));
          if (current >= target) clearInterval(timer);
        }, 25);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="num">{val}{suffix}</span>;
}

export default function Testimonials() {
  const headerRef = useScrollReveal();

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title light">
            What Our <span>Travelers Say</span>
          </h2>
          <p className="section-subtitle light">
            Real experiences from our satisfied customers around the world
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="t-card"
            >
              <div className="t-stars">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <IconStar key={si} width={14} height={14} style={{ color: '#F5A623' }} />
                ))}
              </div>
              <p className="t-text">"{t.text}"</p>
              <div className="t-author">
                <div className="t-avatar">{t.initials}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-country">{t.country}</div>
                  <div className="t-tour">{t.tour}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="stats-strip">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="stat-cell"
            >
              <Counter target={s.num} suffix={s.suffix} />
              <div className="lbl">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
