import { Breadcrumb } from "@/components/ui/breadcrumb";

import SingleProductOne from "../SingleProductDetails/SingleProductOne";
import { SingleProductAccordion } from "../SingleProductDetails/SingleProductAccordion";
import RelatedProducts from "../SingleProductDetails/RelatedProducts";

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
      <SingleProductAccordion />
      <RelatedProducts />
      <div className="mt-[30px] footer_div"></div>
    </>
  );
}
