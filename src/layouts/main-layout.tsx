import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router";
import AuthNavbar from "../components/Auth/AuthNavbar";
import ThemeColorPicker from "../components/theme-picker";
import ThemeToggler from "../components/themeToggler";

export const MainLayout = () => {
  return (
    <AnimatePresence>
      <div className="relative max-w-screen overflow-hidden min-h-dvh flex flex-col items-center justify-center dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 z-0 opacity-10 bg-[length:15px_15px] bg-[repeating-linear-gradient(45deg,#444cf7_0,#444cf7_1px,#e5e5f7_0,#e5e5f7_50%)]" />

        <div className="absolute h-fit top-2 md:top-2 md:right-2 w-fit flex items-center justify-end gap-2 p-2 z-20 rounded-full bg-white dark:bg-gray-800">
          <ThemeColorPicker />
          <ThemeToggler />
        </div>

        {/* Main Content */}
        <div className="container mx-auto md:mx-0 flex flex-col items-center justify-center sm:px-6 sm:py-8 lg:py-0 gap-5 sm:gap-10 z-10 bg-base dark:bg-gray-800 min-h-dvh border-[#444cf7_1px] border-x">
          <AuthNavbar />

          <Outlet />
        </div>
      </div>
    </AnimatePresence>
  );
};
