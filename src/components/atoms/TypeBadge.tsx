import type { PokemonType } from "@/types";

const TypeBadge = ({ type }: { type: PokemonType }) => {
  const styleMap: Record<PokemonType, string> = {
    normal: "bg-gray-100 text-gray-600",
    fighting: "bg-red-100 text-red-600",
    flying: "bg-sky-100 text-sky-600",
    poison: "bg-purple-100 text-purple-600",
    ground: "bg-yellow-100 text-yellow-600",
    rock: "bg-stone-100 text-stone-600",
    bug: "bg-lime-100 text-lime-600",
    ghost: "bg-indigo-100 text-indigo-600",
    steel: "bg-gray-100 text-gray-600",
    fire: "bg-orange-100 text-orange-600",
    water: "bg-blue-100 text-blue-600",
    grass: "bg-green-100 text-green-600",
    electric: "bg-amber-100 text-amber-600",
    psychic: "bg-pink-100 text-pink-600",
    ice: "bg-cyan-100 text-cyan-600",
    dragon: "bg-indigo-100 text-indigo-600",
    dark: "bg-neutral-100 text-neutral-600",
    fairy: "bg-fuchsia-100 text-fuchsia-600",
    unknown: "bg-neutral-100 text-neutral-600",
    shadow: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      key={type}
      className={`${styleMap[type]} text-xs capitalize rounded-full px-2 py-1`}
      aria-label={`${type} type`}
      title={`${type} type`}
      data-type={type}
    >
      {type}
    </span>
  );
};

export default TypeBadge;
