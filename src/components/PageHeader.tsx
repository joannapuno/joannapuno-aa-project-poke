import { NavLink } from "react-router";

const PageHeader = () => {
  const logo = new URL("/pokemon_logo.svg", import.meta.url).href;
  return (
    <header className="h-20 bg-white p-4 border-b border-neutral-200">
      <NavLink to="/">
        <img
          src={logo}
          alt="Pokemon Official International Logo"
          className="h-full"
        />
      </NavLink>
    </header>
  );
};
export default PageHeader;
