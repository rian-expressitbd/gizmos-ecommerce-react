import { FC } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@/components/ui/image";

type ImageSliderProp = {
  setImage: React.Dispatch<React.SetStateAction<string>>;
};

export default function ImagesSlider({ setImage }: ImageSliderProp) {
  interface ArrowProps {
    onClick?: () => void;
  }

  // Custom arrow components
  const NextArrow: FC<ArrowProps> = ({ onClick }) => (
    <div
      className="absolute right-0 top-[53px] transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-800" />
    </div>
  );

  const PrevArrow: FC<ArrowProps> = ({ onClick }) => (
    <div
      className="absolute left-[-28px] top-[53px] transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100"
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-800" />
    </div>
  );
  const images = [
    {
      image: "mini-slider-img1.jpg",
    },
    {
      image: "mini-slider-img2.jpg",
    },
    {
      image: "mini-slider-img3.jpg",
    },
    {
      image: "mini-slider-img4.jpg",
    },
    {
      image: "mini-slider-img5.jpg",
    },
  ];
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="w-full lg:w-[500px]  h-[137px]">
        {images.map((image) => (
          <Image
            className="w-[103px] h-full border-gray-200 border-[0.5px] rounded-[5px]"
            src={`/${image?.image}`}
            onClick={() => setImage(image?.image)}
            alt=""
           
          />
        ))}
      </Slider>
    </div>
  );
}
