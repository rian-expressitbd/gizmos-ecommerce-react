import { FaHeadphones, FaTv } from "react-icons/fa";
import CommonContactForm from "../common/CommonContactForm";
import { TbDeviceWatch } from "react-icons/tb";
import { BiSolidJoystick } from "react-icons/bi";

export default function ContactForm() {
  return (
    <div className="mt-[50px] mb-[50px] flex flex-col lg:flex-row items-start gap-4">
      <div className="w-full lg:w-1/3">
        <h1 className="text-4xl font-semibold">Get in touch with us</h1>
        <div className="mt-3">
          <p className="text-sm text-[#677AB0]">
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am aliqu
            am, velit rutrum dictum lobortis, turpis justo auc tor quam, a
            auctor. Vix ut ignota deserunt partien ad, pros tale falli periculis
            ad, idque deseruisse constituam.
          </p>
          <p className="text-sm text-[#677AB0]">
            Nam nibh purus, fermentum sit amet lorem eget, pellentesque.
            Vestibulum vestibulum urna odio, non pulvinar mauris cursus.
          </p>
        </div>
        <div className="mt-5">
          <div className="mt-5">
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
      <div className="w-full lg:w-2/3">
        <CommonContactForm />
      </div>
    </div>
  );
}
