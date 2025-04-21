import { ProductCard } from "@/components/ui/cards/product-card";

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
    image: "/featured5.jpg",
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
    image: "/featured5.jpg",
    title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
    price: "$1150",
    isNew: true,
  },
  {
    id: 8,
    category: "GADGETS",
    image: "/featured5.jpg",
    title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
    price: "$1150",
    isNew: true,
  },
  {
    id: 9,
    category: "GADGETS",
    image: "/featured5.jpg",
    title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
    price: "$1150",
    isNew: true,
  },
];

export default function FeaturedGrid() {
  return (
    <div className="mx-auto w-[90%] py-8 mb-[50px]">
      <h2 className="text-2xl font-bold mb-6">FEATURED PRODUCTS</h2>
      <div className="grid grid-cols-1 xl:grid-cols-6 xl:grid-rows-2 gap-y-[0.5rem] gap-x-[0.5rem]">
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
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
