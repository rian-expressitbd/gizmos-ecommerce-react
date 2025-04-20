import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Computers up to – 15% off",
    image: "/slider1.jpg",
    tagline: "The biggest risk is a missed opportunity.",
    category: "Game Joysticks",
    description: "Happy Joysticks celebrates the game! People play a million!",
    action: "Shop Now",
  },
  {
    title: "Laptops up to 20% off",
    image: "/slider2.jpg",
    tagline: "The biggest risk is a missed opportunity.",
    category: "Game Joysticks",
    action: "Shop Now",
  },
  {
    title: "Smartphones up to - 30% off",
    image: "/slider3.jpg",
    tagline: "The biggest risk is a missed opportunity.",
    category: "Monitor & Keyboards",
    action: "Shop Now",
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
    <div className="bg-[#F3F6FB] h-[395.83px] relative mb-[50px]">
      <Button
        onClick={prevSlide}
        title="prev-btn"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent text-black px-4 py-2 rounded-md transition z-10"
      >
        <FaChevronLeft />
      </Button>

      <Button
        onClick={nextSlide}
        title="next-btn"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent text-black px-4 py-2 rounded-md transition z-10"
      >
        <FaChevronRight />
      </Button>
      
      <div className="mx-auto w-[80%] h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-10 h-full"
          >
            {/* Text Content - Left Side */}
            <div className="md:w-1/2 w-full space-y-6">
              <motion.h2
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="text-4xl font-bold text-gray-900"
              >
                {slides[current].title}
              </motion.h2>

              <motion.p
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-600"
              >
                {slides[current].tagline}
              </motion.p>

              {slides[current].category && (
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8"
                >
                  {slides[current].description && (
                    <p className="text-gray-600">
                      {slides[current].description}
                    </p>
                  )}
                  {slides[current].action && (
                    <Button
                      title="action-btn"
                      className="mt-4 bg-[#2453D4] flex justify-between gap-3 items-center text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                    >
                      <p className="text-md">{slides[current].action}</p>
                      <FaChevronRight />
                    </Button>
                  )}
                </motion.div>
              )}
            </div>

            {/* Image with vertical slide animation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:w-1/2 w-full z-10"
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="rounded-lg object-cover w-[950px] h-[395.83px] z-10"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}