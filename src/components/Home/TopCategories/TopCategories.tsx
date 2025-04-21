import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { FaChevronRight } from "react-icons/fa";

export default function TopCategories() {
  const categories = [
    {
      id: 1,
      name: "Smart Phone and Tablets",
      image: "/phone.jpg",
      alt: "smartphones and tablets",
      items: [
        "Accessories",
        "Cases and Protection",
        "Drawing Tablets",
        "Equipment",
        "Smartphones",
        "Tablets",
      ],
    },
    {
      id: 2,
      name: "Headphones and Audio",
      image: "/headphone.png",
      alt: "headphones",
      items: [
        "Wireless Headphones",
        "Wired Headphones",
        "Earbuds",
        "Speakers",
        "Audio Interfaces",
        "Microphones",
      ],
    },
    {
      id: 3,
      name: "Gaming Joysticks",
      image: "/joystick.jpg",
      alt: "gaming joysticks",
      items: [
        "PC Controllers",
        "Console Controllers",
        "Racing Wheels",
        "Flight Sticks",
        "Arcade Sticks",
        "Mobile Controllers",
      ],
    },
    {
      id: 4,
      name: "Smart TVs and Displays",
      image: "/featured2.jpg",
      alt: "smart tvs",
      items: [
        "4K TVs",
        "8K TVs",
        "OLED Displays",
        "Smart Displays",
        "Projectors",
        "TV Accessories",
      ],
    },
  ];

  return (
    <div className="mx-auto w-[90%]">
      <h2 className="text-2xl font-bold">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-14">
        {categories.map((category) => (
          <div key={category.id} className="flex items-start gap-5">
            <div className="border-[0.5px] p-2 rounded-[5px] w-[150px] h-[150px]">
              <Image src={category.image} alt={category.alt} />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-md font-semibold">{category.name}</h3>
                <div className="space-y-3 mt-5">
                  {category.items.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
              <Button
                className="flex justify-between mt-5 items-center px-3 py-1 text-black bg-transparent"
                title={`view_all_${category.id}`}
              >
                View All
                <FaChevronRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
