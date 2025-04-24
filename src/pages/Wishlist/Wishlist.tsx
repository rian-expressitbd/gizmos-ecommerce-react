import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import CommonLayout from "@/layouts/common-layout";
import React from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  instock: boolean;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    title: "4K Smart Monitor Vantablack Expo GP5-8377364J",
    price: 1150,
    quantity: 1,
    image: "/featured1.jpg",
    instock: true,
  },
  {
    id: 2,
    title: "Multiline USB Cable iPhone/Tablet/Laptop",
    price: 42,
    quantity: 1,
    image: "/featured2.jpg",
    instock: true,
  },
  {
    id: 3,
    title: "Profess Tablet Q Series QW 55841 Professional",
    price: 550,
    quantity: 1,
    image: "/featured3.jpg",
    instock: true,
  },
  {
    id: 4,
    title: "Fractal Design SSD PW Tempered Glass Computer Case",
    price: 2790,
    quantity: 2,
    image: "/featured4.jpg",
    instock: true,
  },
];

const Wishlist: React.FC = () => {
  return (
    <CommonLayout>
      <div className="mt-5">
        <Breadcrumb />
      </div>

      <div className="px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <tbody>
              {initialCart.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-6 text-red-500 cursor-pointer">✕</td>
                  <td className="p-6 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12"
                    />
                    {item.title}
                  </td>
                  <td className="p-6">${item.price}</td>
                  <td className="p-6">
                    {item.instock ? "Instock" : "Out of Stock"}
                  </td>
                  <td className="p-6">
                    <Button
                      title="update_cart"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Add to Cart
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Wishlist;
