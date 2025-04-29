import React, { useState } from "react";
import { ChevronRight, Menu } from "lucide-react";

interface TabProps {
  id: string;
  label: string;
  isActive: boolean;
  reviewCount?: number;
  onClick: (id: string) => void;
}

interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartSummaryProps {
  totalPrice: number;
  itemCount: number;
}

interface SpecificationItemProps {
  label: string;
  value: string;
}

interface ReviewProps {
  author: string;
  rating: number;
  date: string;
  comment: string;
}

// Tab Component
const Tab: React.FC<TabProps> = ({
  id,
  label,
  isActive,
  reviewCount,
  onClick,
}) => {
  return (
    <button
      className={`px-3 py-2 md:px-6 md:py-4 font-medium text-xs md:text-sm transition-colors ${
        isActive
          ? id === "accessories"
            ? "bg-blue-600 text-white"
            : "border-b-2 border-black"
          : "text-gray-600 hover:text-gray-800"
      }`}
      onClick={() => onClick(id)}
    >
      {label}
      {reviewCount && ` (${reviewCount})`}
    </button>
  );
};

// Mobile Dropdown Tab Selector
const MobileTabSelector: React.FC<{ 
  activeTab: string;
  setActiveTab: (id: string) => void;
  reviewCount: number;
}> = ({ activeTab, setActiveTab, reviewCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const tabs = [
    { id: "accessories", label: "Accessories" },
    { id: "description", label: "Description" },
    { id: "specification", label: "Specification" },
    { id: "reviews", label: `Reviews (${reviewCount})` }
  ];
  
  const getActiveTabLabel = () => {
    const tab = tabs.find(tab => tab.id === activeTab);
    return tab ? tab.label : "Select Tab";
  };
  
  return (
    <div className="relative w-full mb-4 sm:hidden">
      <button 
        className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{getActiveTabLabel()}</span>
        <Menu size={20} />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`block w-full text-left p-3 hover:bg-gray-100 ${
                activeTab === tab.id ? "font-bold bg-gray-50" : ""
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                setIsOpen(false);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Product Card Component
const ProductCard: React.FC<ProductProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="p-3 md:p-4 border rounded-lg flex flex-col">
      <div className="flex justify-center mb-4 md:mb-6 h-28 md:h-40">
        <img src={imageUrl} alt={name} className="max-h-full object-contain" />
      </div>
      <h3 className="font-bold text-xs md:text-sm mt-2 line-clamp-2">{name}</h3>
      <p className="mt-2  md:text-lg font-semibold">${price.toLocaleString()}</p>
    </div>
  );
};

// Cart Summary Component
const CartSummary: React.FC<CartSummaryProps> = ({ totalPrice, itemCount }) => {
  return (
    <div className="bg-gray-50 p-4 md:p-6 rounded-lg h-full">
      <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Your Current Cart</h2>
      <div className="mb-1">
        <span className="text-xl md:text-2xl font-bold">{totalPrice}$</span>
      </div>
      <p className="text-gray-600 mb-4 md:mb-6 text-sm ">for {itemCount} item(s)</p>
      <button className="bg-blue-600 text-white w-full py-2 md:py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors text-sm md:text-base">
        ADD TO CART
        <ChevronRight size={16} className="md:w-5 md:h-5" />
      </button>
    </div>
  );
};

// Description content component
const DescriptionContent: React.FC = () => {
  return (
    <div className="prose max-w-none text-sm md:text-base">
      <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Product Description</h2>
      <p className="mb-3 md:mb-4">
        Our premium product line features cutting-edge technology designed to enhance your work and entertainment experience. Each item is crafted with precision and attention to detail, ensuring superior performance and durability.
      </p>
      <p className="mb-3 md:mb-4">
        Whether you're a professional seeking reliable tools or an enthusiast looking for the latest innovations, our collection offers solutions that meet diverse needs and preferences.
      </p>
      <h3 className="text-base md:text-lg font-bold mb-2">Key Features</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>High-quality materials for extended durability</li>
        <li>Intuitive design for ease of use</li>
        <li>Compatible with multiple devices and systems</li>
        <li>Energy-efficient technology</li>
        <li>Modern aesthetic that complements any environment</li>
      </ul>
    </div>
  );
};

// Specification content component
const SpecificationItem: React.FC<SpecificationItemProps> = ({ label, value }) => {
  return (
    <div className="flex py-2 border-b text-sm md:text-base">
      <div className="w-2/5 md:w-1/3 font-medium pr-2">{label}</div>
      <div className="w-3/5 md:w-2/3">{value}</div>
    </div>
  );
};

const SpecificationContent: React.FC = () => {
  const specifications = [
    { label: "Dimensions", value: "12.3 x 8.5 x 2.4 inches" },
    { label: "Weight", value: "1.5 kg" },
    { label: "Material", value: "Aircraft-grade aluminum, tempered glass" },
    { label: "Color Options", value: "Black, Silver, Space Gray" },
    { label: "Connectivity", value: "USB-C, Bluetooth 5.2, Wi-Fi 6" },
    { label: "Power", value: "100-240V, 50-60Hz" },
    { label: "Warranty", value: "2 years limited warranty" },
    { label: "Package Contents", value: "Main unit, power adapter, user manual, quick start guide" },
  ];

  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Technical Specifications</h2>
      <div className="border-t">
        {specifications.map((spec, index) => (
          <SpecificationItem key={index} label={spec.label} value={spec.value} />
        ))}
      </div>
    </div>
  );
};

// Reviews content component
const ReviewCard: React.FC<ReviewProps> = ({ author, rating, date, comment }) => {
  return (
    <div className="border-b pb-3 md:pb-4 mb-3 md:mb-4 text-sm md:text-base">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
        <h3 className="font-medium">{author}</h3>
        <span className="text-gray-500 text-xs md:text-sm mt-1 sm:mt-0">{date}</span>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-base md:text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

const ReviewsContent: React.FC = () => {
  const reviews = [
    {
      author: "John D.",
      rating: 5,
      date: "April 15, 2025",
      comment: "Excellent quality and performance. This product exceeded my expectations in every way. The design is sleek and the functionality is top-notch.",
    },
    {
      author: "Sarah M.",
      rating: 4,
      date: "April 3, 2025",
      comment: "Very good product overall. The only minor issue I had was with the setup process, but once I got it working, it's been great.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 md:mb-6 gap-3 sm:gap-0">
        <h2 className="text-lg md:text-xl font-bold">Customer Reviews (2)</h2>
        <button className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-base w-full sm:w-auto">
          Write a Review
        </button>
      </div>
      
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

// Main Component
const ProductTabSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState("accessories");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Sample product data
  const products = [
    {
      id: "1",
      name: "Fractal Design Tempered Glass S7 Computer Case",
      price: 2790,
      imageUrl: "/featured1.jpg",
    },
    {
      id: "2",
      name: "Multiuse USB Cable Phone/Tablet/Laptop",
      price: 42,
      imageUrl: "/featured2.jpg",
    },
    {
      id: "3",
      name: "Profeus Tablet Q Series QW-55814 Professional",
      price: 550,
      imageUrl: "/featured3.jpg",
    },
  ];

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "accessories":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        );
      case "description":
        return <DescriptionContent />;
      case "specification":
        return <SpecificationContent />;
      case "reviews":
        return <ReviewsContent />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-3 md:px-4 py-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="w-full lg:w-3/4">
          {/* Mobile Tab Selector */}
          <MobileTabSelector 
            activeTab={activeTab} 
            setActiveTab={handleTabClick} 
            reviewCount={2} 
          />
          
          {/* Desktop Tabs */}
          <div className="hidden sm:flex  border-b mb-4 md:mb-6 overflow-x-auto">
            <Tab
              id="accessories"
              label="Accessories"
              isActive={activeTab === "accessories"}
              onClick={handleTabClick}
            />
            <Tab
              id="description"
              label="Description"
              isActive={activeTab === "description"}
              onClick={handleTabClick}
            />
            <Tab
              id="specification"
              label="Specification"
              isActive={activeTab === "specification"}
              onClick={handleTabClick}
            />
            <Tab
              id="reviews"
              label="Reviews"
              reviewCount={2}
              isActive={activeTab === "reviews"}
              onClick={handleTabClick}
            />
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px] md:min-h-[400px]">
            {renderTabContent()}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-1/4 mt-6  lg:mt-0">
          <CartSummary totalPrice={3382} itemCount={3} />
        </div>
      </div>
    </div>
  );
};

export default ProductTabSystem;