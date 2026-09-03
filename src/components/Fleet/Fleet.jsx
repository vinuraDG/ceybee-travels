import { motion } from 'framer-motion';
import { fleet } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { IconShield, IconUsers, IconWrench, IconBriefcase } from '../common/Icons';
import './Fleet.css';

const badges = [
  { Icon: IconShield,    label: 'Fully Insured' },
  { Icon: IconUsers,     label: 'Expert Drivers' },
  { Icon: IconWrench,    label: 'Well Maintained' },
  { Icon: IconBriefcase, label: 'Spacious Luggage' },
];

export default function Fleet() {
  const headerRef = useScrollReveal();

  return (
    <section id="fleet" className="fleet">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-tag">Our Fleet</span>
          <h2 className="section-title">
            Travel in <span>Comfort &amp; Style</span>
          </h2>
          <p className="section-subtitle">
            Well-maintained vehicles with experienced local drivers for your comfort and safety
          </p>
        </div>

        <div className="fleet-grid">
          {fleet.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="fleet-card"
            >
              <div className="fleet-img">
                <img src={v.image} alt={v.name} loading="lazy" />
                <div className="fleet-img-overlay" />
                <span className="fleet-pax">
                  <IconUsers width={13} height={13} /> {v.passengers} pax
                </span>
              </div>
              <div className="fleet-body">
                <div className="fleet-name">{v.name}</div>
                <div className="fleet-feats">
                  {v.features.map((f, j) => (
                    <div key={j} className="fleet-feat">{f}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="fleet-badges">
          {badges.map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="fleet-badge"
            >
              <span className="fleet-badge-icon"><Icon width={20} height={20} /></span>
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
