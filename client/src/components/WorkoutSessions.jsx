/* eslint-disable react/no-unescaped-entities */

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Join our top workout sessions designed to help you achieve your fitness goals. Our sessions are tailored for all fitness levels and focus on strength, endurance, and flexibility.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">

        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our featured bootcamps are intensive training programs aimed at pushing your limits. With expert trainers and dynamic routines, you will experience a full-body workout that challenges you both mentally and physically.
        </p>

        <div className="bootcamps">
          <div>
          <h4>Strength and Conditioning</h4>
            <p>
              Focus on building muscle strength and conditioning with a mix of weight training and cardio exercises. Suitable for all fitness levels, this bootcamp will help you increase your overall strength and stamina.
            </p>
          </div>
          <div>
          <h4>High-Intensity Interval Training (HIIT)</h4>
            <p>
              HIIT involves short bursts of intense exercise followed by rest periods. It's a great way to burn calories and improve cardiovascular health in a short amount of time.
            </p>
          </div>
          <div>
          <h4>Yoga and Flexibility</h4>
            <p>
              Enhance your flexibility, balance, and mental well-being with our yoga sessions. Perfect for all levels, these sessions combine traditional yoga poses with modern stretching techniques.
            </p>
          </div>
          <div>
          <h4>Functional Fitness</h4>
            <p>
              Focus on movements that improve your daily activities. Functional fitness training includes exercises that enhance your strength, coordination, and balance through real-life movements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
