import React, { useState, useEffect } from 'react';

const Countdown = ({ openModal }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2025-09-01T09:00:00");
      const now = new Date();
      const diff = eventDate - now;
      
      if (diff > 0) {
        return {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <h2>Próximo simulacro de admisión en:</h2>
        <div className="countdown">
          <div>{timeLeft.days}<span>días</span></div>
          <div>{timeLeft.hours}<span>horas</span></div>
          <div>{timeLeft.minutes}<span>min</span></div>
          <div>{timeLeft.seconds}<span>seg</span></div>
        </div>
 
      </div>
    </section>
  );
};

export default Countdown;