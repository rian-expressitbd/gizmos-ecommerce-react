import "./index.css";
import Brands from "./components/Home/Brands/Brands";
import Categories from "./components/Home/Categories/Categories";
import Featured from "./components/Home/Featured/Featured";
import FeaturedGrid from "./components/Home/FeaturedGrid/FeaturedGrid";
import MoreCategories from "./components/Home/MoreCategories/MoreCategories";
import TopCategories from "./components/Home/TopCategories/TopCategories";
import Blogs from "./components/Home/Blogs/Blogs";
import HeroSlider from "./components/Home/Slider/Slider";

function App() {
  return (
    <>
      <HeroSlider />
      <div>
        <Categories />
        <Featured />
      </div>
      <HeroSlider />
      <div>
        <FeaturedGrid />
        <MoreCategories />
        <TopCategories />
        <Brands />
        <Blogs />
      </div>
    </>
  );
}

export default App;
