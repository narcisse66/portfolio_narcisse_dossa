import { useNavigate } from "react-router-dom";
import profile_picture from "../assets/images/profile_1.png";

const ProfileCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/about")}
      className="lg:xflex-col z-40 flex w-full flex-row items-center gap-2 lg:gap-4 lg:border-b lg:border-b-custom-black-90 lg:pb-4 xl:flex-row"
    >
      <img
        src={profile_picture}
        alt="Profile Picture"
        className="h-auto w-12 rounded-lg bg-custom-black-90 object-cover lg:w-16"
      />

      <div className="flex flex-col items-start gap-0.5 text-start lg:items-start xl:items-start">
        <h3 className="text-sm font-semibold leading-none text-custom-black-10 lg:text-lg">
          Narcisse DOSSA
        </h3>

        <p className="w-full max-w-48 break-words text-xs font-medium text-custom-black-40/90 lg:text-sm">
          Graphic Designer & Junior web developer
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
