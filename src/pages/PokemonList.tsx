import usePokemonList from "@/hooks/usePokemonList";
import ListThumbnail from "@/components/ListThumbnail";
import SearchInput from "@/components/SearchInput";
import { useContext } from "react";
import ListPagination from "@/components/ListPagination";
import { PokemonContext } from "@/store/PokemonContext";

const PokemonList = () => {
  const { pokemonList } = usePokemonList();
  const { searchQuery, setSearchQuery } = useContext(PokemonContext);

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
          <ListPagination />
        </section>
      </section>
    </>
  );
};
export default PokemonList;
