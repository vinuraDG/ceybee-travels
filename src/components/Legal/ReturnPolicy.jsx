import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Legal.css';

export default function ReturnPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Return & Cancellation Policy | CeyBee Travels';
    return () => { document.title = 'CeyBee Travels | Sri Lanka Tours & Travel'; };
  }, []);

  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <button className="legal-back-btn" onClick={() => navigate(-1)}>← Back</button>
            <h1>Return & Cancellation Policy</h1>
            <p>Last updated: January 2026</p>
          </div>
        </div>

        <div className="container legal-body">
          <section className="legal-section">
            <h2>1. Cancellation Policy</h2>
            <p>We understand that travel plans can change. Our cancellation policy is designed to be fair while protecting both our customers and business partners.</p>
            <p><strong>Tour Package Cancellations:</strong></p>
            <ul>
              <li>30+ days before departure: Full refund minus 10% processing fee</li>
              <li>15–29 days before departure: 75% refund</li>
              <li>7–14 days before departure: 50% refund</li>
              <li>3–6 days before departure: 25% refund</li>
              <li>Less than 3 days or no-show: No refund</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Hotel Booking Cancellations</h2>
            <p>Hotel cancellation policies vary by property and booking type:</p>
            <ul>
              <li>Standard bookings: Free cancellation up to 24–48 hours before check-in</li>
              <li>Non-refundable bookings: No cancellation allowed</li>
              <li>Peak season bookings: May have stricter cancellation terms</li>
            </ul>
            <p>Specific cancellation terms will be clearly communicated at the time of booking.</p>
          </section>

          <section className="legal-section">
            <h2>3. Transportation Services</h2>
            <p><strong>Car Rental with Driver:</strong></p>
            <ul>
              <li>24+ hours notice: Full refund</li>
              <li>12–24 hours notice: 50% refund</li>
              <li>Less than 12 hours: No refund</li>
            </ul>
            <p><strong>Airport Transfers:</strong></p>
            <ul>
              <li>6+ hours notice: Full refund</li>
              <li>Less than 6 hours: No refund</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Force Majeure</h2>
            <p>In case of unforeseen circumstances beyond our control (natural disasters, political unrest, pandemic restrictions, etc.), we will work with you to:</p>
            <ul>
              <li>Reschedule your trip to a later date</li>
              <li>Modify your itinerary to avoid affected areas</li>
              <li>Provide credit for future travel</li>
              <li>Process refunds based on recoverable costs from suppliers</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Refund Process</h2>
            <ul>
              <li>Refunds will be processed within 7–14 business days</li>
              <li>Refunds will be made to the original payment method</li>
              <li>Bank processing fees may apply</li>
              <li>Currency conversion charges (if applicable) are non-refundable</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Travel Insurance</h2>
            <p>We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen circumstances, medical emergencies, and trip cancellations.</p>
          </section>

          <section className="legal-section">
            <h2>7. How to Cancel</h2>
            <p>To cancel your booking:</p>
            <ul>
              <li>Contact us via WhatsApp: <a href="https://wa.me/94773506345" target="_blank" rel="noopener noreferrer">+94 77 350 6345</a></li>
              <li>Email us at: <a href="mailto:ceybeetravels@gmail.com">ceybeetravels@gmail.com</a></li>
              <li>Provide your booking reference number</li>
              <li>Specify the reason for cancellation</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Contact Us</h2>
            <p>For any questions regarding cancellations or refunds:</p>
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
