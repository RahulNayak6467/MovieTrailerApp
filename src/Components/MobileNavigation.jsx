import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

function MobileNavigation({ isClicked, handleClick }) {
  const fadeInLeft = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <motion.section
      variants={fadeInLeft}
      initial="hidden"
      animate="visible"
      className={isClicked ? "flex" : ""}
    >
      <div className="inset-0 fixed bg-black/60 backdrop-blur-xl z-50 overflow-hidden"></div>

      <div className="w-[70%] max-w-xs h-full fixed left-0 top-0 z-999 border-r border-border bg-background  shadow-2xl rounded-r-2xl py-8 px-6 flex flex-col">
        <X
          onClick={() => handleClick(false)}
          size={32}
          className="text-white border border-border p-2 rounded-2xl hover:text-primary transition-all mb-4"
        />
        <ul className="space-y-4">
          <li>
            <NavLink
              onClick={() => handleClick(false)}
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-primary font-semibold text-xl  cursor-pointer hover:opacity-80 transition-all"
                  : "block text-white text-xl cursor-pointer hover:opacity-80 transition-all"
              }
            >
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handleClick(false)}
              to="/Search"
              className={({ isActive }) =>
                isActive
                  ? "block text-primary font-semibold text-xl cursor-pointer hover:opacity-80 transition-all"
                  : "block text-white text-xl cursor-pointer hover:opacity-80 transition-all"
              }
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handleClick(false)}
              to="/Categories"
              className={({ isActive }) =>
                isActive
                  ? "block text-primary font-semibold text-xl cursor-pointer hover:opacity-80 transition-all"
                  : "block text-white text-xl cursor-pointer hover:opacity-80 transition-all"
              }
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}

export default MobileNavigation;
