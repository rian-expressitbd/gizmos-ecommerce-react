import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";
import ShopRightWithIcons from "@/pages/ShopWithCategory/ShopRightWithIcons";


export default function IconShopPage() {


  return (
    <CommonLayout>
      <Breadcrumb className="mt-5" />

      <ShopRightWithIcons />
    </CommonLayout>
  );
}
