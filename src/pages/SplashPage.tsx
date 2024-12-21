import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/images/Logo/Logo.png";

const SplashPage = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the fade out animation and navigation
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigate('/auth');  // Navigate to auth page after animation
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`fixed inset-0 w-full h-full bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="max-w-md w-full px-6 flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="w-32 h-32 mb-8">
          <img
            src={Logo}
            alt="LegalSphere Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Project Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-fade-in">
          LegalSphere
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white text-center animate-fade-in-delay">
          Easy Law and Empowered Women
        </p>
      </div>
    </div>
  );
};

export default SplashPage;