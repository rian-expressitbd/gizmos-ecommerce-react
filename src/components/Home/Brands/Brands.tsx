import { Image } from "@/components/ui/image";

const logos = [
  { src: "/logo1.png", alt: "logo1" },
  { src: "/logo2.png", alt: "logo2" },
  { src: "/logo3.png", alt: "logo3" },
  { src: "/logo4.png", alt: "logo4" },
  { src: "/logo5.png", alt: "logo5" },
  { src: "/logo6.png", alt: "logo6" },
];

export default function Brands() {
  return (
    <div className="bg-[#F3F6FB] w-[90%] mx-auto p-6 mt-[50px] rounded-[10px] mb-[50px]">
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 rounded-[10px] overflow-hidden">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex-1 flex justify-center items-center p-4 ${
              index !== logos.length - 1 ? "xl:border-r xl:border-gray-300" : ""
            }`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="w-[73px] h-[80px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
