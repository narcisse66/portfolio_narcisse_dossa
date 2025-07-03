import { Link } from "react-router-dom";

const NavLinkItem = ({ to, label, Icon, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex w-full items-center justify-start gap-3 text-sm font-medium ${
        isActive
          ? "text-black"
          : "group text-custom-black-10/80 hover:text-custom-black-10"
      }`}
    >
      <div className="relative h-6 w-6 overflow-hidden">
        {/* Icône au-dessus, qui sortira vers le haut */}
        <div
          className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-black opacity-100" // Style pour l'icône active (noire)
              : "opacity-80 group-hover:-translate-y-6 group-hover:opacity-0"
          }`}
        >
          <Icon className="text-xl" />
        </div>

        {/* Icône en dessous, qui monte pour prendre la place */}
        <div
          className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-black opacity-100"
              : "translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          }`}
        >
          <Icon className="text-xl" />
        </div>
      </div>
      {label}
    </Link>
  );
};

export default NavLinkItem;
