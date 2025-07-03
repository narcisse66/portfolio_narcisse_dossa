const SkillCard = ({ image, title, subtitle, desc }) => {
  return (
    <div className="flex h-full w-full cursor-pointer select-none flex-col items-start justify-between gap-6 rounded-lg bg-custom-light-90/30 p-4">
      <div className="inline-flex items-center justify-start gap-3">
        <img
          src={image}
          alt={title}
          className="h-auto w-full max-w-14 rounded-lg bg-custom-black-90 object-cover p-2"
        />

        <div className="">
          <h3 className="text-sm font-bold text-custom-black-10 lg:text-lg">
            {title}
          </h3>

          <span className="text-sm font-light text-custom-black-40">
            {subtitle}
          </span>
        </div>
      </div>

      <p className="text-sm font-light text-custom-black-40 md:text-lg">
        {desc}
      </p>
    </div>
  );
};

export default SkillCard;
