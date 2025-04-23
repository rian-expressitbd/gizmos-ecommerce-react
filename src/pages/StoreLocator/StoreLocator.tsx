import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";
import Map from "../contact/Map";

export default function StoreLocator() {
  return (
    <CommonLayout>
      <div className="mt-3">
        <Breadcrumb />
        <div className="mt-[60px]">
          <h1 className="text-5xl">Store Locator</h1>
          <div className="mt-3">
            <Map />
          </div>
          
        </div>
      </div>
    </CommonLayout>
  );
}
