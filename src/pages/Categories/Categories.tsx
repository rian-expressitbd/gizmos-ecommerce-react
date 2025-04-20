import { Image } from "@/components/ui/image";
import { FaChevronRight } from "react-icons/fa";

export default function Categories() {
  return (
    <div className="mt-[50px] mb-[50px]">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="relative">
            <div className="absolute left-0 p-6 h-[100%] ">
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg fornt-semibold">Game Joysticks</h3>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-sm">Shop Now</p>
                  <FaChevronRight />
                </div>
              </div>
            </div>
            <Image src="/joystick.png" alt="joystick" />
          </div>
          <div className="relative">
            <div className="absolute left-0 p-6 h-[100%]">
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg fornt-semibold">Game Joysticks</h3>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-sm">Shop Now</p>
                  <FaChevronRight />
                </div>
              </div>
            </div>
            <Image src="/monitor.png" alt="monitor" />
          </div>

          <div className="relative">
            <div className="absolute left-0 p-6 h-[100%]">
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg fornt-semibold">Game Joysticks</h3>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-sm">Shop Now</p>
                  <FaChevronRight />
                </div>
              </div>
            </div>
            <Image src="/watch.png" alt="watch" />
          </div>
        </div>
      </div>
    </div>
  );
}
