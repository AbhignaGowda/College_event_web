import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const hackathonDate = new Date('2024-10-25T00:00:00'); // Hackathon start date

  const [timeLeft, setTimeLeft] = useState(null); // Initially set to null to avoid server-side mismatch
  const [isClient, setIsClient] = useState(false); // Check for client-side rendering

  useEffect(() => {
    // Ensure the component only renders on the client-side
    setIsClient(true);

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(hackathonDate));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  function getTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  if (!isClient || !timeLeft) {
    return null; // Avoid rendering on the server-side and during initial hydration
  }

  return (
    <div className="countdown-timer bg-gray-200 p-4 rounded-lg shadow-md text-center animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-700 animate-bounce">Hackathon Starts In</h2>
      <div className="mt-4 text-4xl font-bold text-red-500">
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
      </div>
    </div>
  );
};

export default CountdownTimer;
