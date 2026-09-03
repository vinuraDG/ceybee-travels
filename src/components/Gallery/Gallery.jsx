import { galleryImages } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Gallery.css';

const row1 = [...galleryImages, ...galleryImages];
const row2 = [...galleryImages.slice(4), ...galleryImages.slice(0, 4), ...galleryImages.slice(4), ...galleryImages.slice(0, 4)];

export default function Gallery() {
  const headerRef = useScrollReveal();

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-tag">Captured Moments</span>
          <h2 className="section-title light">
            Live from <span>Sri Lanka</span>
          </h2>
          <p className="section-subtitle light">
            Real journeys, real moments, captured by the people who traveled with us
          </p>
        </div>
      </div>

      <div className="gallery-strip">
        <div className="gallery-track row-1">
          {row1.map((img, i) => (
            <div key={i} className="gallery-img">
              <img src={img} alt={`Sri Lanka moment ${i + 1}`} loading="lazy" />
              <div className="gallery-img-overlay">
                <div className="gallery-hover-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-track row-2">
          {row2.map((img, i) => (
            <div key={i} className="gallery-img">
              <img src={img} alt={`Sri Lanka moment ${i + 1}`} loading="lazy" />
              <div className="gallery-img-overlay">
                <div className="gallery-hover-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
