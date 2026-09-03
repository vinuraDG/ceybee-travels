import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { IconPhone, IconMail, IconMapPin, IconWhatsApp, IconInstagram, IconFacebook, IconTikTok, IconTripAdvisor } from '../common/Icons';
import './Footer.css';

const logo = '/assets/logo/logo.png';

const quickLinks = ['About Us', 'Tours', 'Services', 'Fleet', 'Contact'];
const tourLinks = ["Nature's Romance", 'Guardian Journey', 'Beach Paradise', 'Grand Tour', 'Custom Tour'];
const socials = [
  { Icon: IconInstagram,   label: 'Instagram',   href: '#' },
  { Icon: IconFacebook,    label: 'Facebook',    href: '#' },
  { Icon: IconTikTok,      label: 'TikTok',      href: '#' },
  { Icon: IconTripAdvisor, label: 'TripAdvisor', href: '#' },
];
const contacts = [
  { Icon: IconPhone,    text: '+94 77 350 6345',       href: 'tel:+94773506345' },
  { Icon: IconMail,     text: 'ceybeetravels@gmail.com', href: 'mailto:ceybeetravels@gmail.com' },
  { Icon: IconMapPin,   text: 'Galle, Sri Lanka',       href: '#' },
  { Icon: IconWhatsApp, text: 'WhatsApp',              href: 'https://wa.me/94773506345', external: true },
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
            <p>CeyBee Travels is a Sri Lanka-based travel company that plans trips built around you. Local knowledge, honest service, and people who actually know the island.</p>
            <div className="footer-socials">
              {socials.map(({ Icon, label, href }, i) => (
                <a key={i} href={href} className="footer-social" title={label} target="_blank" rel="noopener noreferrer">
                  <Icon width={18} height={18} />
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
              {contacts.map(({ Icon, text, href, external }, i) => (
                <li key={i}>
                  <a href={href} target={external ? '_blank' : undefined} rel="noopener noreferrer" className="footer-contact-link">
                    <Icon width={14} height={14} />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Copyright 2026 CeyBee Travels. All Rights Reserved | Designed by <a href="#" className="footer-credit">Zentrix Solutions</a></span>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/return-policy">Return Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
