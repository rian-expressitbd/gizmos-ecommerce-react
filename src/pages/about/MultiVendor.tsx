import { Image } from "@/components/ui/image";

const MultiVendor = () => {
  const logos = [
    { src: "/logo1.png", alt: "logo1" },
    { src: "/logo2.png", alt: "logo2" },
    { src: "/logo3.png", alt: "logo3" },
    { src: "/logo4.png", alt: "logo4" },
    { src: "/logo5.png", alt: "logo5" },
    { src: "/logo6.png", alt: "logo6" },
    { src: "/logo1.png", alt: "logo1" },
    { src: "/logo2.png", alt: "logo2" },
    { src: "/logo3.png", alt: "logo3" },
    { src: "/logo4.png", alt: "logo4" },
    { src: "/logo5.png", alt: "logo5" },
    { src: "/logo6.png", alt: "logo6" },
    { src: "/logo1.png", alt: "logo1" },
    { src: "/logo2.png", alt: "logo2" },
    { src: "/logo3.png", alt: "logo3" },
    { src: "/logo4.png", alt: "logo4" },
    { src: "/logo5.png", alt: "logo5" },
    { src: "/logo6.png", alt: "logo6" },
  ];
  return (
    <div className="mx-auto w-[90%]">
      <h1 className="text-2xl lg:text-5xl font-semibold py-5 mt-5 lg:mt-[50px]">Multi-Vendor</h1>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-6 p-6 mt-[30px] mb-[30px]">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex-1 flex justify-center items-center p-4 ${
              index !== logos.length - 1 &&
              index !== 5 &&
              index !== 11 &&
              index !== 17
                ? "xl:border-r xl:border-gray-300"
                : ""
            }`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="w-[73px] h-[70px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiVendor;
