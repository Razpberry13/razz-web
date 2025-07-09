const filters = ["ALL", "CODED", "DESIGNED"];

const ProjectFilter = ({ active, setActive }: {
  active: string;
  setActive: (filter: string) => void;
}) => (
  <div className="flex justify-center gap-4 mb-6">
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => setActive(filter)}
        className={`px-4 py-2 border ${
          active === filter ? "bg-white text-black font-bold" : "text-white border-white"
        } transition duration-300`}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default ProjectFilter;
