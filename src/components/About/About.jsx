import { useScrollReveal } from '../../hooks/useScrollReveal';
import { IconCompass, IconSparkles, IconCar, IconHandshake, IconAward } from '../common/Icons';
import './About.css';

const logo = '/assets/logo/ceybee.jpeg';

const features = [
  { Icon: IconCompass,   text: 'Expert local knowledge & insider access' },
  { Icon: IconSparkles,  text: 'Fully personalized itineraries' },
  { Icon: IconCar,       text: 'Premium fleet with professional drivers' },
  { Icon: IconHandshake, text: 'Trusted hotel & resort partnerships' },
];

export default function About() {
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">

          {/* ── Left: company story ── */}
          <div ref={leftRef} className="about-text reveal-left">
            <p className="about-tag">The CeyBee Difference</p>
            <h2 className="about-heading">
              Elevating Sri Lanka Travel<br />
              <em>to an Art Form</em>
            </h2>
            <p className="about-desc">
              CeyBee Travels is a boutique travel company based in Colombo, Sri Lanka.
              Founded by a team of local travel experts, we put together trips that show
              you the real island: ancient ruins, misty highlands, golden beaches, and the
              genuinely warm people you meet along the way.
            </p>
            <p className="about-desc">
              Every trip is planned around you, not a template. Whether you want to watch
              leopards at Yala at dawn, sip tea on a Nuwara Eliya estate, or surf the
              waves at Arugam Bay, we put it together and take care of the details.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <strong>1,200+</strong>
                <span>Happy Travelers</span>
              </div>
              <div className="about-stat">
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
              <div className="about-stat">
                <strong>50+</strong>
                <span>Curated Tours</span>
              </div>
            </div>

            <div className="about-features">
              {features.map(({ Icon, text }, i) => (
                <div key={i} className="about-feature">
                  <span className="af-icon"><Icon width={18} height={18} /></span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: main image + logo card ── */}
          <div ref={rightRef} className="about-images reveal-right">
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1609681980718-340e7f4b11d7?w=800&h=900&auto=format&fit=crop&q=80"
                alt="Sri Lanka highland waterfall"
                loading="lazy"
              />
            </div>

            {/* Logo card replaces the small secondary image */}
            <div className="about-logo-card">
              <div className="about-logo-card-bg" />
              <img src={logo} alt="CeyBee Travels" className="about-logo-card-img" />
              <p className="about-logo-card-name">CeyBee Travels</p>
            </div>

            <div className="about-badge">
              <span className="badge-icon"><IconAward width={22} height={22} /></span>
              <div>
                <strong>Certified Excellence</strong>
                <p>Recognised by the Sri Lanka Tourism Development Authority</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
