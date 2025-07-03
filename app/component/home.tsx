import { Mail, Github, Linkedin, } from "lucide-react";

export const Hoome = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-[#d7d7d7]">
      <div className="w-full lg:w-1/2 bg-[#d7d7d7] flex flex-col justify-center items-center relative px-4 sm:px-8 py-12 lg:py-0">
        <div className="text-center lg:text-left z-10 mb-8">
          <p className="text-2xl sm:text-3xl text-black font-bold mb-2">
            Hi, I am
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Farraz Fauzan Mangali
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 font-bold">
            Data Science Student
          </p>
        </div>

        <div className="flex space-x-4 z-10">
          <a
            href="mailto:your-email@example.com"
            className="bg-[#c4c4c4] p-3 rounded-md hover:bg-gray-400 transition-colors"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c4c4c4] p-3 rounded-md hover:bg-gray-400 transition-colors"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </a>
          <a
href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c4c4c4] p-3 rounded-md hover:bg-gray-400 transition-colors"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </a>
        </div>
      </div>


      <div className="w-full lg:w-1/2 bg-[#d7d7d7] lg:bg-black flex items-end justify-center relative pb-0 min-h-[40vh] lg:min-h-screen">
        <div className="w-full flex items-end justify-center px-4">
          
        </div>
      </div>
    </section>
  );
};