import { useState } from "react";
import { NavLink } from "react-router";
import type { ThumbImg } from "@/types";
import PokeIcon from "./PokeIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  name: string;
  thumbImg: ThumbImg;
  removable?: boolean;
  onRemove?: () => void;
}

const ListThumbnail = ({
  name,
  thumbImg,
  removable,
  onRemove = () => {},
}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(thumbImg.default || "");
  const placeholder = "/pokeball_icon.svg";

  const handleLoad = () => setIsLoading(false);
  const handleError = () => setImgSrc(placeholder);

  return (
    <NavLink to={`/pokemon/${name}`} className="relative">
      <div className="border border-neutral-200 rounded-md hover:border-blue-500 hover:shadow-[0_0_10px_0_#a3a3a3cc] overflow-hidden">
        <figure className="bg-white p-3 w-full">
          <div className="relative bg-neutral-200 p-2 lg:p-5 flex items-center justify-center min-h-40">
            {isLoading && (
              <PokeIcon className="absolute text-white h-16 w-16 animate-spin" />
            )}
            <img
              src={imgSrc || placeholder}
              alt={`Official artwork for ${name}`}
              loading="lazy"
              decoding="async"
              onLoad={handleLoad}
              onError={handleError}
              className={`transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <figcaption className="text-sm font-medium text-left capitalize py-2">
            {name}
          </figcaption>
        </figure>
      </div>
      {removable && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRemove();
          }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full h-6 w-6"
        >
          <FontAwesomeIcon icon={faMinus} />
          <span className="sr-only">Remove from team</span>
        </button>
      )}
    </NavLink>
  );
};
export default ListThumbnail;
