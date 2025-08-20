import React, { useState, useEffect } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import LOGO from "../assets/eliteretoucher-logo.png";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed right-0 left-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/95'}`}>
      {/* Top Bar */}
       {/* <div className="flex justify-center items-center gap-3 bg-gradient-to-r from-blue-900 to-blue-800 py-2.5 text-white text-sm">
        <p className="text-blue-100 md:block hidden">
          Professional photo retouching for photographers and studios
        </p>
        <div className="gap-1 items-center inline-flex font-medium">
          <p>Start your free trial</p>
          <FiArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>  */}

      {/* Header Main */}
      <div className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={LOGO} alt="EliteRetoucher Logo" className="h-9 w-auto" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex gap-8 text-gray-700 items-center">
              <a href="#services" className="hover:text-blue-700 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="hover:text-blue-700 transition-colors font-medium">Portfolio</a>
              <a href="#pricing" className="hover:text-blue-700 transition-colors font-medium">Pricing</a>
              <a href="#about" className="hover:text-blue-700 transition-colors font-medium">About</a>
              <a href="#contact" className="hover:text-blue-700 transition-colors font-medium">Contact</a>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded-md transition-colors font-medium shadow-md">
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        md:hidden fixed inset-0 bg-gradient-to-b from-blue-900 to-blue-800 z-40
        flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      `}>
        {/* Close Button */}
        <button 
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 text-white hover:text-blue-200 transition-colors"
          aria-label="Close menu"
        >
          <FiX className="w-8 h-8" />
        </button>
        
        <nav className="flex flex-col items-center space-y-8 text-white text-xl">
          <a href="#services" className="hover:text-blue-200 transition-colors py-2 font-medium" onClick={closeMenu}>Services</a>
          <a href="#portfolio" className="hover:text-blue-200 transition-colors py-2 font-medium" onClick={closeMenu}>Portfolio</a>
          <a href="#pricing" className="hover:text-blue-200 transition-colors py-2 font-medium" onClick={closeMenu}>Pricing</a>
          <a href="#about" className="hover:text-blue-200 transition-colors py-2 font-medium" onClick={closeMenu}>About</a>
          <a href="#contact" className="hover:text-blue-200 transition-colors py-2 font-medium" onClick={closeMenu}>Contact</a>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium mt-4 transition-colors shadow-md" onClick={closeMenu}>
            Get Started
          </button>
        </nav>
        
        {/* Footer info */}
        <div className="absolute bottom-10 text-blue-200 text-sm text-center px-4">
          <p>© 2023 EliteRetoucher. Professional photo retouching services.</p>
        </div>
      </div>
    </header>
  );
};

export default NavBar;