import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">

          {/* Left — text */}
          <div ref={leftRef} className="about-text reveal-left">
            <p className="about-tag">The CeyBee Difference</p>
            <h2 className="about-heading">
              Elevating Sri Lanka Travel<br />
              <em>to an Art Form</em>
            </h2>
            <p className="about-desc">
              We curate journeys that whisper luxury and shout authenticity. From private tea-estate tours to secluded beach villas, every detail is crafted for the discerning soul seeking the heart of Sri Lanka.
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
              {[
                { icon: '🧭', text: 'Expert local knowledge & insider access' },
                { icon: '✨', text: 'Fully personalized itineraries' },
                { icon: '🚗', text: 'Premium fleet with professional drivers' },
                { icon: '🤝', text: 'Trusted hotel & resort partnerships' },
              ].map((f, i) => (
                <div key={i} className="about-feature">
                  <span className="af-icon">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image stack */}
          <div ref={rightRef} className="about-images reveal-right">
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1609681980718-340e7f4b11d7?w=800&h=900&auto=format&fit=crop&q=80"
                alt="Sri Lanka highland waterfall"
                loading="lazy"
              />
            </div>
            <div className="about-img-secondary">
              <img
                src="https://images.unsplash.com/photo-1612862862126-865765df2ded?w=500&h=380&auto=format&fit=crop&q=80"
                alt="Sigiriya Rock Fortress aerial view"
                loading="lazy"
              />
            </div>
            <div className="about-badge">
              <span className="badge-icon">⭐</span>
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
