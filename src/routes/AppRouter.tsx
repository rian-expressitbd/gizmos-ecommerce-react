import App from "@/App";
import About from "@/pages/about/About";
import ContactUs from "@/pages/contact/ContactUs";
import FAQ from "@/pages/faq/FAQ";
import GetInTouch from "@/pages/GetInTouch/GetInTouch";
import NotFoundPage from "@/pages/NotFoundPage";
import PricingPlans from "@/pages/pricing-plans/PricingPlans";
import SingleProductDetails from "@/pages/shop/SingleProductDetails/SingleProductDetails";
import StoreLocator from "@/pages/StoreLocator/StoreLocator";
import TermsAndConditions from "@/pages/terms_conditions/TermsAndConditions";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/product/:id" element={<SingleProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/store-locator" element={<StoreLocator />} />
        <Route path="/pricing" element={<PricingPlans />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
