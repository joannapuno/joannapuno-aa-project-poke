import { useEffect, useMemo, useState } from "react";
import { getAllPokemon, getPokemonByName } from "@/lib/get-pokemon";
import type { ThumbImg } from "@/types";

const usePokemonList = (searchQuery = "", pageSize = 20) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<{ name: string; thumbImg: ThumbImg }[]>([]);
  const [allPokemon, setAllPokemon] = useState<{ name: string; url: string }[]>([]);

  // Fetching data and mapping
  const fetchPokemonDetails = async (list: { name: string }[]) => {
    const data = await Promise.all(
      list.map(async ({ name }) => {
        const p = await getPokemonByName(name);
        return {
          name: p.name,
          thumbImg: {
            default: p?.sprites?.other?.["official-artwork"]?.front_default ?? "",
            shiny: p?.sprites?.other?.["official-artwork"]?.front_shiny ?? "",
          },
        };
      })
    );
    return data;
  };

  const updatePokemonList = async () => {
    setLoading(true);
    try {
      const start = (page - 1) * pageSize;
      const slice = filteredPokemon.slice(start, start + pageSize);
      const total = Math.max(1, Math.ceil(filteredPokemon.length / pageSize));
      setTotalPages(total);

      const details = await fetchPokemonDetails(slice);
      setPokemonList(details);
    } catch (e) {
      // TODO:
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Pagination
  const handleNextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const handlePrevPage = () => setPage((p) => Math.max(p - 1, 1));

   // For handling searching
  const loadAllPokemon = async () => {
    if (allPokemon.length) return;
    const { results } = await getAllPokemon(1, 100000);
    setAllPokemon(results);
  };
  // Search Results
  const filteredPokemon = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return q ? allPokemon.filter((p) => p.name.includes(q)) : allPokemon;
  }, [allPokemon, searchQuery]);

  useEffect(() => {
    loadAllPokemon();
  }, [allPokemon.length]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery, pageSize]);

  useEffect(() => {
    if (filteredPokemon.length) updatePokemonList();
  }, [filteredPokemon, page, pageSize]);

  return { pokemonList, loading, page, totalPages, setPage, handleNextPage, handlePrevPage };
};

export default usePokemonList;
