import Select, { Option } from "./ui/form/select";

interface ItemsPerPageSelectorProps {
  value: number;
  onChange: (value: number) => void;
  options?: Option[];
  className?: string;
}

const DEFAULT_ITEMS_PER_PAGE_OPTIONS = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
];

export const ItemsPerPageSelector = ({
  value,
  onChange,
  options = DEFAULT_ITEMS_PER_PAGE_OPTIONS,
  className = "w-24",
}: ItemsPerPageSelectorProps) => {
  const handleChange = (selected: Option[]) => {
    onChange(Number(selected[0]?.value || 10));
  };

  return (
    <div className={className}>
      <Select
        options={options}
        value={[{ label: value.toString(), value: value.toString() }]}
        onChange={handleChange}
        preserveErrorSpace={false}
      />
    </div>
  );
};
