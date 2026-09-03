import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Legal.css';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Privacy Policy | CeyBee Travels';
    return () => { document.title = 'CeyBee Travels | Sri Lanka Tours & Travel'; };
  }, []);

  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <button className="legal-back-btn" onClick={() => navigate(-1)}>← Back</button>
            <h1>Privacy Policy</h1>
            <p>Last updated: January 2026</p>
          </div>
        </div>

        <div className="container legal-body">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>At CeyBee Travels, we collect information you provide directly to us, such as when you:</p>
            <ul>
              <li>Book a tour or service through our website</li>
              <li>Contact us via phone, email, or WhatsApp</li>
              <li>Fill out forms on our website</li>
              <li>Interact with us on social media</li>
            </ul>
            <p>This information may include your name, email address, phone number, travel dates, group size, and preferences.</p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our travel services</li>
              <li>Process bookings and travel arrangements</li>
              <li>Communicate with you about your travel plans</li>
              <li>Send you updates about our tours and promotions</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
            <ul>
              <li>With trusted service providers who assist us in operating our business</li>
              <li>With hotels, transport providers, and other travel partners to fulfill your bookings</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section className="legal-section">
            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your personal information</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>
          </section>

          <section className="legal-section">
            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:ceybeetravels@gmail.com">ceybeetravels@gmail.com</a></li>
              <li>WhatsApp: <a href="https://wa.me/94773506345" target="_blank" rel="noopener noreferrer">+94 77 350 6345</a></li>
              <li>Phone: <a href="tel:+94773506345">+94 77 350 6345</a></li>
              <li>Location: Galle, Sri Lanka</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
