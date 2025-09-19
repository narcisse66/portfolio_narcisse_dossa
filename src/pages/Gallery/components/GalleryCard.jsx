import { useNavigate } from "react-router-dom";
import { galleryData } from "../index";
import { useState } from "react";

const GalleryCard = () => {
  const navigate = useNavigate();

  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-6 md:grid-cols-2 extra:grid-cols-3">
      {galleryData.map((item) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
          <div
            key={item.id}
            onClick={() => navigate(``)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex h-auto w-full transform cursor-pointer flex-col items-start justify-center gap-3 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-auto w-full max-w-sm transform rounded-md object-cover transition-transform duration-300 hover:scale-105"
            />

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

export default GalleryCard;
