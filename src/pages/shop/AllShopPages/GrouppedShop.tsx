import { Breadcrumb } from "@/components/ui/breadcrumb";

import { SingleProductAccordion } from "../SingleProductDetails/SingleProductAccordion";
import RelatedProducts from "../SingleProductDetails/RelatedProducts";
import GrouppedProductDetails from "../SingleProductDetails/GrouppedProduct";

export default function GrouppedProduct() {
  return (
    <>
      {/* tasks */}
      {/* variable products in single product details page  */}
      {/* modify the accordion  */}

      <div className="w-[90%] mx-auto mt-[30px]">
        <Breadcrumb />
        <GrouppedProductDetails />
      </div>
      <SingleProductAccordion />
      <RelatedProducts />
      <div className="mt-[30px] footer_div"></div>
    </>
  );
}
