import "./index.css";
import Brands from "./pages/components/Brands/Brands";
import Categories from "./pages/components/Categories/Categories";
import Featured from "./pages/components/Featured/Featured";
import FeaturedGrid from "./pages/components/FeaturedGrid/FeaturedGrid";
import Header from "./pages/components/Header/Header";
import MoreCategories from "./pages/components/MoreCategories/MoreCategories";
import Navbar from "./pages/components/Navbar/Navbar";
import NavbarLower from "./pages/components/Navbar/NavbarLower";
import Slider from "./pages/components/Slider/Slider";
import TopCategories from "./pages/components/TopCategories/TopCategories";

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
      <Brands/>
    </>
  );
}

export default App;
