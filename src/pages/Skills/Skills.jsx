import { useEffect } from "react";
import AvailableDiv from "../../components/AvailableDiv";
import SkillCard from "./components/SkillCard";
import { skillData } from "./index";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-8 text-start lg:gap-12">
      <AvailableDiv />

      <h1 className="flex flex-col items-start text-4xl font-bold text-custom-black-10 lg:text-5xl xl:text-6xl">
        <span>My Skill Stack:</span>
        <span>Crafting Digital</span>
        <span>Solutions</span>
      </h1>

      <div className="grid w-full grid-cols-1 place-content-center gap-6 md:grid-cols-2">
        {skillData.map((item, index) => (
          <SkillCard
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
