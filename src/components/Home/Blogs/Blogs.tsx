import Slider from "react-slick";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Image } from "@/components/ui/image";
import type { FC } from "react";

interface ArrowProps {
  onClick?: () => void;
}

// Custom arrow components
const NextArrow: FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-800" />
  </div>
);

const PrevArrow: FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-800" />
  </div>
);

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      category: "DIGITAL",
      date: "SEPTEMBER 30, 2022",
      title: "Check Out Our New App!",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla case elitr.",
      image: "/blog-app.jpg",
    },
    {
      id: 2,
      category: "DIGITAL",
      date: "SEPTEMBER 30, 2022",
      title: "Experience a New Type of Gaming",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla case elitr.",
      image: "/blog-gaming.jpg",
    },
    {
      id: 3,
      category: "DIGITAL",
      date: "SEPTEMBER 30, 2022",
      title: "The Best Headphones For Music",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla case elitr.",
      image: "/blog-headphones.jpg",
    },
    {
      id: 4,
      category: "TECH",
      date: "OCTOBER 15, 2022",
      title: "Latest Smartphone Trends",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla case elitr.",
      image: "/blog-smartphone.jpg",
    },
    {
      id: 5,
      category: "GADGETS",
      date: "NOVEMBER 5, 2022",
      title: "Top Wearable Devices 2022",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla case elitr.",
      image: "/blog-wearables.jpg",
    },
    {
      id: 6,
      category: "AUDIO",
      date: "DECEMBER 10, 2022",
      title: "Wireless Earbuds Comparison",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla case elitr.",
      image: "/blog-earbuds.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-12">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Latest Blog Posts
        </h2>

        <div className="relative">
          <Slider {...settings}>
            {blogPosts.map((post) => (
              <div key={post.id} className="px-4">
                <div className="bg-[#F3F6FB] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Category and Date */}
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="font-medium">{post.category}</span>
                    <span className="mx-2">|</span>
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>

                  {/* Button */}
                  <button className="flex items-center text-blue-600 font-semibold mt-auto hover:underline">
                    READ MORE <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
