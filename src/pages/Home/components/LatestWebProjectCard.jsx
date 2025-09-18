import { useNavigate } from "react-router-dom";
import { webData } from "../../Web/index";
import { useState } from "react";

const LatestWebProjectCard = () => {
  const navigate = useNavigate();

  // Sélectionner les 3 derniers projets
  const recentProjects = webData.sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
      {recentProjects.map((web) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
          <div
            key={web.id}
            onClick={() => navigate(`/web/${web.id}`)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex w-full max-w-64 cursor-pointer flex-col items-center justify-center"
          >
           <div className="relative h-50 w-full max-w-sm transform rounded-md overflow-hidden group">
  {/* Image de couverture */}
  <img
    src={web.image}
    alt={web.title}
    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  {/* Bouton Play au centre */}
  <div className="absolute inset-0 flex items-center justify-center">
    <button
      disabled
      className="bg-black/60 text-white p-4 rounded-full"
    >
      ▶
    </button>
  </div>
</div>



             

            <div className="mt-1 w-full text-start lg:mt-3">
              <span className="text-xs font-light text-custom-black-40">
                {web.category}
              </span>

              <div className="relative w-full overflow-hidden">
                <div
                  className={`${
                    isHovered ? "animate-scroll" : ""
                  } flex items-center gap-2 whitespace-nowrap text-start text-sm font-bold text-custom-black-30`}
                >
                  {isHovered ? (
                    <>
                      <p>{web.title}</p>
                      <span className="mx-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                      <p>{web.title}</p>
                    </>
                  ) : (
                    <p>{web.title}</p>
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

export default LatestWebProjectCard;
