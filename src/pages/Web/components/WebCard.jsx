import { useNavigate } from "react-router-dom";
import { webData } from "../index";
import { useState } from "react";

const WebCard = () => {
  const navigate = useNavigate();

  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-6 md:grid-cols-2 extra:grid-cols-3">
      {webData.map((item) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
          <div
            key={item.id}
            onClick={() => navigate(`/web/${item.id}`)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex h-auto w-full transform cursor-pointer flex-col items-start justify-center gap-3 overflow-hidden"
          >
           <div className="relative h-auto w-full max-w-sm transform rounded-md overflow-hidden group">
  {/* Image de couverture */}
  <img
    src={item.image}
    alt={item.title}
    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
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


             

            <div className="space-y-1">
              <span className="text-sm font-light text-custom-black-40">
                {item.category}
              </span>

              {/* Animation de défilement du titre */}
              <div className="relative w-full overflow-hidden">
                <div
                  className={`${
                    isHovered ? "animate-scroll" : ""
                  } flex items-center gap-2 whitespace-nowrap text-lg font-bold text-custom-black-30`}
                >
                  {isHovered ? (
                    <>
                      <p>{item.title}</p>
                      <span className="mx-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                      <p>{item.title}</p>
                    </>
                  ) : (
                    <p>{item.title}</p>
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

export default WebCard;
