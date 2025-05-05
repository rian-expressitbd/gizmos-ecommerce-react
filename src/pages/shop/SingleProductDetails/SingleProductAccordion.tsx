import { Accordion, AccordionContent } from "@/components/ui/accordion";
import { Image } from "@/components/ui/image";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";

export const SingleProductAccordion = () => {
  const products = [
    {
      id: "1",
      name: "Fractal Design Tempered Glass S7 Computer Case",
      price: "2790",
      image: "/featured1.jpg",
      category: "Device",
      title: "Device",
    },
    {
      id: "2",
      name: "Multiuse USB Cable Phone/Tablet/Laptop",
      price: "42",
      image: "/featured2.jpg",
      category: "Device",
      title: "Device",
    },
    {
      id: "3",
      name: "Profeus Tablet Q Series QW-55814 Professional",
      price: "550",
      image: "/featured3.jpg",
      category: "Device",
      title: "Device",
    },
  ];

  return (
    <div className="w-[90%] mx-auto">
      <div className="space-y-4">
        <Accordion trigger="Accesories" defaultOpen={true}>
          <AccordionContent isOpen={true}>
            <div className="min-h-full w-full flex flex-col gap-6 md:flex-row justify-between items-center ">
              <div className="md:w-2/3 w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {products.map((product) => (
                  <div
                    className="group  border-[0.5px] rounded-lg h-fit md:h-full p-2 sm:p-3 
                     flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-md"
                  >
                    {/* Header with category and action icons - fixed position */}
                    <div className="flex justify-between z-10 bg-white">
                      <p className="text-xs text-gray-400">
                        {product.category}
                      </p>
                      <div className="flex flex-col gap-3">
                        <FaRegHeart className="cursor-pointer hover:text-red-500 transition-colors" />
                        <TbArrowsDoubleNeSw className="cursor-pointer hover:text-blue-500 transition-colors" />
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow transition-transform duration-300 group-hover:-translate-y-10">
                      {/* Product image */}

                      <Image
                        src={product.image}
                        className="mx-auto w-full h-[200px] object-contain my-auto"
                        alt={product.title}
                      />

                      <h1 className="text-lg mt-3">${product.price}</h1>
                    </div>

                    {/* Add to Cart button that slides up on hover */}
                    <button
                      className="absolute flex justify-between bottom-0 left-0 right-0 bg-[#2453D4] text-white py-3 
                                  opacity-0 translate-y-full transition-all duration-300
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  hover:bg-[#2453D4] text-sm p-3"
                    >
                      <p>Remove From Cart</p>
                      <FiShoppingCart />
                    </button>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-fit bg-[#F3F6FB] dark:bg-black text-black dark:text-white dark:border-[0.5px] border-gray-50 p-6 h-full min-h-[300px] flex flex-col justify-between ">
                {/* Top-aligned content */}
                <div>
                  <h2 className="text-xl font-semibold">Your Current Cart</h2>
                </div>

                {/* Center-aligned content */}
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold text-lg">1742$</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">for 3 items(s)</p>
                </div>

                {/* Bottom-aligned content */}
                <div className="flex justify-center">
                  <button className="bg-blue-600 text-white py-2 px-3 rounded hover:bg-gray-800 transition-colors">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </AccordionContent>
        </Accordion>
        <Accordion trigger="Description">
          <div className="space-y-4 dark:bg-black ">
            <div>
              <h3 className="font-medium">4K Smart Monitor</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                VariableNet Expo GPS-587736ck
              </p>
              <p className="font-bold mt-1">$1,150</p>
            </div>
            <div>
              <h3 className="font-medium">Multiusre USB Cable</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Phone/Tablet/Laptop
              </p>
              <p className="font-bold mt-1">$42</p>
            </div>
            <div>
              <h3 className="font-medium">Profous Tablet Q Series</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                QW-SS814 Professional
              </p>
              <p className="font-bold mt-1">$550</p>
            </div>
          </div>
        </Accordion>

        <Accordion trigger="Specification">
          <p className="text-gray-600 dark:text-gray-300">
            Product specifications would appear here
          </p>
        </Accordion>

        <Accordion trigger="Reviews (0)">
          <p className="text-gray-600 dark:text-gray-300">No reviews yet</p>
        </Accordion>
      </div>
    </div>
  );
};
