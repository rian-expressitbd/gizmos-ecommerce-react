import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";

export default function ShopWithCategory() {
  return (
    <CommonLayout>
      <Breadcrumb className="mt-5" />
      <div className="mt-[70px] flex flex-col lg:flex-row gap-9">
          <div className="filters">
            
          </div>
      </div>
    </CommonLayout>
  );
}
