import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const features = [
  { icon: '🧭', title: 'Expert Local Knowledge', desc: 'Our team knows Sri Lanka inside out' },
  { icon: '✨', title: 'Personalized Service', desc: 'Tailored itineraries for you' },
  { icon: '🌏', title: 'Island-wide Coverage', desc: 'Beaches to cultural landmarks' },
  { icon: '🤝', title: 'Reliable Partnerships', desc: 'Trusted hotels & quality vehicles' },
];

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div ref={leftRef} className="about-images reveal-left">
            <div className="about-float-badge">
              <strong>5+</strong>
              Years of<br />Excellence
            </div>
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1609681980718-340e7f4b11d7?w=800&h=600&auto=format&fit=crop&q=80"
                alt="Misty waterfall in Sri Lanka highlands"
                loading="lazy"
              />
            </div>
            <div className="about-img-secondary">
              <img
                src="https://images.unsplash.com/photo-1612862862126-865765df2ded?w=400&h=400&auto=format&fit=crop&q=80"
                alt="Sigiriya Rock Fortress aerial view"
                loading="lazy"
              />
            </div>
          </div>

          <div ref={rightRef} className="about-content reveal-right">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              Your Trusted Partner for<br /><span>Sri Lankan Adventures</span>
            </h2>
            <p className="about-desc">
              CeyBee Travels, based in Sri Lanka, offers comprehensive travel solutions including personalized travel plans, rent-a-car services, and hotel reservations. Our itineraries showcase the island's beauty, from serene beaches to cultural landmarks.
              <br /><br />
              With a well-maintained fleet and reliable hotel partnerships, we ensure comfort and convenience. Our trained, experienced team is committed to exceptional service and unforgettable travel experiences.
            </p>
            <div className="about-features">
              {features.map((f, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-text">
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
