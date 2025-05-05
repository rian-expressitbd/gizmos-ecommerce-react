import { FaChevronRight, FaChevronDown, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

type SubmenusState = {
  pages: boolean;
  shop: boolean;
  shopTypes: boolean;
  shopLists: boolean;
  shopLayouts: boolean;
  shopPages: boolean;
  landing: boolean;
  blog: boolean;
  blogTypes: boolean;
};

export default function MobileNavbarTray({ onClose }: { onClose: () => void }) {
  const [openSubmenus, setOpenSubmenus] = useState<SubmenusState>({
    pages: false,
    shop: false,
    shopTypes: false,
    shopLists: false,
    shopLayouts: false,
    shopPages: false,
    landing: false,
    blog: false,
    blogTypes: false,
  });

  const toggleSubmenu = (menu: keyof SubmenusState) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="fixed top-[101px] left-0 right-0 bg-white dark:bg-black z-40 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      {/* Close button */}
      <div className="flex justify-end p-3">
        <button
          onClick={onClose}
          className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* Menu content with limited height and scrolling */}
      <div className="px-5 pb-5 max-h-[calc(100vh-10rem)] overflow-y-auto">
        <div className="space-y-4 text-gray-700 dark:text-white font-medium">
          {/* Home */}
          <div className="pb-4">
            <Link to="/" className=" font-bold block" onClick={onClose}>
              Home
            </Link>
          </div>

          {/* Pages */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleSubmenu("pages")}
            >
              <h3 className="font-bold">Pages</h3>
              {openSubmenus.pages ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {openSubmenus.pages && (
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/about" className="block" onClick={onClose}>
                  About Us
                </Link>
                <Link to="/faq" className="block" onClick={onClose}>
                  FAQ Page
                </Link>
                <Link to="/terms" className="block" onClick={onClose}>
                  Terms & Conditions
                </Link>
                <Link to="/contact" className="block" onClick={onClose}>
                  Contact Us
                </Link>
                <Link to="/get-in-touch" className="block" onClick={onClose}>
                  Get in Touch
                </Link>
                <Link to="/store-locator" className="block" onClick={onClose}>
                  Store Locator
                </Link>
                <Link to="/pricing" className="block" onClick={onClose}>
                  Pricing Plans
                </Link>
              </div>
            )}
          </div>

          {/* Shop */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleSubmenu("shop")}
            >
              <h3 className="font-bold">Shop</h3>
              {openSubmenus.shop ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {openSubmenus.shop && (
              <div className="pl-4 space-y-4 mt-2">
                {/* Product Types */}
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer py-1"
                    onClick={() => toggleSubmenu("shopTypes")}
                  >
                    <h4>Product Types</h4>
                    {/* <Route path="/shop/virtual" element={<SingleProductDetailsOne />} />
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
           
            <Route
              path="/shop/standard"
              element={<SingleProductDetailsOne />}
            />
            <Route path="/shop/accordion" element={<AccordionShop />} />
            <Route path="/shop/variable-a" element={<VariableProductA />} />
            <Route path="/shop/variable-b" element={<VariableProductB />} />
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
            */}
                    {openSubmenus.shopTypes ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>
                  {openSubmenus.shopTypes && (
                    <div className="pl-4 space-y-1 mt-1">
                      <Link
                        to="/shop/standard"
                        className="block"
                        onClick={onClose}
                      >
                        Standard Product
                      </Link>
                      <Link
                        to="/shop/accordion"
                        className="block"
                        onClick={onClose}
                      >
                        Accordion Product
                      </Link>
                      <Link
                        to="/shop/variable-a"
                        className="block"
                        onClick={onClose}
                      >
                        Variable Product A
                      </Link>
                      <Link
                        to="/shop/variable-b"
                        className="block"
                        onClick={onClose}
                      >
                        Variable Product B
                      </Link>
                      <Link
                        to="/shop/grouped"
                        className="block"
                        onClick={onClose}
                      >
                        Grouped Product
                      </Link>
                      <Link
                        to="/shop/external"
                        className="block"
                        onClick={onClose}
                      >
                        External Product
                      </Link>
                      <Link
                        to="/shop/countdown"
                        className="block"
                        onClick={onClose}
                      >
                        Countdown Product
                      </Link>
                      <Link
                        to="/shop/downloadable"
                        className="block"
                        onClick={onClose}
                      >
                        Downloadable Product
                      </Link>
                      <Link
                        to="/shop/virtual"
                        className="block"
                        onClick={onClose}
                      >
                        Virtual Product
                      </Link>
                      <Link to="/shop/new" className="block" onClick={onClose}>
                        New Product
                      </Link>
                      <Link to="/shop/sale" className="block" onClick={onClose}>
                        Sale Product
                      </Link>
                      <Link to="/shop/sold" className="block" onClick={onClose}>
                        Sold Product
                      </Link>
                    </div>
                  )}
                </div>

                {/* Shop Lists */}
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer py-1"
                    onClick={() => toggleSubmenu("shopLists")}
                  >
                    <h4>Shop Lists</h4>
                    {openSubmenus.shopLists ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>
                  {openSubmenus.shopLists && (
                    <div className="pl-4 space-y-1 mt-1">
                      <Link
                        to="/shop/standard-list"
                        className="block"
                        onClick={onClose}
                      >
                        Standard
                      </Link>
                      <Link
                        to="/shop/standard-banner"
                        className="block"
                        onClick={onClose}
                      >
                        Standard with Barrier
                      </Link>
                      <Link
                        to="/shop/category-icons"
                        className="block"
                        onClick={onClose}
                      >
                        Category Icons
                      </Link>
                      <Link
                        to="/shop/filter-top"
                        className="block"
                        onClick={onClose}
                      >
                        Filter On Top
                      </Link>
                      <Link
                        to="/shop/countdown-list"
                        className="block"
                        onClick={onClose}
                      >
                        Countdown List
                      </Link>
                      <Link
                        to="/shop/slider"
                        className="block"
                        onClick={onClose}
                      >
                        Slider
                      </Link>
                    </div>
                  )}
                </div>

                {/* Shop Layouts */}
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer py-1"
                    onClick={() => toggleSubmenu("shopLayouts")}
                  >
                    <h4>Shop Layouts</h4>
                    {openSubmenus.shopLayouts ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>
                  {openSubmenus.shopLayouts && (
                    <div className="pl-4 space-y-1 mt-1">
                      <Link
                        to="/shop/two-columns"
                        className="block"
                        onClick={onClose}
                      >
                        Two Columns
                      </Link>
                      <Link
                        to="/shop/three-columns"
                        className="block"
                        onClick={onClose}
                      >
                        Three Columns
                      </Link>
                      <Link
                        to="/shop/four-columns"
                        className="block"
                        onClick={onClose}
                      >
                        Four Columns
                      </Link>
                      <Link
                        to="/shop/four-columns-wide"
                        className="block"
                        onClick={onClose}
                      >
                        Four Columns Wide
                      </Link>
                      <Link
                        to="/shop/five-columns-wide"
                        className="block"
                        onClick={onClose}
                      >
                        Five Columns Wide
                      </Link>
                      <Link
                        to="/shop/six-columns-wide"
                        className="block"
                        onClick={onClose}
                      >
                        Six Columns Wide
                      </Link>
                    </div>
                  )}
                </div>

                {/* Shop Pages */}
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer py-1"
                    onClick={() => toggleSubmenu("shopPages")}
                  >
                    <h4>Shop Pages</h4>
                    {openSubmenus.shopPages ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>
                  {openSubmenus.shopPages && (
                    <div className="pl-4 space-y-1 mt-1">
                      <Link to="/account" className="block" onClick={onClose}>
                        My Account
                      </Link>
                      <Link to="/cart" className="block" onClick={onClose}>
                        Cart
                      </Link>
                      <Link to="/checkout" className="block" onClick={onClose}>
                        Checkout
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Blog */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleSubmenu("blog")}
            >
              <h3 className="font-bold">Blog</h3>
              {openSubmenus.blog ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {openSubmenus.blog && (
              <div className="pl-4 space-y-4 mt-2">
                {/* Checkout */}
                <div>
                  <div className="pl-4 space-y-1 mt-1">
                    <Link
                      to="/blog/right-sidebar"
                      className="block"
                      onClick={onClose}
                    >
                      Right Sidebar
                    </Link>
                    <Link
                      to="/blog/left-sidebar"
                      className="block"
                      onClick={onClose}
                    >
                      Left Sidebar
                    </Link>
                    <Link
                      to="/blog/no-sidebar"
                      className="block"
                      onClick={onClose}
                    >
                      No Sidebar
                    </Link>
                    <div className="pt-2">
                      <div
                        className="flex items-center justify-between"
                        onClick={() => toggleSubmenu("blogTypes")}
                      >
                        <h4 className="font-medium">Post Types</h4>
                        {openSubmenus.blogTypes ? (
                          <FaChevronDown />
                        ) : (
                          <FaChevronRight />
                        )}
                      </div>

                      {openSubmenus.blogTypes && (
                        <div className="pl-2 space-y-1 mt-1">
                          <Link
                            to="/blog/post/standard"
                            className="block"
                            onClick={onClose}
                          >
                            Standard Post
                          </Link>
                          <Link
                            to="/blog/post/gallery"
                            className="block"
                            onClick={onClose}
                          >
                            Gallery Post
                          </Link>
                          <Link
                            to="/blog/post/quote"
                            className="block"
                            onClick={onClose}
                          >
                            Quote Post
                          </Link>
                          <Link
                            to="/blog/post/link"
                            className="block"
                            onClick={onClose}
                          >
                            Link Post
                          </Link>
                          <Link
                            to="/blog/post/audio"
                            className="block"
                            onClick={onClose}
                          >
                            Audio Post
                          </Link>
                          <Link
                            to="/blog/post/video"
                            className="block"
                            onClick={onClose}
                          >
                            Video Post
                          </Link>
                          <Link
                            to="/blog/post/no-sidebar"
                            className="block"
                            onClick={onClose}
                          >
                            No Sidebar Post
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
