import React, { useRef } from 'react';
import Hero from './Hero';
import Pricing from './Pricing';

const Main = () => {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Hero onDiscoverClick={scrollToPricing} />
      
      <div ref={pricingRef}>
        <Pricing />
      </div>
    </div>
  );
};

export default Main;
