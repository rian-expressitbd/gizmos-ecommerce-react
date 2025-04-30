import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import NavbarLower from "@/components/Home/Navbar/NavbarLower";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import FaqAccordion from "./FaqAccordion";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

export default function FAQ() {
  const tags = [
    {
      tag: "Branding",
    },
    {
      tag: "Design",
    },
    {
      tag: "Funding",
    },
    {
      tag: "Gadget",
    },
    {
      tag: "Innovation",
    },
    {
      tag: "Marketing",
    },
    {
      tag: "New Style",
    },
    {
      tag: "Success",
    },
    {
      tag: "Sustainable",
    },
    {
      tag: "Viral",
    },
  ];
  return (
    <>
      <Header />
      <Navbar />
      <NavbarLower />
      <div className="mx-auto w-[90%]">
        <Breadcrumb className="mt-[30px]" />
        <h1 className="text-4xl font-semibold mt-[40px]">FAQ Page</h1>
        <div className="flex flex-col lg:flex-row justify-start gap-14 mt-[30px]">
          <div className="w-full lg:w-2/3">
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <ContactForm />
          </div>
          <div className="w-full lg:w-1/3">
            <div className="relative flex flex-col gap-7 lg:gap-36">
              <div>
                <input
                  className="p-4 w-full rounded-[10px] border-gray-300 border-[0.5px]"
                  placeholder="Type your text..."
                  type="text"
                  name=""
                  id=""
                />
                <FaMagnifyingGlass className="absolute right-[15px] top-[21px]" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl font-semibold">Categories</h4>
                <Link className="text-gray-500 mt-5" to="">
                  Business
                </Link>
                <Link className="text-gray-500 mt-3" to="">
                  Creative
                </Link>
                <Link className="text-gray-500 mt-3" to="">
                  Development
                </Link>
                <Link className="text-gray-500 mt-3" to="">
                  Digital
                </Link>
                <Link className="text-gray-500 mt-3" to="">
                  Electronics
                </Link>
                <Link className="text-gray-500 mt-3" to="">
                  Technology
                </Link>
                <Link className="text-gray-500 mt-3" to="">
                  Trends
                </Link>
                <Link className="text-gray-500 mt-3" to="">
                  Web
                </Link>
              </div>

              <div>
                <Image
                  className="rounded-[20px]"
                  src="/blog-sidebar-banner.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-2xl">Tags</h3>
                <ul className="mt-5 flex flex-wrap gap-3 mb-5">
                  {tags.map((tag, index) => (
                    <li
                      key={index}
                      className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                    >
                      <Link
                        className="text-gray-600 text-sm hover:text-black"
                        to={`/${tag?.tag}`}
                      >
                        {tag?.tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
