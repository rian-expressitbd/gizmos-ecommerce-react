import { Breadcrumb } from "@/components/ui/breadcrumb";

import PriceCard from "./PriceCard";

export default function PricingPlans() {
  return (
    <>
      <div className="mt-5 mx-auto w-[90%]">
        <Breadcrumb />
        <div className="mt-[60px]">
          <h1 className="text-5xl">Pricing Plans</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto mt-[30px] mb-[30px]">
            <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
        </div>
      </div>
    </>
  );
}
