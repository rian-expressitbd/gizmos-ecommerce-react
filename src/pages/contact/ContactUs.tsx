import { Breadcrumb } from "@/components/ui/breadcrumb";

import Map from "./Map";
import ContactForm from "./ContactForm";
import OurVision from "./OurVision";

export default function ContactUs() {
  return (
    <>
      <div className="mt-5 mx-auto w-[90%]">
        <Breadcrumb />
        <Map />
        <ContactForm />
        <OurVision />
      </div>
    </>
  );
}
