import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { IconClose } from '../common/Icons';
import './Navbar.css';
const logo = '/assets/logo/logo.png';

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Tours', to: 'tours' },
  { label: 'Services', to: 'services' },
  { label: 'Fleet', to: 'fleet' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const scrollProps = { smooth: true, duration: 600, offset: -70 };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <ScrollLink to="hero" {...scrollProps} className="nav-logo">
            <img src={logo} alt="CeyBee Travels Logo" />
            <div className="nav-brand-text">
              <span className="nav-brand-name">Cey Bee</span>
              <span className="nav-brand-sub">Travels</span>
            </div>
          </ScrollLink>

          <div className="nav-links">
            {navItems.map(item => (
              <ScrollLink key={item.to} to={item.to} {...scrollProps} activeClass="active" spy>
                {item.label}
              </ScrollLink>
            ))}
          </div>

          <div className="nav-cta">
            <ScrollLink to="contact" {...scrollProps} className="btn-book">
              Book Now
            </ScrollLink>
          </div>

          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><IconClose width={24} height={24} /></button>
        {navItems.map(item => (
          <ScrollLink key={item.to} to={item.to} {...scrollProps} onClick={() => setMenuOpen(false)}>
            {item.label}
          </ScrollLink>
        ))}
        <ScrollLink to="contact" {...scrollProps} className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Book Now
        </ScrollLink>
      </div>
    </>
  );
}
