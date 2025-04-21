import { Image } from "@/components/ui/image";

export default function MoreCategories() {
  const categories = [
    {
      id: 1,
      title: "E-77 Camera",
      subtitle: 'MFHNJ3/H 13"',
      saleLabel: "WEEKEND SALE",
      price: "20%",
      imageSrc: "/camera.png",
      altText: "camera",
    },
    {
      id: 2,
      title: "HP Ultimate",
      subtitle: "With Bluetooth 5.1",
      saleLabel: "WEEKEND SALE",
      price: "$349",
      imageSrc: "/headphone1.png",
      altText: "headphone1",
    },
  ];

  return (
    <div className="mx-auto h-[100%] w-[90%] sm:w-[85%] lg:w-[90%] mb-12">
      <div className="flex flex-col 2xl:flex-row gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-lg  flex-1 p-3"
          >
            {/* Text Content */}
            <div className="absolute left-4 sm:left-6 md:left-8  sm:top-6 md:top-8 z-10 p-[10px]">
              <div className="space-y-2 mb-10">
                <h2 className="text-xxl sm:text-3xl md:text-4xl font-semibold">
                  {category.title}
                </h2>
                <h3 className="text-sm sm:text-black ">{category.subtitle}</h3>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm ">{category.saleLabel}</h3>
                <h2 className="text-xxl sm:text-3xl md:text-4xl font-bold">
                  {category.price}
                </h2>
              </div>
            </div>

            {/* Background Image */}
            <Image
              src={category.imageSrc}
              alt={category.altText}
              rounded="lg"
              className="w-full h-[150px] sm:h-[300px] md:h-[350px]  "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
