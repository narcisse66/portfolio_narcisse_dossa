import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LinkData, shareData } from "../constants";
import NavLinkItem from "./NavLinkItem";
import ShareLinkItem from "./ShareLinkItem";

const linkVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const MobileNavLink = ({ isToggled, setIsToggled }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isToggled && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 24,
          }}
          className="fixed inset-0 z-10 flex h-screen w-full flex-col items-start justify-around overflow-hidden bg-white p-4 lg:hidden"
        >
          <ul className="mt-6 flex flex-col items-start justify-start gap-8">
            {LinkData.map((link, index) => (
              <motion.li
                key={link.id}
                initial="hidden"
                animate="visible"
                variants={linkVariant}
                custom={index}
                className="text-2xl font-bold text-custom-black-10 outline-none"
                onClick={() => setIsToggled(false)}
              >
                <NavLinkItem
                  to={link.to}
                  label={link.label}
                  Icon={link.Icon}
                  isActive={location.pathname === link.to}
                />
              </motion.li>
            ))}
          </ul>

          <div className="flex w-full items-center justify-between gap-10 border-t border-t-custom-black-90 px-4 pt-8 md:justify-start">
            {shareData.map((link) => (
              <ShareLinkItem key={link.id} href={link.href} Icon={link.Icon} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavLink;
