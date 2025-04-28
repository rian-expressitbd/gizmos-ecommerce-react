import { Breadcrumb } from "@/components/ui/breadcrumb";
import { InputField } from "@/components/ui/form/input-field";
import { Image } from "@/components/ui/image";
import CommonLayout from "@/layouts/common-layout";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { Pagination } from "@/components/ui/pagination";
import BlogWithImages from "../BlogWithImages";
import Quotation from "../Quotation";
import Links from "../Link";

import RelatedPosts from "../RelatedPosts";
import Tags from "../Tags";
import FollowUs from "../FollowUs";
import Newsletter from "../Newsletter";
import Infos from "../Infos";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import Iframe from "@/components/ui/Iframe/Iframe";

export default function BlogVideoPost() {
  return (
    <CommonLayout>
      <Breadcrumb className="mt-3" />
      <div className="flex flex-col lg:flex-row items-start gap-32 mt-[50px]">
        <div className="flex flex-col w-2/3">
          <Iframe
            width="1236"
            height="695"
            src="https://www.youtube.com/embed/JFH9AA6Hl8g"
            title="চাকরির প্রস্তুতি থেকে প্রজেক্ট ডেলিভারি - রিয়্যাক্টিভ এক্সিলারেটর"
          />
      
          <div className="mt-5">
            <p className="text-sm text-gray-400">
              ELECTRONICS | SEPTEMBER 28, 2022
            </p>
            <h3 className="text-2xl font-semibold">
              Futuristic Interactive Designs
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue
              ligula, feugiat ut nulla perpet. Ut est lacus, molestie in no,
              icula mea ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam
              interdum nulla, sed laoreet risus lectus. Vivamus viverra tem pus.
              Proin inan tincidunt sem. Etiam sed dapibus augue. Praesent eu
              pulvinar est ed quis.
            </p>
            <Link
              to="/blog/blog-details"
              className="flex gap-4 items-center text-white w-[145px] bg-blue-600 p-4 mt-4"
              title="read-more-btn"
            >
              <p className="text-sm text-white font-semibold">READ MORE</p>
              <FaChevronRight />
            </Link>
          </div>
          <div className="mt-[40px]">
            <BlogWithImages img="/blog-img-main.jpg" />
          </div>

          <div className="mt-[40px]">
            <BlogWithImages img="/blog-img-main1.jpg" />
          </div>
          <div className="mt-[40px]">
            <Quotation />
          </div>
          <div className="mt-[40px]">
            <BlogWithImages img="/blog-img-main2.jpg" />
          </div>
          <div className="mt-[40px]">
            <Links />
          </div>
          <div className="mt-[40px] mb-[80px]">
            <Pagination
              currentPage={1}
              totalPages={10}
              onPageChange={() => {}}
              totalItems={10}
              itemsPerPage={1}
            />
          </div>
        </div>

        <div className="w-1/3 flex flex-col">
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
