import { useEffect, useState } from "react";
import { getAllPokemon, getPokemonByName } from "@/lib/get-pokemon";
import type { ThumbImg } from "@/types";

export default function usePokemonList(pageSize = 20) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<{ name: string; thumbImg: ThumbImg }[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { results } = await getAllPokemon(page, pageSize);
      const mappedPokemonList = await Promise.all(
        results.map(async (p: { name: string }) => {
          const pokemon = await getPokemonByName(p.name);
          return {
            name: pokemon.name,
            thumbImg: {
              default: pokemon.sprites.other["official-artwork"].front_default,
              shiny: pokemon.sprites.other["official-artwork"].front_shiny,
            },
          };
        })
      );
      setPokemonList(mappedPokemonList);
    } catch (e) {
      // TODO:
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize]);

  return { pokemonList, loading, page, setPage };
}
