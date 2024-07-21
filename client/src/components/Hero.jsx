/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */


const Hero = ({onDiscoverClick, onJourneyClick, onCheckHealthClick}) => {
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>

        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>

        <div className="buttons">
          <button onClick={onCheckHealthClick}>Check Your Health</button>
          <button onClick={onJourneyClick}>Start Your Journey</button>
          <button onClick={onDiscoverClick}>Discover Your Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
