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
    <div className="bg-[#F3F6FB] relative mb-12 w-full">
      {/* Navigation Buttons */}
      <Button
        onClick={prevSlide}
        title="prev-btn"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md z-10"
      >
        <FaChevronLeft />
      </Button>

      <Button
        onClick={nextSlide}
        title="next-btn"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md z-10"
      >
        <FaChevronRight />
      </Button>

      <div className="w-[90%] mx-auto px-4 py-6 h-[331px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12"
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <motion.h2
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
              >
                {slides[current].title}
              </motion.h2>

              <motion.p
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className=" sm:text-lg  text-gray-600"
              >
                {slides[current].tagline}
              </motion.p>

              {slides[current].category && (
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4"
                >
                  {slides[current].description && (
                    <p className=" text-sm  text-gray-600">
                      {slides[current].description}
                    </p>
                  )}
                  {slides[current].action && (
                    <Button
                      title="action-btn"
                      className="mt-4 bg-[#2453D4] flex mx-auto md:mx-0 justify-center md:justify-start items-center gap-2 text-white px-5 py-2 rounded hover:bg-blue-900 transition"
                    >
                      <span className="text-sm sm:text-base">
                        {slides[current].action}
                      </span>
                      <FaChevronRight />
                    </Button>
                  )}
                </motion.div>
              )}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="rounded-lg w-full h-[253px]  object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
