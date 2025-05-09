import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router";
import AuthNavbar from "../components/Auth/AuthNavbar";
import ThemeColorPicker from "../components/theme-picker";
import ThemeToggler from "../components/themeToggler";

const bubbleVariantsTop = {
  initial: { scale: 0.8, opacity: 0 },
  hover: {
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 0.8,
      ease: "linear",
    },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const bubbleVariantsBottom = {
  initial: { scale: 0.5, opacity: 0 },
  hover: {
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 0.8,
      ease: "linear",
    },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const AuthLayout = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence>
      <div className="relative max-w-screen overflow-hidden min-h-dvh flex flex-col items-center justify-center dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 z-0 opacity-10 bg-[length:15px_15px] bg-[repeating-linear-gradient(45deg,#444cf7_0,#444cf7_1px,#e5e5f7_0,#e5e5f7_50%)]" />
        {/* Top Bubble */}
        <motion.div
          className="absolute -top-16 -left-16 z-0"
          variants={bubbleVariantsTop}
          initial="initial"
          animate={isHovered ? "hover" : "animate"}
        >
          <div
            className={`bg-gradient-to-r from-primary to-secondary p-20 md:p-32 rounded-br-[50%] shadow-xl opacity-70
            }`}
          />
        </motion.div>

        {/* Bottom Bubble */}
        <motion.div
          className="absolute -bottom-16 -right-16 z-0"
          variants={bubbleVariantsBottom}
          initial="initial"
          animate={isHovered ? "hover" : "animate"}
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-20 md:p-32 rounded-tl-[50%] shadow-xl opacity-70" />
        </motion.div>

        <div className="absolute h-fit top-2 md:top-2 md:right-2 w-fit flex items-center justify-end gap-2 p-2 z-10 rounded-full bg-white dark:bg-gray-800">
          <ThemeColorPicker />
          <ThemeToggler />
        </div>

        {/* Main Content */}
        <div className="container mx-auto md:mx-0 flex flex-col items-center justify-center p-5 my-20 sm:px-6 sm:py-8 lg:py-0 gap-5 sm:gap-10 z-10">
          <AuthNavbar />
          <motion.div
            className="bg-transparent w-full"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <Outlet context={{ setIsHovered }} />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
