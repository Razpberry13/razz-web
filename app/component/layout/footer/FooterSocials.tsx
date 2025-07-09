import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
  } from "react-icons/fa";
  
  const FooterSocials = () => (
    <div className="flex justify-center gap-6 mb-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-white text-2xl hover:text-blue-600 transition-all duration-300" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-2xl hover:text-blue-700 transition-all duration-300" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white text-2xl hover:text-pink-600 transition-all duration-300" />
      </a>
      <a href="mailto:your-email@example.com">
        <FaEnvelope className="text-white text-2xl hover:text-gray-400 transition-all duration-300" />
      </a>
    </div>
  );
  
  export default FooterSocials;
  