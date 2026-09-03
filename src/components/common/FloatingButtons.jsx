import { useState, useEffect } from 'react';
import { IconWhatsApp, IconChevronUp } from './Icons';
import './FloatingButtons.css';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/94773506345"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        title="Chat on WhatsApp"
      >
        <IconWhatsApp width={26} height={26} />
      </a>

      <button
        className={`back-top ${showTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <IconChevronUp width={20} height={20} />
      </button>
    </>
  );
}
