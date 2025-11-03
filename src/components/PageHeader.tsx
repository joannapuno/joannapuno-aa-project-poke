import { NavLink } from "react-router";
import PokeIcon from "./atoms/PokeIcon";

const PageHeader = () => {
  const logo = new URL("/pokemon_logo.svg", import.meta.url).href;

  return (
    <header className="h-20 flex justify-between items-center bg-white p-4 border-b border-neutral-200">
      <NavLink
        to="/"
        className="block h-full w-fit"
        aria-label="Go to Pokemon home page"
      >
        <img src={logo} alt="Pokemon official logo" className="h-full p-2" />
      </NavLink>

      <NavLink to="/team" aria-label="View your Pokemon team">
        <div className="flex items-center gap-1 text-red-400 group">
          <PokeIcon className="w-4 h-4 group-hover:animate-[spin_0.4s_linear_1]" />
          <p className="text-sm">Team</p>
        </div>
      </NavLink>
    </header>
  );
};

export default PageHeader;
