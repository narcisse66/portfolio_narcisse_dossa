import { useEffect } from "react";
import AvailableDiv from "../../components/AvailableDiv";
import GalleryCard from "./components/GalleryCard";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-8">
      <AvailableDiv />

      <h1 className="flex flex-col items-start text-4xl font-bold text-custom-black-10 lg:text-5xl xl:text-6xl">
        <span>Portfolio</span>
        <span>Highlights:</span>
        <span>My Gallery</span>
      </h1>

      <GalleryCard />
    </div>
  );
};

export default Gallery;
