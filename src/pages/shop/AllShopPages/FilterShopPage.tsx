import Products from "@/components/Home/Featured/Products";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function FilterShopPage() {
  return (
    <>
      <div className="mt-3 mx-auto w-[90%]">
        <Breadcrumb />
      </div>
      <div className="mt-[50px]">
        <Products />
      </div>
    </>
  );
}
