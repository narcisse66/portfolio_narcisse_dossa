import { PiDevicesLight } from "react-icons/pi";
import { aboutData } from "../index";

const ExperienceDiv = () => {
  const exp = aboutData.find((exp) => exp);

  return (
    <div className="h-full w-full space-y-6">
      <h2 className="text-3xl font-bold text-custom-black-10 lg:text-4xl">
        Experiences
      </h2>

      {exp.experienceData.map((exp) => (
        <div
          key={exp.id}
          className="flex h-full w-full items-start justify-between gap-3 rounded-xl bg-custom-black-90/30 px-6 py-6 lg:px-16"
        >
          <PiDevicesLight className="text-xl font-bold text-custom-black-10" />

          <div className="flex w-full flex-col items-start justify-between gap-1 lg:flex-row">
            <div className="flex items-start justify-start gap-3">
              <div className="flex flex-col items-start justify-start gap-5">
                <h4 className="text-lg font-bold leading-none text-custom-black-10">
                  {exp.title}
                </h4>

                <div className="flex flex-col">
                  <span className="text-lg font-light text-custom-black-40">
                    {exp.company}
                  </span>

                  <span className="text-lg font-light text-custom-black-40">
                    {exp.startAt} - {exp.endAt}
                  </span>
                </div>
              </div>
            </div>

            <p className="w-full max-w-full text-lg font-light text-custom-black-40 lg:max-w-xs">
              {exp.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceDiv;
