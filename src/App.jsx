import React, { useState, useEffect } from "react";

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-01T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        document.querySelector(".countdown").classList.add("hidden");
        document.querySelector(".celebration").classList.remove("hidden");
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center text-center">
      <div className="text-white font-bold">
        <div className="countdown">
          <h1 className="text-4xl md:text-6xl mb-4 animate-bounce">Yangi yilga qancha qoldi?</h1>
          <div className="text-3xl md:text-5xl grid grid-cols-4 gap-4">
            <div>
              <p>{timeLeft.days}</p>
              <p className="text-xl md:text-2xl">Kun</p>
            </div>
            <div>
              <p>{timeLeft.hours}</p>
              <p className="text-xl md:text-2xl">Soat</p>
            </div>
            <div>
              <p>{timeLeft.minutes}</p>
              <p className="text-xl md:text-2xl">Daqiqa</p>
            </div>
            <div>
              <p>{timeLeft.seconds}</p>
              <p className="text-xl md:text-2xl">Sekund</p>
            </div>
          </div>
        </div>
        <div className="celebration hidden">
          <h1 className="text-6xl md:text-8xl mb-4 animate-pulse">Yangi Yil Muborak!</h1>
          <p className="text-2xl md:text-4xl">2025-yilga xush kelibsiz!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
