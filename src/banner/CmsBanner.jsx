import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CmsBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
 
  const navigate = useNavigate(); 

  function handleGetStarted() {
    navigate("/"); 
  }
  return (
    <div className="relative min-h-60 pt-52 pb-52 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
    {/* Video Background */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
    >
     {/* <source src="/assets/video.mp4" type="video/mp4" /> */}
     <source src="/src/assets/video/easy_communication.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Animated overlay */}
    <div className=" bg-black opacity-50"></div>

    {/* Content container */}
    <div
      className={`relative h-full flex flex-col items-center justify-center text-white transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
     
     

      {/* CTA Button */}
     

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-x-24 translate-y-24"></div>
    </div>
  </div>
  );
};

export default CmsBanner;