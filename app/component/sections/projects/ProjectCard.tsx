type ProjectCardProps = {
    title: string;
    type: string;
    tech: string;
    image: string;
  };
  
  const ProjectCard = ({ title, type, tech, image }: ProjectCardProps) => (
    <div className="relative group overflow-hidden rounded-md">
      <img src={image} alt={title} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center text-white px-4 text-center">
        <h3 className="text-lg font-bold mb-1">{type}, {title}</h3>
        <p className="text-sm mb-2">{tech}</p>
        <div className="flex gap-3">
          <button className="px-4 py-1 border border-white hover:bg-white hover:text-black transition">DEMO</button>
          <button className="px-4 py-1 border border-white hover:bg-white hover:text-black transition">MORE</button>
        </div>
      </div>
    </div>
  );
  
  export default ProjectCard;
  