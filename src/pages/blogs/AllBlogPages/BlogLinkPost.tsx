import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";
import { Image } from "@/components/ui/image";
import { FaMagnifyingGlass, FaX } from "react-icons/fa6";
import { InputField } from "@/components/ui/form/input-field";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaQuoteLeft,
  FaReddit,
} from "react-icons/fa";
import { LuLink } from "react-icons/lu";
import Comment from "@/pages/BlogDetails/Comment";
import LeaveReply from "@/pages/BlogDetails/LeaveReply";
import RelatedPosts from "../RelatedPosts";
import Tags from "../Tags";
import FollowUs from "../FollowUs";
import Newsletter from "../Newsletter";
import Infos from "../Infos";
import TextLarge from "@/pages/BlogDetails/TextLarge";
import Texts from "@/pages/BlogDetails/Texts";

export default function BlogLinkPost() {
  return (
    <CommonLayout>
      <Breadcrumb className="mt-3" />
      <div className="flex mt-[50px] items-start gap-32">
        <div className="w-2/3">
          <div className="">
            <div className="bg-[#F3F6FB] flex items-center gap-5 mt-3 p-10 mb-5 border rounded-md">
              <LuLink size={44} />
              <div>
                <h2 className="text-2xl font-semibold">
                  Lorem ipsum dolor odio vis, consectetur corrumpit dicat. Nam
                  in ante fierent eleifend sapien sale vis.
                </h2>
                <div className="mt-5">
                  <p className="text-sm font-bold">Laura Dern</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm text-gray-400">
                ELECTRONICS | SEPTEMBER 28, 2022
              </p>
              <h3 className="text-2xl font-semibold">
                Futuristic Interactive Designs
              </h3>
              <Texts />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <FaQuoteLeft size={44} />
            <h2 className="text-2xl font-semibold">
              Lorem ipsum dolor odio vis, consectetur corrumpit dicat. Nam in
              ante fierent eleifend sapien sale vis.
            </h2>
          </div>
          <div className="mt-3">
            <TextLarge />
          </div>
          <div className="mt-3">
            <Texts />
          </div>
          <div className="mt-[40px]">
            <h3 className="text-2xl font-semibold">Discover the Magic</h3>
            <TextLarge />

            <Image
              className="mt-3"
              rounded="lg"
              src="/blog-img-main1.jpg"
              alt=""
            />
          </div>
          <div className="mt-[40px]">
            <h2 className="text-2xl font-semibold">Planning Point Of View</h2>
            <Texts />
            <TextLarge />
          </div>
          <div className="text-sm font-semibold text-gray-500 mb-[40px] mt-[40px] flex justify-between items-center">
            <div>
              <a href="#" className="hover:underline">
                ELECTRONICS
              </a>{" "}
              /{" "}
              <a href="#" className="hover:underline">
                GADGET
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaFacebook size={15} />
              <FaX size={15} />
              <FaInstagram size={15} />
              <FaPinterest size={15} />
              <FaReddit size={15} />
              <FaLinkedin size={15} />
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 mb-10 flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Author"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="text-xs uppercase text-gray-400 mb-1">Author</div>
              <h2 className="text-lg font-semibold text-gray-900">
                Laura Dern
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id laoreet, justo sed congue. Risus nisi tincidunt tortor, nulla
                felis mea.
              </p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-8">
            <h3 className="text-4xl font-bold mb-6">3 Comments</h3>

            {/* Single Comment */}
            <Comment
              name="Ron Bradley"
              date="September 30, 2022"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet, justo sed congue dignissim."
              imageUrl="https://randomuser.me/api/portraits/men/45.jpg"
            />
            <Comment
              name="Ellie Holms"
              date="September 30, 2022"
              text="Lorem ipsum dolor sit amet, homero adipiscing elit. Quisque laoreet, justo sed congue dignissim."
              imageUrl="https://randomuser.me/api/portraits/women/68.jpg"
            />
            <Comment
              name="Mark Wilson"
              date="September 30, 2022"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet, justo sed congue dignissim."
              imageUrl="https://randomuser.me/api/portraits/men/60.jpg"
            />
          </div>
          <LeaveReply />
        </div>
        <div className="w-1/3">
          <InputField
            className="w-full relative rounded-md"
            id="text"
            placeholder="Type Your Text..."
            icon={FaMagnifyingGlass}
          />
          <h1 className="text-lg font-semibold mt-[50px]">Categories</h1>
          <div className="mt-5">
            <p className="text-sm mt-1 text-gray-600 font-semibold">Business</p>
            <p className="text-sm mt-1 text-gray-600 font-semibold">
              Development
            </p>
            <p className="text-sm mt-1 text-gray-600 font-semibold">Creative</p>
            <p className="text-sm mt-1 text-gray-600 font-semibold">Digital</p>
            <p className="text-sm mt-1 text-gray-600 font-semibold">
              Electronics
            </p>
            <p className="text-sm mt-1 text-gray-600 font-semibold">
              Technologies
            </p>
            <p className="text-sm mt-1 text-gray-600 font-semibold">Trends</p>
            <p className="text-sm mt-1 text-gray-600 font-semibold">Web</p>
          </div>
          <RelatedPosts />
          <div className="mt-[50px]">
            <Tags />
          </div>
          <div className="mt-[50px]">
            <FollowUs />
            <Newsletter />
            <div className="mt-[50px]">
              <Image src="/blog-sidebar-banner.jpg" alt="blog-sidebar-banner" />
            </div>
            <div className="mt-[50px]">
              <Infos />
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}
