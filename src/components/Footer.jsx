import React from "react";
import logo from "@/assets/logosaas.png"; // Ensure the path is correct for your project

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP } from 'react-icons/fa'; // Import social media icons

export const Footer = () => {
  return (
    <footer className="bg-black text-sm py-10 text-[#BCBCBC] text-center">
      <div className="container">
      <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:h-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <img src={logo}  alt="Saas Logo" className="relative h-10" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Pricing</a>
          <a href="#">Customers</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
          <a href="#">Features</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="text-white text-2xl hover:text-[#3b5998]" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-white text-2xl hover:text-[#E4405F]" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white text-2xl hover:text-[#0077B5]" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube className="text-white text-2xl hover:text-[#FF0000]" />
          </a>
          <a href="#" aria-label="Pinterest">
            <FaPinterestP className="text-white text-2xl hover:text-[#E60023]" />
          </a>
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
