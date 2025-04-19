import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import { useSidebar } from "../hooks/useSidebar";

export const DashboardLayout = () => {
  const { isSidebarOpen, isDesktop } = useSidebar();
  return (
    <AnimatePresence>
      <div className='relative min-w-screen overflow-hidden min-h-dvh flex flex-row items-start justify-center bg-[#F8F8FF] dark:bg-gray-800'>
        <div className='fixed top-0 left-0 h-full z-10'>
          <Sidebar />
        </div>
        <main className={`w-full flex-1 px-2 lg:px-4 pb-4  transition-colors duration-300  pt-24 `}>
          <Navbar className={`${isSidebarOpen && isDesktop ? "ml-64" : "0"}`} />
          <div className={`${isSidebarOpen && isDesktop ? "ml-64" : "0"}`}>
            <Outlet />
          </div>
        </main>
      </div>
    </AnimatePresence>
  );
};
