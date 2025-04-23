import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import NavbarLower from "@/components/Home/Navbar/NavbarLower";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Footer from "@/components/Home/Footer/Footer";
import { SingleProductAccordion } from "./SingleProductAccordion";
import RelatedProducts from "./RelatedProducts";
import SingleProductTwo from "./SingleProductTwo";

export default function SingleProductDetailsTwo() {
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
        <SingleProductTwo />
      </div>
      <SingleProductAccordion />
      <RelatedProducts />
      <div className="mt-[30px] footer_div">
        <Footer />
      </div>
    </>
  );
}
