import usePokemonList from "@/hooks/usePokemonList";
import ListThumbnail from "@/components/ListThumbnail";
import SearchInput from "@/components/SearchInput";
import { useContext } from "react";
import ListPagination from "@/components/ListPagination";
import { PokemonContext } from "@/store/PokemonContext";
import SkeletonLoader from "@/components/atoms/SkeletonLoader";
import SortDropdown from "@/components/SortDropdown";

const PokemonList = () => {
  const { searchQuery, setSearchQuery } = useContext(PokemonContext);
  const {
    loading,
    pokemonList,
    page,
    totalPages,
    setPage,
    handleNextPage,
    handlePrevPage,
  } = usePokemonList(searchQuery);

  return (
    <div className="bg-neutral-100">
      {/* Search.. */}
      <section className="max-w-[80rem] mx-auto flex flex-col py-10 px-14">
        <section className="grid grid-cols-[1fr_auto] gap-4">
          <SearchInput searchQuery={searchQuery} onChange={setSearchQuery} />
          <SortDropdown />
        </section>

        {/* List */}
        <section aria-label="Pokemon results">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10"
            role="list"
            aria-busy={loading}
          >
            {loading &&
              [...Array(8).keys()].map((l) => (
                <SkeletonLoader
                  key={l}
                  className="min-w-full max-w-[13rem] h-[13rem]"
                />
              ))}

            {!loading &&
              [...pokemonList].map((pokemon) => {
                return (
                  <ListThumbnail
                    key={pokemon.name}
                    name={pokemon.name}
                    thumbImg={pokemon.thumbImg}
                  />
                );
              })}
          </div>

          {/* Pagination */}
          <ListPagination
            totalPages={totalPages}
            currentPage={page}
            onSelect={setPage}
            onNext={handleNextPage}
            onPrevious={handlePrevPage}
          />
        </section>
      </section>
    </div>
  );
};
export default PokemonList;
