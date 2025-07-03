import { useNavigate } from "react-router-dom";

const ButtonLink = ({ to, text, Icon }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(to);
      }}
      className="group flex w-full flex-shrink-0 items-center justify-center gap-2 rounded-lg border border-custom-black-10/80 px-4 py-3 text-sm font-medium text-custom-black-10/80 hover:border-custom-black-10 hover:text-custom-black-10 lg:w-auto"
    >
      {text}
      <div className="relative h-6 w-6 overflow-hidden">
        {/* Icône au-dessus, qui sortira vers le haut */}
        <div className="absolute inset-0 transform opacity-80 transition-transform duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
          <Icon className="text-2xl" />
        </div>

        {/* Icône en dessous, qui monte pour prendre la place */}
        <div className="absolute inset-0 translate-y-6 transform opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Icon className="text-2xl" />
        </div>
      </div>
    </button>
  );
};

export default ButtonLink;
