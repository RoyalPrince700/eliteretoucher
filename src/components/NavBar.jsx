import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LOGO from "../assets/eliteretoucher-logo.png";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen) {
        setIsMenuOpen(false); // Close menu on scroll
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed right-0 left-0 top-0 z-50 transition-all duration-300 
          border-b border-gray-300
          ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img src={LOGO} alt="EliteRetoucher Logo" className="h-9 w-auto" />
              </div>

              {/* Desktop Navigation */}
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
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 bg-gradient-to-b from-blue-900 to-blue-800
          flex flex-col items-center justify-center
          transform transition-all duration-500 ease-in-out
          ${isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto z-40" : "-translate-y-full opacity-0 pointer-events-none z-40"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 text-white hover:text-blue-200 transition-colors"
          aria-label="Close menu"
        >
          <FiX className="w-8 h-8" />
        </button>

        {/* Mobile Nav */}
        <nav className="flex flex-col items-center space-y-8 text-white text-xl">
          <a href="#services" onClick={closeMenu} className="hover:text-blue-200 transition-colors py-2 font-medium">Services</a>
          <a href="#portfolio" onClick={closeMenu} className="hover:text-blue-200 transition-colors py-2 font-medium">Portfolio</a>
          <a href="#pricing" onClick={closeMenu} className="hover:text-blue-200 transition-colors py-2 font-medium">Pricing</a>
          <a href="#about" onClick={closeMenu} className="hover:text-blue-200 transition-colors py-2 font-medium">About</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-blue-200 transition-colors py-2 font-medium">Contact</a>
          <button
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium mt-4 transition-colors shadow-md"
            onClick={closeMenu}
          >
            Get Started
          </button>
        </nav>

        {/* Footer info */}
        <div className="absolute bottom-10 text-blue-200 text-sm text-center px-4">
          <p>© 2023 EliteRetoucher. Professional photo retouching services.</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
