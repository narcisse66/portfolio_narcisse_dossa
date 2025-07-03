import { aboutData } from "./index";
import AvailableDiv from "../../components/AvailableDiv";
import ButtonLink from "../../components/ButtonLink";
import { IoIosArrowRoundForward } from "react-icons/io";
import ExperienceDiv from "./components/ExperienceDiv";
import { useEffect } from "react";

const About = () => {
  const data = aboutData.find((data) => data);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-8 text-start lg:gap-12">
      <AvailableDiv />

      <div className="flex h-full w-full flex-col items-start justify-start gap-8 lg:flex-row">
        <div className="space-y-5">
          <h1 className="flex flex-col items-start text-3xl font-bold text-custom-black-10 lg:text-4xl xl:text-5xl">
            <span>About Me:</span>
            <span>Fusing</span>
            <span>Creativity with</span>
            <span>Functionality</span>
          </h1>

          <p className="text-lg font-light text-custom-black-40">{data.desc}</p>
        </div>

        <img
          src={data.image}
          alt="Profile Picture"
          className="h-auto w-full max-w-full rounded-lg bg-custom-light-90 object-cover lg:max-w-sm xl:max-w-md"
        />
      </div>

      <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="w-full space-y-6 text-start">
          <h2 className="text-3xl font-bold text-custom-black-10 lg:text-4xl">
            Education
          </h2>

          <p className="text-lg font-light text-custom-black-40">
            {data.education}
          </p>

          <ButtonLink
            to="/projects"
            text="View Projects"
            Icon={IoIosArrowRoundForward}
          />
        </div>

        <div className="w-full space-y-6 text-start">
          <h2
            translate="no"
            className="text-3xl font-bold text-custom-black-10 lg:text-4xl"
          >
            Stack
          </h2>

          <p className="text-lg font-light text-custom-black-40">
            {data.stack_desc}
          </p>

          <ButtonLink
            to="/skill"
            text="View Stack"
            Icon={IoIosArrowRoundForward}
          />
        </div>
      </div>

      <ExperienceDiv />

      <ButtonLink
        to="/contact"
        text="Contact Me"
        Icon={IoIosArrowRoundForward}
      />
    </div>
  );
};

export default About;
