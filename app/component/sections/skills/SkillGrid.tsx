import { Code, Database, BarChart, GitBranch } from "lucide-react";
import SkillCard from "./SkillCard";

const skills = [
  { name: "C++", icon: <Code size={32} /> },
  { name: "Graph Algorithms", icon: <GitBranch size={32} /> },
  { name: "Data Cleaning", icon: <Database size={32} /> },
  { name: "Visualization", icon: <BarChart size={32} /> },
];

const SkillGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {skills.map((skill, index) => (
      <SkillCard key={index} name={skill.name} icon={skill.icon} />
    ))}
  </div>
);

export default SkillGrid;
