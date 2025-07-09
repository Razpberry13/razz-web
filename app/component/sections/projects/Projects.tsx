import { useState } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "eatsome",
    type: "coded, designed",
    tech: "React.js test (Browsing in React.js using Vite API)",
    image: "/assets/eatsome.jpg",
    category: "CODED",
  },
  // Tambahkan data project lainnya di sini
];

const Projects = () => {
  const [active, setActive] = useState("ALL");

  const filteredProjects = active === "ALL"
    ? projectData
    : projectData.filter(p => p.category === active);

  return (
    <section className="py-16 px-4 sm:px-8 bg-[#1d1d1d] text-white">
      <ProjectHeader />
      <ProjectFilter active={active} setActive={setActive} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
      <p className="mt-12 text-center text-sm text-gray-400">And many more to come!</p>
    </section>
  );
};

export default Projects;
