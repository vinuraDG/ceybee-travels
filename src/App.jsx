import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Destinations from './components/Destinations/Destinations';
import Tours from './components/Tours/Tours';
import Services from './components/Services/Services';
import Fleet from './components/Fleet/Fleet';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/common/FloatingButtons';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Tours />
        <Services />
        <Fleet />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
