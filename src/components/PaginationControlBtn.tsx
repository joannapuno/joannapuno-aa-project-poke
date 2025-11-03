interface Props {
  type: "next" | "previous" | "pageNumber";
  label: string;
  disabled?: boolean;
  active?: boolean;
  onClick: () => void;
}

const PaginationControlBtn = ({
  type,
  label,
  disabled = false,
  active = false,
  onClick,
}: Props) => {
  const prevIcon = (
    <span aria-label={label} aria-hidden>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.29291 0.5L5.14646 4.64645C4.9512 4.84171 4.9512 5.15829 5.14646 5.35355L9.29291 9.5"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M4.79291 0.5L0.646461 4.64645C0.451199 4.84171 0.451199 5.15829 0.646461 5.35355L4.79291 9.5"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );

  const nextIcon = (
    <span aria-label={label} aria-hidden>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5L4.64645 4.64645C4.84171 4.84171 4.84171 5.15829 4.64645 5.35355L0.5 9.5"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M5 0.5L9.14645 4.64645C9.34171 4.84171 9.34171 5.15829 9.14645 5.35355L5 9.5"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${active ? "bg-blue-500 text-white" : ""} ${
        type !== "next" ? "border-r" : ""
      } text-center font-semibold py-2 px-4 border-neutral-400 disabled:pointer-events-none hover:bg-blue-500 hover:text-white disabled:opacity-40`}
    >
      {type === "next" ? (
        nextIcon
      ) : type === "previous" ? (
        prevIcon
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default PaginationControlBtn;
