import AppButton from "@/components/AppButton";
import StatRow from "@/components/StatRow";
import TypeBadge from "@/components/TypeBadge";
import usePokemonDetail from "@/hooks/usePokemonDetail";
import { PokemonContext } from "@/store/PokemonContext";
import {
  faChevronRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavLink, useParams } from "react-router";

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemon, loading } = usePokemonDetail(name);
  const { team, addToTeam, removeFromTeam, isInTeam } =
    useContext(PokemonContext);

  if (loading || !pokemon) return <p>Loading…</p>;

  return (
    <section className="py-10 px-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        <NavLink to="/" className="text-neutral-500 hover:text-neutral-800">
          Pokémon
        </NavLink>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-xs text-neutral-500"
        />
        <p className="font-medium text-neutral-800 capitalize">{name}</p>
      </div>

      <div className="grid grid-cols-2 gap-6 py-6">
        <div className="bg-neutral-200">
          <img
            src={pokemon.thumbImg.default}
            alt={`Official artwork for ${name}`}
          />
        </div>

        <div className="px-10 space-y-4">
          {/* Name and Types */}
          <div className="pb-4">
            <span className="text-xs text-neutral-400">#{pokemon.id}</span>
            <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
            <div className="flex gap-2">
              {pokemon.types.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
          </div>

          {/* Add/Remove from Team */}
          {isInTeam(pokemon.name) ? (
            <AppButton
              onClick={() => removeFromTeam(pokemon.name)}
              icon={faMinus}
              label="Remove"
              className="text-red-500 hover:bg-red-100"
            />
          ) : (
            <AppButton
              onClick={() => addToTeam(pokemon)}
              disabled={team.length >= 6}
              icon={faPlus}
              label={team.length >= 6 ? "Team is full!" : "Add to team"}
              className={`${
                team.length >= 6
                  ? "text-neutral-400 bg-neutral-100"
                  : "text-purple-500 hover:bg-purple-100"
              }`}
            />
          )}

          {/* Stats */}
          <div className="border-y border-neutral-200 py-4">
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
        </div>
      </div>
    </section>
  );
};
export default PokemonDetails;
