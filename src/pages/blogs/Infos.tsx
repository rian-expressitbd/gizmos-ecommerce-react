import { FaRegCreditCard } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImTruck } from "react-icons/im";
import { IoPricetags } from "react-icons/io5";

export default function Infos() {
  return (
    <div className="flex flex-col  p-3 w-[100%]">
      <div className="flex items-center gap-6 p-6 border-b border-[0.5px] w-[80%]">
        <FaRegCreditCard size={34} />
        <div className="flex flex-col">
          <p className="text-sm text-gray-300">Payment</p>
          <h3 className="text-2xl font-semibold ">Secure System</h3>
        </div>
      </div>
      <div className="flex items-center gap-6 p-6 border-b border-[0.5px] w-[80%]">
        <RiCustomerService2Fill size={34} />
        <div className="flex flex-col">
          <p className="text-sm text-gray-300">Payment</p>
          <h3 className="text-2xl font-semibold ">Secure System</h3>
        </div>
      </div>
      <div className="flex items-center gap-6 p-6 border-b border-[0.5px] w-[80%]">
        <ImTruck size={34} />
        <div className="flex flex-col">
          <p className="text-sm text-gray-300">Payment</p>
          <h3 className="text-2xl font-semibold ">Secure System</h3>
        </div>
      </div>
      <div className="flex items-center gap-6 p-6 border-b border-[0.5px] w-[80%]">
        <IoPricetags size={34} />
        <div className="flex flex-col">
          <p className="text-sm text-gray-300">Payment</p>
          <h3 className="text-2xl font-semibold ">Secure System</h3>
        </div>
      </div>
    </div>
  );
}
