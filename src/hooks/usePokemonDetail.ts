import { useEffect, useState } from "react";
import { getPokemonByName } from "@/lib/get-pokemon";
import type { StatName, PokemonType, PokemonDetail } from "@/types";

const usePokemonDetail = (name: string) => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getPokemonByName(name);
      setPokemon({
        id: data.id,
        name: data.name,
        thumbImg: {
          default: data.sprites.other["official-artwork"].front_default,
          shiny: data.sprites.other["official-artwork"].front_shiny,
        },
        baseStats: data.stats.reduce((acc: any, s: any) => {
            acc[s.stat.name as keyof StatName] = s.base_stat
            return acc
          }, {} as StatName),
        profileStats: {
          height: data.height,
          weight: data.weight,
          "base-experience": data.base_experience
        },
        types: data.types.map((t: any) => t.type.name) as PokemonType[],
        abilities: data.abilities.map((a: any) => a.ability.name),
      });
    } catch (e) {
      // Ideally should handle these with a UI like Toast
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!name) return;
    
    fetchData();
  }, [name]);

  return { pokemon, loading };
}

export default usePokemonDetail