import { skillData } from "../../Skills";

const AllSkillCard = () => {
  return (
    <div className="grid w-full cursor-pointer select-none grid-cols-1 place-content-center gap-4 lg:grid-cols-3">
      {skillData.map((item, index) => (
        <div
          key={index}
          className="inline-flex items-center justify-start gap-3 rounded-lg bg-custom-light-90/30 p-3"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-auto w-full max-w-14 rounded-lg bg-custom-black-90 object-cover p-2"
          />

          <div className="">
            <h3 className="text-sm font-bold text-custom-black-10 lg:text-lg">
              {item.title}
            </h3>

            <span className="text-sm font-light text-custom-black-40">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllSkillCard;
