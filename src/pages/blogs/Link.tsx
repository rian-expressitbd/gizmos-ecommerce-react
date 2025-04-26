import { BsLink45Deg } from "react-icons/bs";

export default function Link() {
  return (
    <div className="bg-[#F3F6FB] rounded-md flex items-center gap-6 p-[3.5rem]">
      <BsLink45Deg size={44} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
          Dolor, iste. Ut, quis.
        </h1>
      </div>
    </div>
  );
}
