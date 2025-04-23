import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";
import OurVision from "../contact/OurVision";
import Map from "../contact/Map";
import CommonContactForm from "../common/CommonContactForm";

export default function GetInTouch() {
  return (
    <CommonLayout>
      <div className="mt-5">
        <Breadcrumb />
        <OurVision />
        <div className="flex items-center gap-10 mt-[40px] mb-[40px]">
          <div className="w-1/2">
            <Map />
          </div>

          <div className="w-1/2">
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
    </CommonLayout>
  );
}
