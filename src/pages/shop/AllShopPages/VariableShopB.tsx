import { Breadcrumb } from "@/components/ui/breadcrumb";

import { SingleProductAccordion } from "../SingleProductDetails/SingleProductAccordion";
import RelatedProducts from "../SingleProductDetails/RelatedProducts";
import VariableProductDetailsTwo from "../SingleProductDetails/VariableProductDetailsTwo";

export default function VariableProductB() {
  return (
    <>
      {/* tasks */}
      {/* variable products in single product details page  */}
      {/* modify the accordion  */}

      <div className="w-[90%] mx-auto mt-[30px]">
        <Breadcrumb />
        <VariableProductDetailsTwo />
      </div>
      <SingleProductAccordion />
      <RelatedProducts />
      <div className="mt-[30px] footer_div"></div>
    </>
  );
}
