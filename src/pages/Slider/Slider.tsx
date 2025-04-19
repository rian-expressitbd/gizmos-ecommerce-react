import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/slider1.jpg",
    title: "Up to 20% off in MacBook",
    description: "This is the description for slide one.",
  },
  {
    image: "/slider2.jpg",
    title: "Up to 20% off in iPhone",
    description: "This is the description for slide two.",
  },
  {
    image: "/slider3.jpg",
    title: "Up to 20% off in Headphones",
    description: "This is the description for slide three.",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#F3F6FB] py-10 h-full">
      <div className="mx-auto w-[80%] flex flex-col items-center gap-10">
        {/* Navigation Buttons */}
        <div className="flex justify-between w-full mb-4">
          <button
            onClick={prevSlide}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
          >
            {/* Text Slide */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-left max-w-md left-0 absolute z-50"
            >
              <h2 className="text-3xl font-bold mb-4">
                {slides[current].title}
              </h2>
              <p className="text-lg text-gray-700">
                {slides[current].description}
              </p>
            </motion.div>

            {/* Image Slide */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 100, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="rounded-lg w-full  max-h-[364.55px] absolute right-0"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
