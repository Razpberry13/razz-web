type SkillCardProps = {
    name: string;
    icon: React.ReactNode;
  };
  
  const SkillCard = ({ name, icon }: SkillCardProps) => (
    <div className="flex flex-col items-center justify-center bg-[#2e2e2e] text-white p-4 rounded-md hover:bg-[#3a3a3a] transition-all">
      <div className="mb-2">{icon}</div>
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
  
  export default SkillCard;
  