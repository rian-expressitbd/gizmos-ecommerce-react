import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import NavbarLower from "@/components/Home/Navbar/NavbarLower";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

// interface Props {
//   outlet: ReactNode;
// }

export const CommonLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <NavbarLower />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};
