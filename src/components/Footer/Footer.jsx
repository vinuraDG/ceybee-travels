import { Link as ScrollLink } from 'react-scroll';
const logo = '/assets/logo/logo.png';
import './Footer.css';

const quickLinks = ['About Us', 'Tours', 'Services', 'Fleet', 'Contact'];
const tourLinks = ["Nature's Romance", 'Guardian Journey', 'Beach Paradise', 'Grand Tour', 'Custom Tour'];
const socials = [
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '👤', label: 'Facebook', href: '#' },
  { icon: '🎵', label: 'TikTok', href: '#' },
  { icon: '⭐', label: 'TripAdvisor', href: '#' },
];

const scrollProps = { smooth: true, duration: 600, offset: -70 };

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <img src={logo} alt="CeyBee Travels" />
            </div>
            <p>Your trusted partner for exploring the beautiful island of Sri Lanka. We create unforgettable travel experiences with personalized service and local expertise.</p>
            <div className="footer-socials">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="footer-social" title={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <ScrollLink to={l.toLowerCase().replace(' us', '')} {...scrollProps} style={{ cursor: 'pointer' }}>
                    {l}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tours</h4>
            <ul>
              {tourLinks.map((l, i) => (
                <li key={i}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li><a href="tel:+94773506345">📞 +94 77 350 6345</a></li>
              <li><a href="mailto:info@ceyBeetravels.lk">✉️ info@ceyBeetravels.lk</a></li>
              <li><a href="#">📍 Sri Lanka</a></li>
              <li><a href="https://wa.me/94773506345" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 CeyBee Travels. All Rights Reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
