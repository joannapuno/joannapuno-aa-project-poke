import type { Profile, StatName } from "@/types";

interface Props {
  label: StatName | Profile;
  value: number;
}
const StatRow = ({ label, value }: Props) => {
  const renderLabel = () => {
    if (!label) return;
    if (label === "hp") return "HP";
    return label.replace("-", " ");
  };
  return (
    <dl className="flex items-center gap-2 text-sm">
      <dt className="font-semibold capitalize">{renderLabel()}:</dt>
      <dd className="text-neutral-500">{value}</dd>
    </dl>
  );
};
export default StatRow;
