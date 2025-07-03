import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";

import { SiMongodb, SiMysql, SiTypescript } from "react-icons/si";

export const Skills = () => {
  const currentSkills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "SASS", icon: <FaSass /> },
    { name: "JAVASCRIPT", icon: <FaJs /> },
    { name: "REACT", icon: <FaReact /> },
    { name: "BOOTSTRAP", icon: <FaBootstrap /> },
    { name: "GIT", icon: <FaGit /> },
    { name: "FIGMA", icon: <FaFigma /> },
  ];

  const learningSkills = [
    { name: "NODEJS", icon: <FaNodeJs /> },
    { name: "MYSQL", icon: <SiMysql /> },
    { name: "MONGODB", icon: <SiMongodb /> },
    { name: "TYPESCRIPT", icon: <SiTypescript /> },
  ];

  return (
    <section className="min-h-screen bg-[#d7d7d7] py-16 px-4 sm:px-8 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full text-center">
        <div className="relative mb-8">
          <h2 className="relative text-3xl sm:text-3xl font-bold text-black border-10 border-black inline-block px-10 py-5 bg-[#d7d7d7]">
            SKILLS
          </h2>
        </div>

        <p className="text-sm sm:text-sm text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          My technical toolkit combines frontend development expertise with data
          science capabilities, enabling me to build comprehensive solutions
          from user interface to data analysis.
        </p>

        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 tracking-wider">
            USING NOW:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {currentSkills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4 text-white text-2xl transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <h4 className="font-bold text-black text-sm tracking-wider">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 tracking-wider">
            LEARNING:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {learningSkills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4 text-white text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <h4 className="font-bold text-black text-sm tracking-wider">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="w-24 h-1 bg-black mx-auto"></div>
      </div>
    </section>
  );
};
