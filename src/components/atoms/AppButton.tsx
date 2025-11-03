import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  label: string;
  icon?: IconProp;
  hideLabel?: boolean;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}

const AppButton = ({
  label,
  icon,
  hideLabel,
  disabled = false,
  className = "",
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${
        disabled ? "pointer-events-none" : "cursor-pointer"
      } text-sm space-x-1 px-3 py-1 rounded-full`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="text-xs" />}
      {!hideLabel && <span>{label}</span>}
    </button>
  );
};
export default AppButton;
