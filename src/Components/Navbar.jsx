import { NavLink } from "react-router-dom";
import useMobile from "../CustomHooks/useMobile";
import MobileSearchBar from "./MobileSearchBar";
import MobileNavigation from "./MobileNavigation";
import { useState } from "react";
function Navbar() {
  const { isMobile } = useMobile();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (boolean) => {
    setIsClicked(boolean);
  };
  return (
    <header className="px-4 mt-4 max-[600px]:w-[80%] mx-auto">
      {!isMobile ? (
        <nav className=" py-4 border-2 bg-card   border-border rounded-full ">
          <ul className="flex justify-center items-center gap-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary md:text-lg cursor-pointer hover:opacity-80 transition-all text-sm "
                  : "text-white md:text-lg cursor-pointer hover:opacity-80 transition-all text-sm"
              }
            >
              Trending
            </NavLink>
            <NavLink
              to="/Search"
              className={({ isActive }) =>
                isActive
                  ? "text-primary md:text-lg cursor-pointer hover:opacity-80 transition-all text-sm"
                  : "text-white md:text-lg cursor-pointer hover:opacity-80 transition-all text-sm"
              }
            >
              Search
            </NavLink>
            <NavLink
              to="/Categories"
              className={({ isActive }) =>
                isActive
                  ? "text-primary md:text-lg cursor-pointer hover:opacity-80 transition-all text-sm"
                  : "text-white md:text-lg cursor-pointer hover:opacity-80 transition-all text-sm"
              }
            >
              Categories
            </NavLink>
          </ul>
        </nav>
      ) : !isClicked ? (
        <MobileSearchBar isClicked={isClicked} handleClick={handleClick} />
      ) : (
        <MobileNavigation isClicked={isClicked} handleClick={handleClick} />
      )}
    </header>
  );
}
export default Navbar;
