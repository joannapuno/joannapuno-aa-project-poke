import usePokemonList from "@/hooks/usePokemonList";
import ListThumbnail from "@/components/ListThumbnail";
import SearchInput from "@/components/SearchInput";
import { useContext } from "react";
import ListPagination from "@/components/ListPagination";
import { PokemonContext } from "@/store/PokemonContext";

const PokemonList = () => {
  const { searchQuery, setSearchQuery } = useContext(PokemonContext);
  const {
    pokemonList,
    page,
    totalPages,
    setPage,
    handleNextPage,
    handlePrevPage,
  } = usePokemonList(searchQuery);

  return (
    <>
      {/* Search.. */}
      <section className="flex flex-col bg-neutral-100 py-10 px-14">
        <section>
          <SearchInput searchQuery={searchQuery} onChange={setSearchQuery} />
        </section>

        {/* List */}
        <section>
          <div className="grid grid-cols-4 gap-4 py-10">
            {[...pokemonList].map((pokemon, i) => {
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
    </>
  );
};
export default PokemonList;
