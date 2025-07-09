import { Mail, Github, Linkedin } from "lucide-react";

const HeroSocial = () => (
  <div className="flex space-x-4 z-10">
    <a href="mailto:your-email@example.com" className="bg-[#c4c4c4] p-3 rounded-md hover:bg-gray-400 transition-colors">
      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
    </a>
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-[#c4c4c4] p-3 rounded-md hover:bg-gray-400 transition-colors">
      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="bg-[#c4c4c4] p-3 rounded-md hover:bg-gray-400 transition-colors">
      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
    </a>
  </div>
);

export default HeroSocial;
