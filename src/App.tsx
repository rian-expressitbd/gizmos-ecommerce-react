import "./index.css";
import Categories from "./pages/Categories/Categories";
import Header from "./pages/Header/Header";
import Navbar from "./pages/Navbar/Navbar";
import NavbarLower from "./pages/Navbar/NavbarLower";
import Slider from "./pages/Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <NavbarLower />
      <Slider />
      <Categories />
    </>
  );
}

export default App;
