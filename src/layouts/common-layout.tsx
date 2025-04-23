import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import NavbarLower from "@/components/Home/Navbar/NavbarLower";
import { ReactNode } from "react";

interface CommonLayoutProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div>
      <Header />
      <Navbar />
      <NavbarLower />
      <div className="mx-auto w-[90%]">{children}</div>
      <Footer />
    </div>
  );
}
