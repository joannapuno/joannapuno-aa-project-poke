import { useState } from "react";
import { NavLink } from "react-router";
import type { ThumbImg } from "@/types";

interface Props {
  name: string;
  thumbImg: ThumbImg;
}

const ListThumbnail = ({ name, thumbImg }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(thumbImg.default || "");
  const placeholder = "/pokeball_icon.png";

  const handleLoad = () => setIsLoading(false);
  const handleError = () => setImgSrc(placeholder);

  return (
    <NavLink
      to={`/pokemon/${name}`}
      className="border border-neutral-200 rounded-md overflow-hidden hover:border-blue-500 hover:shadow-[0_0_10px_0_#a3a3a3cc]"
    >
      <figure className="bg-white p-3 w-full">
        <div className="relative bg-neutral-200 p-2 lg:p-5 flex items-center justify-center min-h-40">
          {isLoading && (
            <img
              src={placeholder}
              alt=""
              aria-hidden="true"
              className="absolute h-16 w-16 animate-spin"
            />
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
    </NavLink>
  );
};
export default ListThumbnail;
