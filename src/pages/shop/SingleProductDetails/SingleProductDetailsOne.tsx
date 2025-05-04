import { Breadcrumb } from "@/components/ui/breadcrumb";

// import { SingleProductAccordion } from "./SingleProductAccordion";
import RelatedProducts from "./RelatedProducts";
import SingleProductOne from "./SingleProductOne";
import ProductTabSystem from "../AllShopPages/SmallComponents/Tabs";

export default function SingleProductDetailsOne() {
  return (
    <>
      {/* tasks */}
      {/* variable products in single product details page  */}
      {/* modify the accordion  */}

      <div className="w-[90%] mx-auto mt-[30px]">
        <Breadcrumb />
        <SingleProductOne />
      </div>
      <ProductTabSystem />
      {/* <SingleProductAccordion /> */}
      <RelatedProducts />
      <div className="mt-[30px] footer_div"></div>
    </>
  );
}
