"use client"
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
  } from "react-icons/fa"; // Social media icons from react-icons
  
  export const Footer = () => {
    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Back to Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              className="bg-transparent text-white py-2 px-4 rounded-md mb-4"
            >
              Back to Top
            </button>
          </div>
  
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white text-2xl hover:text-blue-600 transition-all duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-2xl hover:text-blue-700 transition-all duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-2xl hover:text-pink-600 transition-all duration-300" />
            </a>
            <a href="mailto:your-email@example.com">
              <FaEnvelope className="text-white text-2xl hover:text-gray-400 transition-all duration-300" />
            </a>
          </div>
  
          {/* All Rights Reserved Text */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    );
  };