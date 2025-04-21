import FooterLower from "./FooterLower";
import FooterMiddle from "./FooterMiddle";
import FooterUpper from "./FooterUpper";

export default function Footer() {
  return (
    <div className="bg-[#1A1A1A] mt-[50px]">
      <div className="mx-auto w-[80%] py-6">
        <FooterUpper />
        <hr className="border-gray-700" />
        <FooterMiddle />
        <hr className="border-gray-700" />
        <FooterLower />
      </div>
    </div>
  );
}
