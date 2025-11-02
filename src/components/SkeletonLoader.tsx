const SkeletonLoader = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden
      role="presentation"
      className={`animate-pulse rounded-md bg-gray-200 ${className ?? ""}`}
    ></div>
  );
};
export default SkeletonLoader;
