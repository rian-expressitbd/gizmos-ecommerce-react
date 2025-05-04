import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCard } from "@/components/ui/cards/product-card";


export default function BestSellers() {
  const products = [
    {
      id: 1,
      category: "GADGETS",
      image: "/featured1.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
      count_down: false,
    },
    {
      id: 2,
      category: "GADGETS",
      image: "/featured2.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
      count_down: false,
    },
    {
      id: 3,
      category: "GADGETS",
      image: "/featured3.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
      count_down: true,
    },
    {
      id: 4,
      category: "GADGETS",
      image: "/featured4.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
      count_down: false,
    },
    {
      id: 5,
      category: "GADGETS",
      image: "/featured5.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
      count_down: false,
    },
    {
      id: 6,
      category: "GADGETS",
      image: "/featured5.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
      count_down: false,
    },
    {
      id: 7,
      category: "GADGETS",
      image: "/featured5.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
      count_down: false,
    },
    {
      id: 8,
      category: "GADGETS",
      image: "/featured5.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
      count_down: false,
    },
    {
      id: 9,
      category: "GADGETS",
      image: "/featured5.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
      count_down: false,
    },
  ];
  return (
    <>
      <div className="mt-3 w-[90%] mx-auto">
        <Breadcrumb />
      </div>
      <div className="mt-[50px] mb-[50px] w-[90%] mx-auto">
        <h3 className="text-3xl font-semibold">Bestsellers</h3>
        <div className="mt-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 xl:grid-rows-2 gap-y-[0.5rem] gap-x-[0.5rem]">
            {/* Map through products and apply special styling for the 3rd item */}
            {products.map((product, index) => (
              <div
                key={product.id}
                className={
                  index === 2
                    ? "xl:col-span-2 xl:row-span-2 h-full" // 3rd item spans 2 columns and 2 rows
                    : "h-full" // Other items have a fixed height
                }
              >
                <ProductCard index={index} product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
