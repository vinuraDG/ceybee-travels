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
            Real journeys, real memories — moments captured by our travelers
          </p>
        </div>
      </div>

      <div className="gallery-strip">
        <div className="gallery-track row-1">
          {row1.map((img, i) => (
            <div key={i} className="gallery-img">
              <img src={img} alt={`Sri Lanka moment ${i + 1}`} loading="lazy" />
              <div className="gallery-img-overlay"><span>📸</span></div>
            </div>
          ))}
        </div>
        <div className="gallery-track row-2">
          {row2.map((img, i) => (
            <div key={i} className="gallery-img">
              <img src={img} alt={`Sri Lanka moment ${i + 1}`} loading="lazy" />
              <div className="gallery-img-overlay"><span>📸</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
