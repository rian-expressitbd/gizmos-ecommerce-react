import { Breadcrumb } from "@/components/ui/breadcrumb";

import ShopRightWithIcons from "@/pages/ShopWithCategory/ShopRightWithIcons";

export default function IconShopPage() {
  return (
    <>
      <div className="mx-auto w-[90%]">
        <Breadcrumb className="mt-5" />

        <ShopRightWithIcons />
      </div>
    </>
  );
}
