import { FaPlay } from "react-icons/fa";

export default function Video() {
  return (
    <div className="relative w-full">
      <img
        className="object-cover w-full"
        src="/video.jpg"
        alt="Video Thumbnail"
      />

      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         bg-blue-600 hover:bg-red-600 text-white p-4 rounded-full transition-colors duration-300"
      >
        <FaPlay size={20} />
      </button>
    </div>
  );
}
