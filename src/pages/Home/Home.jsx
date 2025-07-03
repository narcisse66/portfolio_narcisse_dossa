import AvailableDiv from "../../components/AvailableDiv";
import { IoIosArrowRoundForward } from "react-icons/io";
import ButtonLink from "../../components/ButtonLink";
import LatestProjectCard from "./components/LatestProjectCard";
import AllSkillCard from "./components/AllSkillCard";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-8 text-start">
      <AvailableDiv />

      <div className="flex flex-col items-start justify-center gap-6">
        <h1 className="flex flex-col items-start text-4xl font-bold text-custom-black-10 lg:text-5xl xl:text-6xl">
          <span>Hey there!</span>
          <span>I&apos;m Narcisse…</span>
        </h1>

        <p className="max-w-lg text-sm font-light text-custom-black-40 lg:text-lg">
          I&apos;m a passionate graphic design & junior backend developer
          dedicated to crafting visually stunning and user-friendly websites.
        </p>

        <div className="mt-2">
          <ButtonLink
            to="/about"
            text="More about Me"
            Icon={IoIosArrowRoundForward}
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-6 border-t border-t-custom-black-90">
        <h2 className="mt-8 text-2xl font-bold text-custom-black-10 lg:text-3xl xl:text-4xl">
          Recent Projects
        </h2>

        <LatestProjectCard />

        <ButtonLink
          to="/projects"
          text="All Projects"
          Icon={IoIosArrowRoundForward}
        />
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-6 border-t border-t-custom-black-90">
        <h2
          translate="no"
          className="mt-8 text-2xl font-bold text-custom-black-10 lg:text-3xl xl:text-4xl"
        >
          Stack
        </h2>

        <AllSkillCard />

        <ButtonLink
          to="/skill"
          text="All Skills"
          Icon={IoIosArrowRoundForward}
        />
      </div>
    </div>
  );
};

export default Home;
