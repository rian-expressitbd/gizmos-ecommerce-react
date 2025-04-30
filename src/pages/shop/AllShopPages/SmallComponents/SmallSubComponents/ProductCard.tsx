interface ProductProps {
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ name, price, imageUrl }: ProductProps) {
  return (
    <div className="p-3 md:p-4 border rounded-lg flex flex-col">
      <div className="flex justify-center mb-4 md:mb-6 h-28 md:h-40">
        <img src={imageUrl} alt={name} className="max-h-full object-contain" />
      </div>
      <h3 className="font-bold text-xs md:text-sm mt-2 line-clamp-2">{name}</h3>
      <p className="mt-2  md:text-lg font-semibold">
        ${price.toLocaleString()}
      </p>
    </div>
  );
}
