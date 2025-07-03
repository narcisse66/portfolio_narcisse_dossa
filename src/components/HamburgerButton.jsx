import { motion } from "framer-motion";
import { useState } from "react";

const HamburgerButton = ({ onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleIsToggled = () => {
    setIsToggled((prev) => !prev);
    onToggle();
  };

  return (
    <button
      onClick={handleIsToggled}
      className="z-50 flex flex-col items-center justify-center gap-2 lg:hidden"
    >
      <motion.div
        initial={{ x: 0 }}
        animate={isToggled ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className="h-0.5 w-8 rounded-lg bg-custom-black-40"
      ></motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={isToggled ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
        className="h-0.5 w-8 rounded-lg bg-custom-black-40"
      ></motion.div>
    </button>
  );
};

export default HamburgerButton;
