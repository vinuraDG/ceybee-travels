import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconClose } from '../common/Icons';
import './Navbar.css';

const logo = '/assets/logo/logo.png';

const navItems = [
  { label: 'Home',     to: 'hero' },
  { label: 'About',    to: 'about' },
  { label: 'Tours',    to: 'tours' },
  { label: 'Services', to: 'services' },
  { label: 'Fleet',    to: 'fleet' },
  { label: 'Contact',  to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const scrollProps = { smooth: true, duration: 600, offset: -70 };

  const goToSection = (to) => {
    setMenuOpen(false);
    if (isHome) return;
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(to);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const BrandLogo = () => isHome ? (
    <ScrollLink to="hero" {...scrollProps} className="nav-logo">
      <img src={logo} alt="CeyBee Travels Logo" />
      <div className="nav-brand-text">
        <span className="nav-brand-name">CeyBee</span>
        <span className="nav-brand-sub">Travels</span>
      </div>
    </ScrollLink>
  ) : (
    <a href="/" className="nav-logo" onClick={e => { e.preventDefault(); navigate('/'); }}>
      <img src={logo} alt="CeyBee Travels Logo" />
      <div className="nav-brand-text">
        <span className="nav-brand-name">CeyBee</span>
        <span className="nav-brand-sub">Travels</span>
      </div>
    </a>
  );

  const NavLink = ({ to, label, className, onClick }) => isHome ? (
    <ScrollLink to={to} {...scrollProps} activeClass="active" spy className={className} onClick={onClick}>
      {label}
    </ScrollLink>
  ) : (
    <a href={`/#${to}`} className={className} onClick={e => { e.preventDefault(); goToSection(to); if (onClick) onClick(); }}>
      {label}
    </a>
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <BrandLogo />

          <div className="nav-links">
            {navItems.map(item => (
              <NavLink key={item.to} to={item.to} label={item.label} />
            ))}
          </div>

          <div className="nav-cta">
            <NavLink to="contact" label="Book Now" className="btn-book" />
          </div>

          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <IconClose width={24} height={24} />
        </button>
        {navItems.map(item => (
          <NavLink key={item.to} to={item.to} label={item.label} onClick={() => setMenuOpen(false)} />
        ))}
        <NavLink to="contact" label="Book Now" className="btn btn-primary" onClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
