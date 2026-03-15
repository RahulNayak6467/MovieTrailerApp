import { Menu } from "lucide-react";

function MobileSearchBar({ isClicked, handleClick }) {
  return (
    <nav>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-primary text-xl font-sans ">Movie Trailer App</h1>
        <button
          type="button"
          onClick={() => handleClick(true)}
          className="border border-border rounded-full p-2"
          aria-label="Open navigation menu"
        >
          <Menu size={18} className="text-primary" />
        </button>
      </div>
    </nav>
  );
}

export default MobileSearchBar;
