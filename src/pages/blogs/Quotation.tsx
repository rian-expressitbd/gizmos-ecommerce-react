import { FaQuoteLeft } from "react-icons/fa";

export default function Quotation() {
  return (
    <div className="border-[0.5px] border-gray-300 rounded-md flex items-center gap-6 p-[3.5rem]">
      <FaQuoteLeft size={44} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Dolor, iste.
          Ut, quis.
        </h1>
        <p className="text-sm font-semibold mt-2">Laura Dern</p>
      </div>
    </div>
  );
}
