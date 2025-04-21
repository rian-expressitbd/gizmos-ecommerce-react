import {
  FaDribbble,
  FaInstagram,
  FaRegEnvelope,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function FooterUpper() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-14">
        <h2 className="text-white text-3xl font-bold">Sign up to Newsletter</h2>
        <div className="relative input-div w-[300px] lg:w-[400px]">
          <input
            className="bg-transparent p-3 border-gray-400 border-[0.5px] w-full rounded-[5px] mt-3 lg:mt-0 mb-3 lg:mb-0"
            placeholder="Your Email Address:"
            type="text"
            name=""
            id=""
          />
          <FaRegEnvelope size={24} className="right-[9px] top-[24px] lg:top-[12px] absolute text-white" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl text-white font-bold">Follow Us On:</h3>
          <div className="flex text-gray-300 items-center gap-4 mt-4">
            <FaSpotify />
            <FaYoutube />
            <FaTwitter />
            <FaDribbble />
            <FaInstagram />
            <FaSquareFacebook />
          </div>
        </div>
      </div>
    </div>
  );
}
