import { IoMdArrowBack } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/gallery");
      }}
      className="group flex flex-shrink-0 items-center justify-center gap-1 py-3 text-sm font-medium text-custom-black-10/80 outline-none hover:border-custom-black-10 hover:text-custom-black-10"
    >
      <div className="relative h-6 w-6 overflow-hidden">
        {/* Icône au-dessus, qui sortira vers le haut */}
        <div className="absolute inset-0 transform opacity-80 transition-transform duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
          <IoMdArrowBack className="text-2xl" />
        </div>

        {/* Icône en dessous, qui monte pour prendre la place */}
        <div className="absolute inset-0 translate-y-6 transform opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <IoMdArrowBack className="text-2xl" />
        </div>
      </div>
      Back to Branding projects
    </button>
  );
};

export default BackButton;
