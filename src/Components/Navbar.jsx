import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="px-4 mt-4 max-[600px]:w-[80%]">
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
    </header>
  );
}

export default Navbar;
