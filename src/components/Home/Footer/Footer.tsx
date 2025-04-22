import FooterLower from "./FooterLower";
import FooterMiddle from "./FooterMiddle";
import FooterUpper from "./FooterUpper";

export default function Footer() {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="mx-auto w-[90%] py-6">
        <FooterUpper />
        <hr className="border-gray-700" />
        <FooterMiddle />
        <hr className="border-gray-700" />
        <FooterLower />
      </div>
    </div>
  );
}
