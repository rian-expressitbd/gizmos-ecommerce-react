import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import NavbarLower from "@/components/Home/Navbar/NavbarLower";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BiSolidJoystick } from "react-icons/bi";
import { FaHeadphones, FaTv } from "react-icons/fa";
import { TbDeviceWatch } from "react-icons/tb";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <Navbar />
      <NavbarLower />
      <div className="w-[90%] mx-auto ">
        <Breadcrumb className="mt-5" />
        <h1 className="mt-[50px] text-4xl font-semibold mb-[30px]">
          Terms & Conditions
        </h1>
        <hr className="border-gray-300" />
        <div className="flex flex-col lg:flex-row items-start justify-between mt-[40px] mb-[40px]">
          <div className="w-1/3">
            <h3 className="text-2xl font-semibold">
              Purchases Terms and Conditions
            </h3>
          </div>

          <div className="w-2/3">
            <p className="text-sm text-[#677AB0] ">
              Nulla porta nulla nec orci vulputate, id rutrum sapien varius.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla facilisi. Integer vel felis
              cursus, varius arcu non, sollicitudin tortor. Vivamus piorttitor
              libero id metus scele risque pellentesque sit amet in est. Mauris
              accumsan porta ante, vel tincidunt quam auctor vitae. Maecenas
              suscipit risus neque, at dapibus dolor sollicitudin vitae.
              Maecenas a eros eget lorem iaculis ultricies.
            </p>
            <p className="text-sm text-[#677AB0] mt-5">
              Suspendisse sodales magna ut gravida feugiat. Aenean gravida
              pellentesque lacinia. Suspendisse ullamcorper, nisl et iaculis
              pharet ra, lacus sem gravida urna, eu pharetra enim felis
              condimentum enim. Cras eget quam mollis, ultrices dolor tincidunt,
              finibus mauris. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. In rhoncus metus ex,
              quis pretium neque tincidunt ut. Donec vestibulum congue sapien eu
              lacinia. Fusce vitae convallis tortor, sed ultricies eros. Morbi
              quis varius nibh, nec semper nibh.
            </p>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex flex-col lg:flex-row items-start justify-between mt-[40px] mb-[40px]">
          <div className="w-1/3">
            <h3 className="text-2xl font-semibold">Website Terms of Use</h3>
          </div>

          <div className="w-2/3 flex flex-col">
            <p className="text-sm text-[#677AB0]">
              Nulla porta nulla nec orci vulputate, id rutrum sapien varius.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla facilisi. Integer vel felis
              cursus, varius arcu non, sollicitudin tortor. Vivamus piorttitor
              libero id metus scele risque pellentesque sit amet in est. Mauris
              accumsan porta ante, vel tincidunt quam auctor vitae. Maecenas
              suscipit risus neque, at dapibus dolor sollicitudin vitae.
              Maecenas a eros eget lorem iaculis ultricies.
            </p>
            <div className="mt-5">
              <div className="flex gap-2 items-start">
                <FaTv size={24} />
                <p className="text-sm text-[#677AB0]">
                  Pellentesque porta egestas eros vel sollicitudin. Donec ut
                  nulla pulvinar, lobortis purus eu, interdum urna. Donec
                  dapibus ne queue ipsum efficitu.
                </p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <BiSolidJoystick size={24} />
                <p className="text-sm text-[#677AB0]">
                  Pellentesque porta egestas eros vel sollicitudin. Donec ut
                  nulla pulvinar, lobortis purus eu, interdum urna. Donec
                  dapibus ne queue ipsum efficitu.
                </p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <TbDeviceWatch size={24} />
                <p className="text-sm text-[#677AB0]">
                  Pellentesque porta egestas eros vel sollicitudin. Donec ut
                  nulla pulvinar, lobortis purus eu, interdum urna. Donec
                  dapibus ne queue ipsum efficitu.
                </p>
              </div>
              <div className="flex gap-2 items-start mt-2">
                <FaHeadphones size={24} />
                <p className="text-sm text-[#677AB0]">
                  Pellentesque porta egestas eros vel sollicitudin. Donec ut
                  nulla pulvinar, lobortis purus eu, interdum urna. Donec
                  dapibus ne queue ipsum efficitu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex flex-col lg:flex-row items-start justify-between mt-[40px] mb-[40px]">
          <div className="w-1/3">
            <h3 className="text-2xl font-semibold">Intellectual Property</h3>
          </div>

          <div className="w-2/3">
            <ul className="list-disc pl-5 text-sm text-[#677AB0]">
              <li>
                Nulla porta nulla nec orci vulputate, id rutrum sapien varius.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra,
              </li>
              <li>
                per inceptos himenaeos. Nulla facilisi. Integer vel felis
                cursus, varius arcu non, sollicitudin tortor. Vivamus porttitor
                libero id metus scelerisque.
              </li>
              <li>
                Risque pellentesque sit amet in est. Mauris accumsan porta ante,
                vel tincidunt quam auctor vitae. Maecenas suscipit risus neque,
              </li>
              <li>
                At dapibus dolor sollicitudin vitae. Maecenas a eros eget lorem
                iaculis ultricies.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
