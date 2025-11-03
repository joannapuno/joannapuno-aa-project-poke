import AppButton from "@/components/atoms/AppButton";
import ShinyToggle from "@/components/ShinyToggle";
import StatRow from "@/components/StatRow";
import TypeBadge from "@/components/atoms/TypeBadge";
import usePokemonDetail from "@/hooks/usePokemonDetail";
import { PokemonContext } from "@/store/PokemonContext";
import {
  faChevronRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { NavLink, useParams } from "react-router";
import PokeIcon from "@/components/atoms/PokeIcon";

const PokemonDetails = () => {
  const [showShiny, setShowShiny] = useState(false);
  const { name } = useParams<{ name: string }>();
  const { pokemon, loading } = usePokemonDetail(name ?? "");
  const { team, addToTeam, removeFromTeam, isInTeam } =
    useContext(PokemonContext);

  if (loading || !pokemon)
    return (
      <div className="flex justify-center items-center py-10">
        <PokeIcon className="text-neutral-400 h-16 w-16 animate-spin" />
      </div>
    );

  return (
    <section className="max-w-[70rem] mx-auto py-10 px-4">
      {/* Breadcrumb -- Ideally should be dynamic */}
      <nav
        className="flex items-center gap-2"
        role="navigation"
        aria-label="Breadcrumb"
      >
        <NavLink to="/" className="text-neutral-500 hover:text-neutral-800">
          Pokémon
        </NavLink>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-xs text-neutral-500"
        />
        <p
          className="font-medium text-neutral-800 capitalize"
          aria-current="page"
        >
          {name}
        </p>
      </nav>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16 py-6">
        <div className="relative flex justify-center items-center bg-neutral-300 p-2">
          <img
            src={showShiny ? pokemon.thumbImg.shiny : pokemon.thumbImg.default}
            alt={`Official artwork for ${name}`}
          />
        </div>

        <div className="md:px-10 space-y-4">
          <div className="flex justify-between items-start">
            {/* Name and Types */}
            <div className="space-y-1">
              <span className="text-xs text-neutral-400">#{pokemon.id}</span>
              <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
              <div className="flex gap-2" aria-label="Types">
                {pokemon.types?.map((type) => (
                  <TypeBadge key={type} type={type} />
                ))}
              </div>
            </div>

            {/* Toggle shiny image */}
            <ShinyToggle
              checked={showShiny}
              onChange={() => setShowShiny(!showShiny)}
            />
          </div>

          {/* Stats */}
          <div className="border-y border-neutral-200 py-4" aria-label="Stats">
            <div className="grid grid-cols-2 gap-3 bg-neutral-100 p-4">
              <StatRow label="hp" value={pokemon.baseStats.hp} />
              <StatRow label="attack" value={pokemon.baseStats.attack} />
              <StatRow label="height" value={pokemon.profileStats.height} />
              <StatRow label="defense" value={pokemon.baseStats.defense} />
              <StatRow label="weight" value={pokemon.profileStats.weight} />
              <StatRow
                label="special-attack"
                value={pokemon.baseStats["special-attack"]}
              />
              <StatRow
                label="base-experience"
                value={pokemon.profileStats["base-experience"]}
              />
              <StatRow
                label="special-defense"
                value={pokemon.baseStats["special-defense"]}
              />
              <StatRow label="speed" value={pokemon.baseStats.speed} />
            </div>
          </div>

          <div className="text-sm">
            {/* Abilities */}
            <p id="abilities-list" className="font-semibold">
              Abilities:
            </p>
            <ul
              className="list-disc pl-8"
              role="list"
              aria-labelledby="abilities-list"
            >
              {pokemon.abilities.map((ability) => (
                <li key={ability}>{ability}</li>
              ))}
            </ul>
          </div>

          {/* Add/Remove from Team */}
          {isInTeam(pokemon.name) ? (
            <AppButton
              onClick={() => removeFromTeam(pokemon.name)}
              icon={faMinus}
              label="Remove from team"
              className="w-full bg-red-500 text-white hover:bg-red-600"
            />
          ) : (
            <AppButton
              onClick={() => addToTeam(pokemon)}
              disabled={team.length >= 6}
              icon={faPlus}
              label={team.length >= 6 ? "Team is full!" : "Add to team"}
              className={`w-full ${
                team.length >= 6
                  ? "bg-neutral-300 text-neutral-500"
                  : "bg-neutral-500 text-white hover:bg-neutral-600"
              }`}
            />
          )}
        </div>
      </div>
    </section>
  );
};
export default PokemonDetails;
