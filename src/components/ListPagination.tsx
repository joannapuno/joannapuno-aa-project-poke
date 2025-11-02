const ListPagination = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex border border-neutral-400 rounded-md overflow-hidden">
        <button className="border-r border-neutral-400 text-center py-2 px-4 hover:bg-blue-500 hover:text-white">
          <span>
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
        </button>

        <button className="text-center font-bold py-2 px-4 border-r border-neutral-400 hover:bg-blue-500 hover:text-white">
          <span>1</span>
        </button>
        <button className="text-center font-bold py-2 px-4 border-r border-neutral-400 hover:bg-blue-500 hover:text-white">
          <span>2</span>
        </button>

        <button className="text-center py-2 px-4 hover:bg-blue-500 hover:text-white">
          <span>
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
        </button>
      </div>
    </div>
  );
};
export default ListPagination;
