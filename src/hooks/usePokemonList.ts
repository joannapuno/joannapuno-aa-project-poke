import { useEffect, useState, useMemo, useContext } from "react";
import { getAllPokemon, getPokemonByName } from "@/lib/get-pokemon";
import type { ThumbImg } from "@/types";
import { PokemonContext } from "@/store/PokemonContext";

const usePokemonList = (searchQuery = "", pageSize = 20) => {
  const { sortBy } = useContext(PokemonContext);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<{ name: string; thumbImg: ThumbImg }[]>([]);
  const [allPokemon, setAllPokemon] = useState<{ name: string; url: string }[]>([]);

  const loadAllPokemon = async () => {
    if (allPokemon.length) return;
    const { results } = await getAllPokemon(1, 100000);
    setAllPokemon(results);
  };

  useEffect(() => {
    loadAllPokemon();
  }, [allPokemon.length]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery, pageSize, sortBy]);

  const filteredAndSorted = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const base = q ? allPokemon.filter((p) => p.name.includes(q)) : allPokemon;

    if (sortBy === "az") return [...base].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "za") return [...base].sort((a, b) => b.name.localeCompare(a.name));
    return base;
  }, [allPokemon, searchQuery, sortBy]);

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
      const slice = filteredAndSorted.slice(start, start + pageSize);
      setTotalPages(Math.max(1, Math.ceil(filteredAndSorted.length / pageSize)));

      const details = await fetchPokemonDetails(slice);
      setPokemonList(details);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filteredAndSorted.length) updatePokemonList();
  }, [filteredAndSorted, page, pageSize]);

  const handleNextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const handlePrevPage = () => setPage((p) => Math.max(p - 1, 1));

  return { pokemonList, loading, page, totalPages, setPage, handleNextPage, handlePrevPage };
};

export default usePokemonList;
