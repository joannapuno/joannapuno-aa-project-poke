import { useMemo, useState } from "react";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import debounce from "@/utils/debounce";

interface Props {
  searchQuery: string;
  onChange: (val: string) => void;
}

const SearchInput = ({ searchQuery, onChange, ...attrs }: Props) => {
  const [query, setQuery] = useState(searchQuery ?? "");

  // Add a bit of delay on search change
  // const debouncedChange = useMemo(() => debounce(onChange, 400), [onChange]);

  const handleSearch = (val: string) => {
    setQuery(val);
    // debouncedChange(val);
    onChange(val);
  };

  return (
    <form className="relative w-full" role="search">
      <label htmlFor="txt-search" className="sr-only">
        Search
      </label>

      <div className="absolute top-0 bottom-0 left-0 text-neutral-400 pointer-events-none py-2 px-3">
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <input
        {...attrs}
        id="txt-search"
        name="txt-search"
        type="search"
        value={query}
        onChange={(evt) => handleSearch(evt.target.value)}
        placeholder="Search"
        className="w-full bg-white rounded-sm placeholder-neutral-400 pl-10 pr-4 py-2"
      />
    </form>
  );
};

export default SearchInput;
