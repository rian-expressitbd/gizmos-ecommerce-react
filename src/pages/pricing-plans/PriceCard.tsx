import { BsCreditCard } from "react-icons/bs";

export default function PriceCard() {
  return (
    <div className="max-w-sm  bg-white rounded-xl shadow border ">
      <div className="p-6">
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          Package
        </p>
        <h2 className="text-2xl font-bold mt-1">Basic</h2>
        <p className="text-3xl font-bold my-4">$99</p>
        <hr className="my-4" />
        <ul className="text-left space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-xl">•</span> Lorem ipsum dolor sit
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">•</span> Ius an brute eam
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">•</span> Vis libris apeirian movet
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">•</span> Est no falli ne est saepe
          </li>
        </ul>
      </div>

      <div className="relative group overflow-hidden w-full flex justify-between items-center gap-2 text-sm font-bold uppercase text-black border-t pt-4 p-6">
        {/* Always-rounded background layer with hover slide */}
        <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0 rounded-b-lg" />

        {/* Foreground content */}
        <p className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Purchase Now
        </p>
        <BsCreditCard className="relative z-10 transition-colors duration-300 group-hover:text-white" />
      </div>
    </div>
  );
}
