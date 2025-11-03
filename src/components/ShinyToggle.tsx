import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

interface Props {
  checked: boolean;
  onChange: () => void;
}

const ShinyToggle = ({ checked, onChange }: Props) => {
  return (
    <label
      className="flex items-center gap-2 cursor-pointer"
      htmlFor="shiny-toggle"
      aria-label="Toggle shiny Pokemon artwork"
    >
      <input
        id="shiny-toggle"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-purple-500"
        aria-checked={checked}
      />
      <span
        className={`text-sm ${
          checked ? "text-purple-500" : "text-neutral-500"
        }`}
      >
        <FontAwesomeIcon icon={faWandMagicSparkles} />
        Shiny
      </span>
    </label>
  );
};

export default ShinyToggle;
