import { Breadcrumb } from "@/components/ui/breadcrumb";

import OurVision from "../contact/OurVision";
import Map from "../contact/Map";
import CommonContactForm from "../common/CommonContactForm";

export default function GetInTouch() {
  return (
    <>
      <div className="mt-5 mx-auto w-[90%]">
        <Breadcrumb />
        <OurVision />
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-[40px] mb-[40px]">
          <div className="w-full lg:w-1/2">
            <Map />
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-semibold">Get in touch with us</h1>
            <div className="mt-3">
              <p className="text-sm text-[#677AB0]">
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am
                aliqu am, velit rutrum dictum lobortis, turpis justo auc tor
                quam, a auctor vix ut.
              </p>
            </div>
            <div className="mt-[50px]">
              <CommonContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
