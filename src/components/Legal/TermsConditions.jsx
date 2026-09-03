import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Legal.css';

export default function TermsConditions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Terms & Conditions | CeyBee Travels';
    return () => { document.title = 'CeyBee Travels | Sri Lanka Tours & Travel'; };
  }, []);

  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <button className="legal-back-btn" onClick={() => navigate(-1)}>← Back</button>
            <h1>Terms & Conditions</h1>
            <p>Last updated: January 2026</p>
          </div>
        </div>

        <div className="container legal-body">
          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>By accessing and using CeyBee Travels' services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section className="legal-section">
            <h2>2. Services Provided</h2>
            <p>CeyBee Travels provides the following services:</p>
            <ul>
              <li>Custom travel itinerary planning</li>
              <li>Car rental services with professional drivers</li>
              <li>Hotel and accommodation bookings</li>
              <li>Airport transfer services</li>
              <li>Local tour guide services</li>
              <li>Travel consultation and support</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Booking and Payment</h2>
            <p><strong>Booking Process:</strong></p>
            <ul>
              <li>All bookings must be confirmed in writing</li>
              <li>A deposit may be required to secure your booking</li>
              <li>Full payment is typically required before service commencement</li>
              <li>Prices are subject to change until booking is confirmed</li>
            </ul>
            <p><strong>Payment Terms:</strong></p>
            <ul>
              <li>Payment can be made via bank transfer, credit card, or cash</li>
              <li>All prices are quoted in USD unless otherwise specified</li>
              <li>Additional charges may apply for last-minute bookings</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Customer Responsibilities</h2>
            <p>As a customer, you are responsible for:</p>
            <ul>
              <li>Providing accurate information for bookings</li>
              <li>Having valid travel documents (passport, visa, etc.)</li>
              <li>Following local laws and customs</li>
              <li>Arriving on time for scheduled services</li>
              <li>Taking care of personal belongings</li>
              <li>Respecting our staff and service providers</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Our Responsibilities</h2>
            <p>CeyBee Travels commits to:</p>
            <ul>
              <li>Provide services as described in your booking</li>
              <li>Maintain professional standards</li>
              <li>Ensure vehicle safety and driver competency</li>
              <li>Provide 24/7 customer support during your trip</li>
              <li>Handle your personal information responsibly</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Limitation of Liability</h2>
            <p>CeyBee Travels' liability is limited to the cost of services provided. We are not responsible for:</p>
            <ul>
              <li>Acts of nature, weather conditions, or natural disasters</li>
              <li>Political unrest, strikes, or government actions</li>
              <li>Third-party service provider failures</li>
              <li>Personal injury or loss of personal property</li>
              <li>Indirect or consequential damages</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Travel Insurance</h2>
            <p>We strongly recommend that all travelers purchase comprehensive travel insurance covering medical expenses, trip cancellation, and personal belongings.</p>
          </section>

          <section className="legal-section">
            <h2>8. Modifications and Changes</h2>
            <ul>
              <li>Changes to bookings may incur additional charges</li>
              <li>We reserve the right to modify itineraries for safety reasons</li>
              <li>Alternative arrangements will be provided when possible</li>
              <li>Significant changes will be communicated promptly</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Complaints and Disputes</h2>
            <p>If you have any complaints or disputes:</p>
            <ul>
              <li>Contact us immediately during your trip for immediate resolution</li>
              <li>Submit written complaints within 30 days of service completion</li>
              <li>We will investigate and respond within 14 business days</li>
              <li>Disputes will be resolved through good faith negotiation</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Governing Law</h2>
            <p>These terms are governed by the laws of Sri Lanka. Any disputes will be subject to the jurisdiction of Sri Lankan courts.</p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Updated terms will be posted on our website with the revision date.</p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Information</h2>
            <p>For questions about these Terms and Conditions:</p>
            <ul>
              <li>WhatsApp: <a href="https://wa.me/94773506345" target="_blank" rel="noopener noreferrer">+94 77 350 6345</a></li>
              <li>Email: <a href="mailto:ceybeetravels@gmail.com">ceybeetravels@gmail.com</a></li>
              <li>Location: Galle, Sri Lanka</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
