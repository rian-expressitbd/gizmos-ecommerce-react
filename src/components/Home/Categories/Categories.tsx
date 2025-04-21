import { Image } from "@/components/ui/image";
import { FaChevronRight } from "react-icons/fa";

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "Game Joysticks",
      imageSrc: "/joystick.png",
      altText: "joystick",
    },
    {
      id: 2,
      title: "Monitors",
      imageSrc: "/monitor.png",
      altText: "monitor",
    },
    {
      id: 3,
      title: "Watches",
      imageSrc: "/watch.png",
      altText: "watch",
    },
  ];

  return (
    <div className="mx-auto my-[50px] container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((category) => (
          <div key={category.id} className="relative">
            <div className="absolute left-0 p-6 h-[100%]">
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg fornt-semibold">{category.title}</h3>
                <div className="flex items-center justify-between w-[90px]">
                  <p className="font-bold text-sm">Shop Now</p>
                  <FaChevronRight />
                </div>
              </div>
            </div>
            <Image src={category.imageSrc} alt={category.altText} />
          </div>
        ))}
      </div>
    </div>
  );
}
