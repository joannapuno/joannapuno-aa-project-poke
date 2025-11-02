import { createContext, useContext, useState } from "react";
import type { Pokemon } from "@/types";

interface PokemonContextValue {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  team: Pokemon[];
  addToTeam: (p: Pokemon) => void;
  removeFromTeam: (name: string) => void;
  isInTeam: (name: string) => boolean;
  resetTeam: () => void;
}

export const PokemonContext = createContext<PokemonContextValue>({
  searchQuery: "",
  setSearchQuery: () => {},
  team: [],
  addToTeam: () => {},
  removeFromTeam: () => {},
  isInTeam: () => false,
  resetTeam: () => {},
});

export default function PokemonContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [team, setTeam] = useState<Pokemon[]>([]);

  const isInTeam = (name: string) => team.some((p) => p.name === name);

  const addToTeam = (pokemon: Pokemon) => {
    if (isInTeam(pokemon.name) || team.length >= 6) return;
    setTeam([...team, pokemon]);
  };

  const removeFromTeam = (name: string) => {
    setTeam(team.filter((p) => p.name !== name));
  };

  const resetTeam = () => setTeam([]);

  const value = {
    searchQuery,
    setSearchQuery,
    team,
    addToTeam,
    removeFromTeam,
    isInTeam,
    resetTeam,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}

export const usePokemonStore = () => useContext(PokemonContext);
