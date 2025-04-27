import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import NavbarLower from "@/components/Home/Navbar/NavbarLower";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Footer from "@/components/Home/Footer/Footer";
import { SingleProductAccordion } from "../SingleProductDetails/SingleProductAccordion";
import RelatedProducts from "../SingleProductDetails/RelatedProducts";
import NewProductDetails from "../SingleProductDetails/NewProductDetails";

export default function NewProduct() {
  return (
    <>
      {/* tasks */}
      {/* variable products in single product details page  */}
      {/* modify the accordion  */}
      <Header />
      <Navbar />
      <NavbarLower />
      <div className="w-[90%] mx-auto mt-[30px]">
        <Breadcrumb />
        <NewProductDetails />
      </div>
      <SingleProductAccordion />
      <RelatedProducts />
      <div className="mt-[30px] footer_div">
        <Footer />
      </div>
    </>
  );
}
