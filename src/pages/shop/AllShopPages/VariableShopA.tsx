import { Breadcrumb } from "@/components/ui/breadcrumb";

import { SingleProductAccordion } from "../SingleProductDetails/SingleProductAccordion";
import RelatedProducts from "../SingleProductDetails/RelatedProducts";
import VariableProductDetailsOne from "../SingleProductDetails/VariableProductDetails";

export default function VariableProductA() {
  return (
    <>
      {/* tasks */}
      {/* variable products in single product details page  */}
      {/* modify the accordion  */}

      <div className="w-[90%] mx-auto mt-[30px]">
        <Breadcrumb />
        <VariableProductDetailsOne />
      </div>
      <SingleProductAccordion />
      <RelatedProducts />
      <div className="mt-[30px] footer_div"></div>
    </>
  );
}
