import AppButton from "@/components/atoms/AppButton";
import ListThumbnail from "@/components/ListThumbnail";
import PokeIcon from "@/components/atoms/PokeIcon";
import { PokemonContext } from "@/store/PokemonContext";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
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

            <div className="space-x-2">
              <AppButton
                onClick={() => setIsEditing(!isEditing)}
                label="Edit"
                icon={faPencil}
                className="bg-neutral-500 text-white hover:bg-neutral-600"
              />
              <AppButton
                onClick={resetTeam}
                icon={faTrash}
                label="Reset Team"
                className="bg-red-500 text-white hover:bg-red-600"
              />
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
            className="text-white bg-neutral-500 px-3 py-1 rounded-full hover:bg-neutral-600"
          >
            Go to Pokémon List
          </NavLink>
        </div>
      )}
    </section>
  );
};
export default PokemonTeam;
