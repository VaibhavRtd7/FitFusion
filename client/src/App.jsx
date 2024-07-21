import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
// import Main from './components/Main';

const App = () => {

  const pricingRef = useRef(null);
  const journeyRef = useRef(null);
  const healthRef = useRef(null);

  const scrollToPricing = () => {
    // console.log("scrollToPricing")
    // console.log("pricingRef.current", pricingRef.current)
    if (pricingRef.current) {
      // console.log("Pricing.ref.Current");
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const scrollToJourney = () => {
    if(journeyRef.current) {
      journeyRef.current.scrollIntoView({ behavior : 'smooth'})
    }
  }
  const scrollToCheckHealth = () => {
    if(healthRef.current) {
      healthRef.current.scrollIntoView({ behavior : 'smooth'})
    }
  }



  return (
    <Router>
      <Navbar />
      <Hero  onDiscoverClick={scrollToPricing} onJourneyClick={scrollToJourney} onCheckHealthClick={scrollToCheckHealth} />
    
    <div ref={journeyRef}> 
      <WorkoutSessions />
    </div>

      <Gallery />

      <div ref={pricingRef}>
        <Pricing />
      </div>

      <Contact />

   <div ref={healthRef}>
      <BMICalculator />
   </div>

      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
