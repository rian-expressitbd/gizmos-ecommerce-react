import { Image } from "@/components/ui/image";

export default function MoreCategories() {
  const categories = [
    {
      id: 1,
      title: "E-77 Camera",
      subtitle: "MFHNJ3/H 13\"",
      saleLabel: "WEEKEND SALE",
      price: "20%",
      imageSrc: "/camera.png",
      altText: "camera"
    },
    {
      id: 2,
      title: "HP Ultimate",
      subtitle: "With Bluetooth 5.1",
      saleLabel: "WEEKEND SALE",
      price: "$349",
      imageSrc: "/headphone1.png",
      altText: "headphone1"
    }
  ];

  return (
    <div className="mx-auto w-[80%] mb-[50px]">
      <div className="flex flex-col lg:flex-row gap-3">
        {categories.map((category) => (
          <div key={category.id} className="relative">
            <div className="absolute left-0 p-8 h-full">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h2 className="text-4xl font-semibold">{category.title}</h2>
                  <h3 className="text-md text-gray-500">{category.subtitle}</h3>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs text-gray-500">{category.saleLabel}</h3>
                  <h2 className="text-4xl font-semibold">{category.price}</h2>
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