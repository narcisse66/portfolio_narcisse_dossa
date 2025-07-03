import { useEffect } from "react";
import AvailableDiv from "../../components/AvailableDiv";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-8">
      <AvailableDiv />

      <h1 className="flex flex-col items-start text-4xl font-bold text-custom-black-10 lg:text-5xl xl:text-6xl">
        <span>Portfolio</span>
        <span>Highlights:</span>
        <span>My Projects</span>
      </h1>

      <ProjectCard />
    </div>
  );
};

export default Projects;
