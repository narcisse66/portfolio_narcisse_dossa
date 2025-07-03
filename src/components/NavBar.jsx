import ProfileCard from "./ProfileCard";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerButton from "./HamburgerButton";
import MobileNavLink from "./MobileNavLink";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleIsToggled = () => {
    setIsToggled((prev) => !prev);
  };

  const controlHeader = () => {
    if (
      typeof window !== "undefined" &&
      window.innerWidth <= 1020 &&
      !isToggled
    ) {
      // Applique l'effet uniquement sur les tablettes et smartphones
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 1020) {
      // Ajoute l'écouteur uniquement sur tablettes et smartphones
      window.addEventListener("scroll", controlHeader);
    }
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY, isToggled]);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="sticky top-0 z-50 flex h-auto w-full flex-row items-center justify-between border-b border-b-custom-black-90 px-3 py-6 backdrop-blur-lg lg:h-screen lg:w-[25%] lg:flex-col lg:justify-start lg:border-b-0 lg:border-r lg:border-r-custom-light-90"
        >
          <ProfileCard />

          <NavLinks />

          <HamburgerButton onToggle={handleIsToggled} />

          {isToggled && (
            <MobileNavLink isToggled={isToggled} setIsToggled={setIsToggled} />
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
