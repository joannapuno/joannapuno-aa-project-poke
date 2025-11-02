import usePokemonList from "@/hooks/usePokemonList";
import ListThumbnail from "@/components/ListThumbnail";
import SearchInput from "@/components/SearchInput";
import { useContext } from "react";
import ListPagination from "@/components/ListPagination";
import { PokemonContext } from "@/store/PokemonContext";

const PokemonList = () => {
  const { pokemonList, page, totalPages, setPage } = usePokemonList();
  const { searchQuery, setSearchQuery } = useContext(PokemonContext);

  const handleNextPage = () => {
    const nextPage =
      page !== Number(totalPages - 1) ? page + 1 : Number(totalPages - 1);
    setPage(nextPage);
  };
  const handlePrevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

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
