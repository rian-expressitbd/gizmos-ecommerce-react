import { Image } from "@/components/ui/image";
import { IoCloseOutline } from "react-icons/io5";

type SetCompareModalProps = {
  setCompareModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CompareModal({
  setCompareModalOpen,
}: SetCompareModalProps) {
  // Sample product data for comparison
  const compareProducts = [
    {
      id: 348,
      name: "Wireless PC Mouse XF-550 Black/Grey",
      price: 250,
      image: "/featured1.jpg",
      inStock: true,
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.",
    },
    {
      id: 349,
      name: "X7 Closed-Back Wireless Earbuds",
      price: 345,
      image: "/featured2.jpg",
      inStock: true,
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.",
    },
    {
      id: 350,
      name: "Computer Monitor Full HD Red/Black",
      price: 1200,
      image: "/featured3.jpg",
      inStock: true,
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.",
    },
  ];
  return (
    <>
    <div
      className="fixed inset-0  bg-opacity-50 z-40"
      onClick={() => setCompareModalOpen(false)}
    />
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-black dark:text-white rounded-md shadow-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex fixed top-0 justify-between items-center p-4 border-b w-[90%]">
          <h2 className="text-xl font-semibold">Compare products</h2>
          <button className="justify-end" onClick={() => setCompareModalOpen(false)}>
            <IoCloseOutline size={24} />
          </button>
        </div>
  
        {/* Scrollable content */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-black dark:text-white z-[70]">
            {compareProducts.map((product) => (
              <div key={product.id} className="relative border-r">
                <button
                  className="absolute top-0 right-0 p-1"
                  onClick={() => {
                    /* Remove product from comparison */
                  }}
                >
                  <IoCloseOutline size={20} />
                </button>
  
                <div className="flex justify-center py-6">
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
  
                  <div className="text-sm text-gray-600 dark:text-white mb-4">
                    {product.description}
                  </div>
  
                  <div className="mb-2">
                    <span className="font-semibold">SKU:</span> {product.id}
                  </div>
  
                  <div className="font-semibold mb-2">{product.name}</div>
  
                  <div className="text-xl font-bold mb-4">${product.price}</div>
  
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center w-full border-r">
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
  </>
  
  );
}
