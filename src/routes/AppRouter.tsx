import App from "@/App";
import { WishlistProvider } from "@/context/WishlistContext";
import { CommonLayout } from "@/layouts/common-layout";
import About from "@/pages/about/About";
import BestSellers from "@/pages/BestSellers/BestSellers";
import BlogDetails from "@/pages/BlogDetails/BlogDetails";
import BlogDetailsWithSlider from "@/pages/BlogDetails/BlogDetailsWithSlider";
import BlogLeftSidebar from "@/pages/blogs/AllBlogPages/BlogLeftSidebar";
import BlogLinkPost from "@/pages/blogs/AllBlogPages/BlogLinkPost";
import BlogNoSidebar from "@/pages/blogs/AllBlogPages/BlogNoSidebar";
import BlogQuotePost from "@/pages/blogs/AllBlogPages/BlogQuotePost";
import BlogRightSidebar from "@/pages/blogs/AllBlogPages/BlogRightSidebar";
import BlogVideoPost from "@/pages/blogs/AllBlogPages/BlogVideoPost";
import Blogs from "@/pages/blogs/Blogs";
import CartPage from "@/pages/cart/Cart";
import Checkout from "@/pages/checkout/Checkout";
import ContactUs from "@/pages/contact/ContactUs";
import FAQ from "@/pages/faq/FAQ";
import GetInTouch from "@/pages/GetInTouch/GetInTouch";
import ForgotPassword from "@/pages/MyAccount/ForgotPassword";
import ForgotPasswordStepTwo from "@/pages/MyAccount/ForgotPasswordStepTwo";
import Login from "@/pages/MyAccount/Login";
import MyAccount from "@/pages/MyAccount/MyAccount";
import NotFoundPage from "@/pages/NotFoundPage";
import PricingPlans from "@/pages/pricing-plans/PricingPlans";
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";
import AccordionShop from "@/pages/shop/AllShopPages/AccordionShop";
import BannerShopPage from "@/pages/shop/AllShopPages/BannerShopPage";
import FilterShopPage from "@/pages/shop/AllShopPages/FilterShopPage";
import FiveColumnsWide from "@/pages/shop/AllShopPages/FiveColumnsWide";
import FourColumnsShop from "@/pages/shop/AllShopPages/FourColumnsShop";
import FourColumnsWide from "@/pages/shop/AllShopPages/FourColumnsWide";
import GrouppedProduct from "@/pages/shop/AllShopPages/GrouppedShop";
import IconShopPage from "@/pages/shop/AllShopPages/IconShopPage";
import NewProduct from "@/pages/shop/AllShopPages/NewProduct";
import SaleProduct from "@/pages/shop/AllShopPages/SaleProduct";
import SixColumnsWide from "@/pages/shop/AllShopPages/SixColumnsWide";
import SliderList from "@/pages/shop/AllShopPages/SliderList";
import SoldProduct from "@/pages/shop/AllShopPages/SoldProduct";
import StandardShopPage from "@/pages/shop/AllShopPages/StandardShopPage";
import ThreeColumnsShop from "@/pages/shop/AllShopPages/ThreeColumnsShop";
import TwoColumnsShop from "@/pages/shop/AllShopPages/TwoColumnsShop";
import VariableProductA from "@/pages/shop/AllShopPages/VariableShopA";
import VariableProductB from "@/pages/shop/AllShopPages/VariableShopB";
import SingleProductDetails from "@/pages/shop/SingleProductDetails/SingleProductDetails";
import SingleProductDetailsOne from "@/pages/shop/SingleProductDetails/SingleProductDetailsOne";
import SingleProductDetailsTwo from "@/pages/shop/SingleProductDetails/SingleProductDetailsTwo";
import ShopWithCategory from "@/pages/ShopWithCategory/ShopWithCategory";
import StoreLocator from "@/pages/StoreLocator/StoreLocator";
import TermsAndConditions from "@/pages/terms_conditions/TermsAndConditions";
import WeeklyDiscount from "@/pages/WeeklyDiscount/WeeklyDiscount";
import Wishlist from "@/pages/Wishlist/Wishlist";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/account" element={<MyAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/code" element={<ForgotPasswordStepTwo />} />
          <Route element={<CommonLayout />}>
            <Route index element={<App />} />
            <Route path="/product/1" element={<SingleProductDetails />} />
            <Route path="/product/2" element={<SingleProductDetailsOne />} />
            <Route path="/product/3" element={<SingleProductDetailsTwo />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/get-in-touch" element={<GetInTouch />} />
            <Route path="/store-locator" element={<StoreLocator />} />
            <Route path="/pricing" element={<PricingPlans />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shop" element={<ShopWithCategory />} />
            {/* All shop pages  */}
            <Route
              path="/shop/standard"
              element={<SingleProductDetailsOne />}
            />
            <Route path="/shop/accordion" element={<AccordionShop />} />
            <Route path="/shop/variable-a" element={<VariableProductA />} />
            <Route path="/shop/variable-b" element={<VariableProductB />} />
            <Route
              path="/shop/cowntdown"
              element={<SingleProductDetailsOne />}
            />
            <Route path="/shop/virtual" element={<SingleProductDetailsOne />} />
            <Route
              path="/shop/downloadable"
              element={<SingleProductDetailsOne />}
            />
            <Route path="/shop/groupped" element={<GrouppedProduct />} />
            <Route path="/shop/new" element={<NewProduct />} />
            <Route path="/shop/sale" element={<SaleProduct />} />
            <Route path="/shop/sold" element={<SoldProduct />} />
            <Route path="/shop/standard-list" element={<StandardShopPage />} />
            <Route path="/shop/banner-list" element={<BannerShopPage />} />
            <Route path="/shop/category-icons" element={<IconShopPage />} />
            <Route path="/shop/filter-top" element={<FilterShopPage />} />
            <Route path="/shop/countdown-list" element={<BestSellers />} />
            <Route path="/shop/slider" element={<SliderList />} />
            <Route path="/shop/two-columns" element={<TwoColumnsShop />} />
            <Route path="/shop/three-columns" element={<ThreeColumnsShop />} />
            <Route path="/shop/four-columns" element={<FourColumnsShop />} />
            <Route
              path="/shop/four-columns-wide"
              element={<FourColumnsWide />}
            />
            <Route
              path="/shop/five-columns-wide"
              element={<FiveColumnsWide />}
            />
            <Route path="/shop/six-columns-wide" element={<SixColumnsWide />} />
            {/* All shop pages  */}

            {/* All Blog Pages  */}
            <Route path="/blog/right-sidebar" element={<BlogRightSidebar />} />
            <Route path="/blog/left-sidebar" element={<BlogLeftSidebar />} />
            <Route path="/blog/no-sidebar" element={<BlogNoSidebar />} />
            <Route path="/blog/blog-details" element={<BlogDetails />} />
            <Route path="/blog/post/standard" element={<BlogDetails />} />
            <Route
              path="/blog/post/gallery"
              element={<BlogDetailsWithSlider />}
            />
            <Route path="/blog/post/quote" element={<BlogQuotePost />} />
            <Route path="/blog/post/link" element={<BlogLinkPost />} />
            <Route path="/blog/post/video" element={<BlogVideoPost />} />

            <Route path="/weekly-discount" element={<WeeklyDiscount />} />

            <Route path="/best-sellers" element={<BestSellers />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog-details" element={<BlogDetails />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  );
};

export default AppRouter;
