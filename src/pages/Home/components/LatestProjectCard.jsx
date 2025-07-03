import { useNavigate } from "react-router-dom";
import { projectData } from "../../Projects/index";
import { useState } from "react";

const LatestProjectCard = () => {
  const navigate = useNavigate();

  // Sélectionner les 3 derniers projets
  const recentProjects = projectData.sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
      {recentProjects.map((project) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
          <div
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex w-full max-w-64 cursor-pointer flex-col items-center justify-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-md object-cover transition-transform duration-300 hover:scale-105"
            />

            <div className="mt-1 w-full text-start lg:mt-3">
              <span className="text-xs font-light text-custom-black-40">
                {project.category}
              </span>

              <div className="relative w-full overflow-hidden">
                <div
                  className={`${
                    isHovered ? "animate-scroll" : ""
                  } flex items-center gap-2 whitespace-nowrap text-start text-sm font-bold text-custom-black-30`}
                >
                  {isHovered ? (
                    <>
                      <p>{project.title}</p>
                      <span className="mx-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                      <p>{project.title}</p>
                    </>
                  ) : (
                    <p>{project.title}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LatestProjectCard;
