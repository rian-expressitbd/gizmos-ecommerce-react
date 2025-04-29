import Products from "@/components/Home/Featured/Products";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";

export default function FilterShopPage() {
  return (
    <CommonLayout>
      <div className="mt-3">
        <Breadcrumb />
      </div>
      <div className="mt-[50px]">
       <Products />
      </div>
    </CommonLayout>
  );
}
