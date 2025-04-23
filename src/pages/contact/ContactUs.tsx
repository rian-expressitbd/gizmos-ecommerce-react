import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";
import Map from "./Map";
import ContactForm from "./ContactForm";
import OurVision from "./OurVision";

export default function ContactUs() {
  return (
    <CommonLayout>
      <div className="mt-5">
        <Breadcrumb />
        <Map />
        <ContactForm />
        <OurVision />
      </div>
    </CommonLayout>
  );
}
