import { useParams } from "react-router-dom";
import { projectData } from "..";
import BackButton from "./BackButton";
import ButtonLink from "../../../components/ButtonLink";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiBuildingsLight, PiPaletteLight, PiTimerLight } from "react-icons/pi";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === parseInt(id));

  useEffect(() => window.scrollTo(0, 0));

  // Affiche un message si le projet n'est pas trouvé
  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="flex h-full flex-col items-start justify-center gap-6 text-start">
      <BackButton />

      <div className="flex h-full w-full flex-col items-start justify-between gap-6 lg:flex-row">
        <div className="w-full space-y-8 overscroll-y-auto lg:max-w-lg lg:space-y-10 extra:max-w-5xl">
          <h1 className="flex flex-col items-start break-words text-3xl font-bold text-custom-black-10 lg:text-4xl xl:text-5xl">
            {project.title}
          </h1>

          {/* <ButtonLink to="#" text="Live Demo" Icon={IoIosArrowRoundForward} /> */}
          <a href={project.url} target="_blank">{project.url}</a>


          <p className="text-sm font-light text-custom-black-40 lg:text-lg">
            {project.desc}
          </p>
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-6 lg:sticky lg:top-10 lg:w-1/2">
          <ul className="flex w-full flex-col items-start justify-center gap-4 rounded-lg border border-custom-black-10 bg-custom-black-98 p-4">
            <li className="inline-flex w-full items-center justify-between">
              <div className="inline-flex items-center gap-1">
                <PiBuildingsLight />

                <span className="text-base font-light text-custom-black-40">
                  client
                </span>
              </div>

              <p className="text-sm font-bold text-custom-black-10">
                {project.clent}
              </p>
            </li>

            <li className="inline-flex w-full items-center justify-between">
              <div className="inline-flex items-center gap-1">
                <PiTimerLight />

                <span className="text-sm font-light text-custom-black-40">
                  Duration
                </span>
              </div>

              <p className="text-sm font-bold text-custom-black-10">
                {project.duration}
              </p>
            </li>

            <li className="inline-flex w-full items-center justify-between">
              <div className="inline-flex items-center gap-1">
                <PiPaletteLight />

                <span className="text-base font-light text-custom-black-40">
                  Category
                </span>
              </div>

              <p className="text-sm font-bold text-custom-black-10">
                {project.category}
              </p>
            </li>
          </ul>

          <img
            src={project.image}
            className="h-auto w-full rounded-lg object-cover"
            alt="Project Image"
          />
        </div>
      </div>

      <div className="mt-8 hidden h-full w-full lg:block">
        <img
          src={project.image}
          className="h-auto w-full rounded-lg object-cover"
          alt="Project Image"
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
