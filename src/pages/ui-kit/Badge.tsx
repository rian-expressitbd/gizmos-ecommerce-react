import {
  Badge,
  StatusBadge,
  PriceBadge,
} from "@/components/ui/badge"; // Adjust path as needed

const Badges = () => {
  const variants = [
    "default",
    "blue",
    "purple",
    "green",
    "red",
    "yellow",
    "gray",
  ] as const;

  return (
    <div className="space-y-6 p-6">
      {/* Basic Badge Variants */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Badge Variants</h2>
        <div className="flex flex-wrap gap-2">
          {variants.map((variant) => (
            <Badge key={variant} variant={variant} className="capitalize">
              {variant} badge
            </Badge>
          ))}
        </div>
      </div>

      {/* Status Badge */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Status Badge</h2>
        <div className="flex gap-4">
          <StatusBadge isActive />
          <StatusBadge isActive={false} />
          <StatusBadge
            isActive
            activeText="Available"
            inactiveText="Unavailable"
            className="text-sm"
          />
        </div>
      </div>

      {/* Price Badge */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Price Badge</h2>
        <div className="flex flex-wrap gap-4">
          <PriceBadge label="Price" value={200} />
          <PriceBadge
            label="Discounted"
            value={150}
            currency="$"
            variant="green"
          />
          <PriceBadge
            label="Offer"
            value="99"
            variant="purple"
            className="text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Badges;
