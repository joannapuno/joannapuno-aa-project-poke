import ListThumbnail from "@/components/ListThumbnail";
import PokeIcon from "@/components/PokeIcon";
import { PokemonContext } from "@/store/PokemonContext";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { NavLink } from "react-router";

const PokemonTeam = () => {
  const { team, removeFromTeam, resetTeam } = useContext(PokemonContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="max-w-[50rem] mx-auto py-10 px-14">
      {team.length > 0 ? (
        <>
          <div className="flex justify-between items-center">
            <h2 className="flex items-center gap-2 text-2xl">
              <PokeIcon className="text-red-500 w-6 h-6" />
              Current Team
            </h2>

            <div className="space-x-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-neutral-500 text-white text-sm rounded-full space-x-2 px-4 py-2"
              >
                <FontAwesomeIcon icon={faPencil} />
                <span>Edit</span>
              </button>

              <button
                onClick={resetTeam}
                className="bg-red-500 text-white text-sm rounded-full space-x-2 px-4 py-2"
              >
                <FontAwesomeIcon icon={faTrash} />
                <span>Reset Team</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            {team.map((pokemon) => {
              return (
                <ListThumbnail
                  key={pokemon.name}
                  name={pokemon.name}
                  thumbImg={pokemon.thumbImg}
                  removable={isEditing}
                  onRemove={() => removeFromTeam(pokemon.name)}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-neutral-500">
          <p className="text-lg font-medium mb-4">You don’t have a team yet!</p>
          <NavLink
            to="/"
            className="text-white bg-neutral-500 rounded-full py-2 px-4 hover:bg-neutral-600"
          >
            Go to Pokémon List
          </NavLink>
        </div>
      )}
    </section>
  );
};
export default PokemonTeam;
