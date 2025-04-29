import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import NavbarLower from "@/components/Home/Navbar/NavbarLower";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCardForLargeImg } from "@/components/ui/cards/ProductCardForLargeImg";

export default function FourColumnsWide() {
  const products = [
    {
      id: 1,
      category: "GADGETS",
      image: "/featured1.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 2,
      category: "GADGETS",
      image: "/featured2.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 3,
      category: "GADGETS",
      image: "/featured3.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 4,
      category: "GADGETS",
      image: "/featured4.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 5,
      category: "GADGETS",
      image: "/featured4.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 6,
      category: "GADGETS",
      image: "/featured5.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 7,
      category: "GADGETS",
      image: "/featured6.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 8,
      category: "GADGETS",
      image: "/featured7.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 9,
      category: "GADGETS",
      image: "/featured8.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
  ];
  return (
    <>
      <Header />

      <Navbar />
      <NavbarLower />
      <div className="mt-5 mx-auto w-[90%]">
        <Breadcrumb />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] mt-[50px] mb-5">
        {/* Map through products and apply special styling for the 3rd item */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className={
              "h-full" // Other items have a fixed height
            }
          >
            <ProductCardForLargeImg index={index} product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
