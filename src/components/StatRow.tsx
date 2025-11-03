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
    <div className="space-x-2 text-sm">
      <span className="font-semibold capitalize">{renderLabel()}:</span>
      <span className="text-neutral-500">{value}</span>
    </div>
  );
};
export default StatRow;
