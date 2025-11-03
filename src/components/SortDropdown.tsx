import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { PokemonContext } from "@/store/PokemonContext";
import type { SortBy } from "@/types";

const SortDropdown = () => {
  const { sortBy, setSortBy } = useContext(PokemonContext);

  return (
    <form className="flex items-center gap-2">
      <label htmlFor="sort-by" className="space-x-1 text-neutral-500">
        <FontAwesomeIcon icon={faFilter} />
        <span>Sort by</span>
      </label>
      <div className="min-w-32">
        <select
          id="sort-by"
          className="w-full border text-neutral-500 border-neutral-400 bg-neutral-50 rounded-md py-1 px-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
        >
          <option value="id">ID</option>
          <option value="az">Alphabetically A-Z</option>
          <option value="za">Alphabetically Z-A</option>
        </select>
      </div>
    </form>
  );
};

export default SortDropdown;
