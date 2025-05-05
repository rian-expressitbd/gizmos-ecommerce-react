import { Image } from "@/components/ui/image";
import { IoCloseOutline } from "react-icons/io5";

type SetCompareModalProps = {
  setCompareModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CompareModal({
  setCompareModalOpen,
}: SetCompareModalProps) {
  const compareProducts = [
    {
      id: 348,
      name: "Wireless PC Mouse XF-550 Black/Grey",
      price: 250,
      image: "/featured1.jpg",
      inStock: true,
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 349,
      name: "X7 Closed-Back Wireless Earbuds",
      price: 345,
      image: "/featured2.jpg",
      inStock: true,
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 350,
      name: "Computer Monitor Full HD Red/Black",
      price: 1200,
      image: "/featured3.jpg",
      inStock: true,
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-md shadow-lg bg-white/80 dark:bg-black/80 backdrop-blur-md dark:text-white">
        
        {/* Sticky Glass Header */}
        <div className="sticky top-0 z-20 flex justify-between items-center p-4 border-b bg-white/60 dark:bg-black/60 backdrop-blur-md">
          <h2 className="text-xl font-semibold">Compare products</h2>
          <button
            onClick={() => setCompareModalOpen(false)}
            aria-label="Close"
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
          >
            <IoCloseOutline size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compareProducts.map((product) => (
              <div key={product.id} className="relative border-r p-4 rounded-md bg-white/70 dark:bg-black/70 backdrop-blur-md">
                <button
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                  onClick={() => {
                    /* Implement product removal logic here */
                  }}
                  aria-label="Remove product"
                >
                  <IoCloseOutline size={20} />
                </button>

                <div className="flex justify-center py-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-32 object-contain"
                  />
                </div>

                <div className="text-center">
                  <div className="text-green-600 mb-2">
                    {product.inStock ? "In stock" : "Out of stock"}
                  </div>

                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {product.description}
                  </div>

                  <div className="mb-2">
                    <span className="font-semibold">SKU:</span> {product.id}
                  </div>

                  <div className="font-semibold mb-2">{product.name}</div>

                  <div className="text-xl font-bold mb-4">${product.price}</div>

                  <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-4 rounded-md w-full flex items-center justify-center">
                    <span>ADD TO CART</span>
                    <svg
                      className="ml-2 w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6H22L19 16H6L3 6Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 20C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18C7.44772 18 7 18.4477 7 19C7 19.5523 7.44772 20 8 20Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="M17 20C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
