import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content container */}
      <div className={`relative h-full flex flex-col items-center justify-center text-white transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Main heading */}
        <h1 className="text-5xl font-bold mb-4 text-center">
          Welcome to Our Platform
        </h1>

        {/* Subheading */}
        <p className="text-xl mb-8 text-center max-w-2xl px-4">
          Discover amazing possibilities and unlock your potential with our innovative solutions
        </p>

        {/* CTA Button */}
        <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200 transform hover:scale-105">
          Get Started
        </button>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-x-24 translate-y-24"></div>
      </div>
    </div>
  );
};

export default Banner;