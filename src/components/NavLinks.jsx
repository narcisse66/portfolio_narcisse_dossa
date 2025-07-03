import NavLinkItem from "./NavLinkItem";
import { LinkData, shareData } from "../constants/index";
import ShareLinkItem from "./ShareLinkItem";
import { useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();

  return (
    <div className="flex h-full w-auto flex-col items-center justify-center lg:w-full">
      <div className="mt-12 hidden h-full w-full flex-col items-center justify-start gap-8 px-6 py-6 lg:flex">
        {LinkData.map((link) => (
          <NavLinkItem
            key={link.id}
            to={link.to}
            label={link.label}
            Icon={link.Icon}
            isActive={location.pathname === link.to}
          />
        ))}
      </div>

      <div className="hidden w-full items-center justify-between gap-4 border-t border-t-custom-black-90 px-6 pt-6 lg:flex xl:flex-row">
        {shareData.map((link) => (
          <ShareLinkItem key={link.id} href={link.href} Icon={link.Icon} />
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
