import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";

export default function CommonContactForm() {
  return (
    <div>
      <form action="">
        <textarea
          rows={5}
          placeholder="messages"
          className="mt-5 border-gray-300 border-[0.5px] rounded-[10px] w-full p-4"
          name=""
          id=""
        ></textarea>
        <input
          className="p-4 w-full rounded-[10px] border-gray-300 border-[0.5px] mt-5"
          placeholder="Your Name*"
          type="text"
          name=""
          id=""
        />
        <input
          className="p-4 w-full rounded-[10px] border-gray-300 border-[0.5px] mt-5"
          placeholder="Your Email*"
          type="text"
          name=""
          id=""
        />
        <Button
          className="text-sm text-white bg-blue-600 p-3 px-5 rounded-[10px] flex gap-3 mt-5"
          title="submitBtn"
        >
          <p>Submit</p>
          <FaChevronRight size={20} />
        </Button>
      </form>
    </div>
  );
}
