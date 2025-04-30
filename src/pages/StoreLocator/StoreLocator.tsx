import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";
import Map from "../contact/Map";
import { FaHeadphones, FaTv } from "react-icons/fa";
import { TbDeviceWatch } from "react-icons/tb";
import { BiSolidJoystick } from "react-icons/bi";

export default function StoreLocator() {
  return (
    <CommonLayout>
      <div className="mt-3">
        <Breadcrumb />
        <div className="mt-[60px]">
          <h1 className="text-5xl">Store Locator</h1>
          <div className="mt-3">
            <Map />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px] mb-[50px]">
            <div>
              <h2 className="text-2xl font font-semibold mb-5">
                Brixton Store
              </h2>
              <div className="flex gap-2 items-start">
                <FaTv size={24} />
                <p className="text-sm text-[#677AB0]">+000 123 456 789</p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <BiSolidJoystick size={24} />
                <p className="text-sm text-[#677AB0]">gizmos@example.com</p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <TbDeviceWatch size={24} />
                <p className="text-sm text-[#677AB0]">
                  18 Manhattan Avenue, New York, USA
                </p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <FaHeadphones size={24} />
                <p className="text-sm text-[#677AB0]">
                  Monday to Friday: 9am-9pm <br /> Saturday to Sunday: 9am-10pm
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font font-semibold mb-5 mt-8 md:mt-0">
                Larkhal Store
              </h2>
              <div className="flex gap-2 items-start">
                <FaTv size={24} />
                <p className="text-sm text-[#677AB0]">+000 123 456 789</p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <BiSolidJoystick size={24} />
                <p className="text-sm text-[#677AB0]">gizmos@example.com</p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <TbDeviceWatch size={24} />
                <p className="text-sm text-[#677AB0]">
                  18 Manhattan Avenue, New York, USA
                </p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <FaHeadphones size={24} />
                <p className="text-sm text-[#677AB0]">
                  Monday to Friday: 9am-9pm <br /> Saturday to Sunday: 9am-10pm
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font font-semibold mb-5 mt-8 md:mt-0">London Store</h2>
              <div className="flex gap-2 items-start">
                <FaTv size={24} />
                <p className="text-sm text-[#677AB0]">+000 123 456 789</p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <BiSolidJoystick size={24} />
                <p className="text-sm text-[#677AB0]">gizmos@example.com</p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <TbDeviceWatch size={24} />
                <p className="text-sm text-[#677AB0]">
                  18 Manhattan Avenue, New York, USA
                </p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <FaHeadphones size={24} />
                <p className="text-sm text-[#677AB0]">
                  Monday to Friday: 9am-9pm <br /> Saturday to Sunday: 9am-10pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}
