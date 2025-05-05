import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    title: "4K Smart Monitor Vantablack Expo GP5-8377364J",
    price: 1150,
    quantity: 1,
    image: "/featured1.jpg",
  },
  {
    id: 2,
    title: "Multiline USB Cable iPhone/Tablet/Laptop",
    price: 42,
    quantity: 1,
    image: "/featured2.jpg",
  },
  {
    id: 3,
    title: "Profess Tablet Q Series QW 55841 Professional",
    price: 550,
    quantity: 1,
    image: "/featured3.jpg",
  },
  {
    id: 4,
    title: "Fractal Design SSD PW Tempered Glass Computer Case",
    price: 2790,
    quantity: 2,
    image: "/featured4.jpg",
  },
];

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [coupon, setCoupon] = useState<string>("");

  const handleQuantityChange = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="mt-5 mx-auto w-[90%]">
        <Breadcrumb />
      </div>

      <div className="px-4 py-10 mx-auto w-[90%]">
        <h2 className="text-2xl font-bold mb-6">Cart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="text-left border-b">
                <th className="p-6"></th>
                <th className="p-6">Product</th>
                <th className="p-6">Price</th>
                <th className="p-6">Quantity</th>
                <th className="p-6">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 dark:hover:text-black"
                >
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
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="border px-2"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="border px-2"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-6">${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border px-4 py-2 rounded w-full"
            />
            <Button
              title="coupon"
              className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700"
            >
              Apply Coupon
            </Button>
          </div>
          <Button
            title="update_cart"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Cart
          </Button>
        </div>

        <div className="mt-10 text-right">
          <div className="text-lg mb-2">
            <span className="font-semibold">Subtotal:</span> $
            {subtotal.toLocaleString()}
          </div>
          <div className="text-xl font-bold">
            <span>Total:</span> ${subtotal.toLocaleString()}
          </div>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
