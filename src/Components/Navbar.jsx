import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="px-4 mt-4">
      <nav className=" py-4 border-2 bg-card   border-border rounded-full ">
        <ul className="flex justify-center items-center gap-20">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-lg cursor-pointer hover:opacity-80 transition-all"
                : "text-white text-lg cursor-pointer hover:opacity-80 transition-all"
            }
          >
            Trending
          </NavLink>
          <NavLink
            to="/Search"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-lg cursor-pointer hover:opacity-80 transition-all"
                : "text-white text-lg cursor-pointer hover:opacity-80 transition-all"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/Categories"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-lg cursor-pointer hover:opacity-80 transition-all"
                : "text-white text-lg cursor-pointer hover:opacity-80 transition-all"
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
