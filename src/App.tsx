import "./index.css";
import Brands from "./components/Home/Brands/Brands";
import Categories from "./components/Home/Categories/Categories";
import Featured from "./components/Home/Featured/Featured";
import FeaturedGrid from "./components/Home/FeaturedGrid/FeaturedGrid";
import Header from "./components/Home/Header/Header";
import MoreCategories from "./components/Home/MoreCategories/MoreCategories";
import Navbar from "./components/Home/Navbar/Navbar";
import NavbarLower from "./components/Home/Navbar/NavbarLower";
import Slider from "./components/Home/Slider/Slider";
import TopCategories from "./components/Home/TopCategories/TopCategories";
import Blogs from "./components/Home/Blogs/Blogs";
import Footer from "./components/Home/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <NavbarLower />
      <Slider />
      <Categories />
      <Featured />
      <Slider />
      <FeaturedGrid />
      <MoreCategories />
      <TopCategories />
      <Brands />
      <Blogs />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
