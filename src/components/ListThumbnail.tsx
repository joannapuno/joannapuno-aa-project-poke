import { ThumbImg } from "@/types";
import { NavLink } from "react-router";

interface Props {
  name: string;
  thumbImg: ThumbImg;
}

const ListThumbnail = ({ name, thumbImg }: Props) => {
  return (
    <NavLink
      to={`/pokemon/${name}`}
      className="border border-neutral-200 rounded-md overflow-hidden hover:border-blue-500 hover:shadow-[0_0_10px_0_#a3a3a3cc]"
    >
      <figure className="bg-white p-3">
        <div className="bg-neutral-200">
          <img src={thumbImg.default} alt={`Official artwork for ${name}`} />
        </div>

        <figcaption className="text-sm font-medium text-left capitalize py-2">
          {name}
        </figcaption>
      </figure>
    </NavLink>
  );
};
export default ListThumbnail;
