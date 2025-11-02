import { createContext, useState } from "react";

export interface PokemonContextValue {}

export const PokemonContext = createContext<PokemonContextValue>({
  searchQuery: "",
  setSearchQuery: () => {},
});

interface Props {
  children: React.ReactNode;
}

export default function PokemonContextProvider({ children }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const ctxValue: PokemonContextValue = {
    searchQuery,
    setSearchQuery,
  };

  return (
    <PokemonContext.Provider value={ctxValue}>
      {children}
    </PokemonContext.Provider>
  );
}
