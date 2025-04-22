import App from "@/App";
import About from "@/pages/about/About";
import NotFoundPage from "@/pages/NotFoundPage";
import SingleProductDetails from "@/pages/shop/SingleProductDetails/SingleProductDetails";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/product/:id" element={<SingleProductDetails />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
