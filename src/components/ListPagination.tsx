import PaginationControlBtn from "@/components/PaginationControlBtn";

interface Props {
  totalPages: number;
  currentPage: number;
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (n: number) => void;
}

const ListPagination = ({
  totalPages,
  currentPage,
  onNext,
  onPrevious,
  onSelect,
}: Props) => {
  const maxVisible = 5;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Limiting how many page buttons to show
  let start = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
  let end = start + maxVisible - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(end - maxVisible + 1, 1);
  }
  const visiblePages = pages.slice(start - 1, end);

  return (
    <div
      className="flex items-center justify-center w-full"
      role="navigation"
      aria-label="Pagination"
      aria-live="polite"
    >
      <ul
        className="flex border border-neutral-400 rounded-md overflow-hidden"
        aria-label="Pagination pages"
      >
        <PaginationControlBtn
          type="previous"
          label="Previous page"
          disabled={currentPage === 1}
          active={false}
          onClick={onPrevious}
        />

        {/* First + Ellipses */}
        {start > 1 && (
          <>
            <PaginationControlBtn
              type="pageNumber"
              label="1"
              active={currentPage === 1}
              disabled={false}
              onClick={() => onSelect(1)}
            />
            <li className="px-2 py-2 text-neutral-400 select-none" aria-hidden>
              …
            </li>
          </>
        )}

        {visiblePages.map((n) => (
          <PaginationControlBtn
            key={n}
            type="pageNumber"
            label={String(n)}
            active={n === currentPage}
            disabled={false}
            onClick={() => onSelect(n)}
            aria-current={n === currentPage ? "page" : undefined}
          />
        ))}

        {/* Ellipses + Last */}
        {end < totalPages && (
          <>
            <li className="px-2 py-2 text-neutral-400 select-none" aria-hidden>
              …
            </li>
            <PaginationControlBtn
              type="pageNumber"
              label={String(totalPages)}
              active={currentPage === totalPages}
              disabled={false}
              onClick={() => onSelect(totalPages)}
              aria-current={currentPage === totalPages ? "page" : undefined}
            />
          </>
        )}

        <PaginationControlBtn
          type="next"
          label="Next page"
          disabled={currentPage === totalPages}
          active={false}
          onClick={onNext}
        />
      </ul>

      <span className="sr-only">{`Page ${currentPage} of ${totalPages}`}</span>
    </div>
  );
};

export default ListPagination;
