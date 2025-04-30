import { BsCreditCard } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function OurVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[70px] mb-[70px]">
      <div className="justify-center max-w-[300px]  text-center lg:text-left">
        <FiTruck size={36} className="text-center lg:text-left mx-auto lg:ml-0" />
        <div className="mt-5 texl-center lg:text-left">
          <h2 className="text-lg font-semibold">Our Vision</h2>
          <p className="text-sm text-[#677AB0] mt-2">
            v Our Vision Integer feugiat, nulla ut cursus sodales, turpis turpis
            efficitur tortor, vel dictum sapien augue eget mi. Duis maximus
            purus nec magna hendrerit elementum.
          </p>
        </div>
      </div>
      <div className="justify-center max-w-[300px]  text-center lg:text-left">
        <RiCustomerService2Fill size={36} className="text-center lg:text-left mx-auto lg:ml-0"/>
        <div className="mt-5  texl-center lg:text-left">
          <h2 className="text-lg font-semibold">What We Do</h2>
          <p className="text-sm text-[#677AB0] mt-2">
            v Our Vision Integer feugiat, nulla ut cursus sodales, turpis turpis
            efficitur tortor, vel dictum sapien augue eget mi. Duis maximus
            purus nec magna hendrerit elementum.
          </p>
        </div>
      </div>
      <div className="justify-center max-w-[300px]  text-center lg:text-left">
        <BsCreditCard size={36} className="text-center lg:text-left mx-auto lg:ml-0 " />
        <div className="mt-5  texl-center lg:text-left">
          <h2 className="text-lg font-semibold">Company History</h2>
          <p className="text-sm text-[#677AB0] mt-2">
            v Our Vision Integer feugiat, nulla ut cursus sodales, turpis turpis
            efficitur tortor, vel dictum sapien augue eget mi. Duis maximus
            purus nec magna hendrerit elementum.
          </p>
        </div>
      </div>
    </div>
  );
}
