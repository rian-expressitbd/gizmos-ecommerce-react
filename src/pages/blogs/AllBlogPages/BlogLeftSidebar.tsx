import { Breadcrumb } from "@/components/ui/breadcrumb";
import { InputField } from "@/components/ui/form/input-field";
import { Image } from "@/components/ui/image";
import CommonLayout from "@/layouts/common-layout";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { Pagination } from "@/components/ui/pagination";
import BlogWithImages from "../BlogWithImages";
import Quotation from "../Quotation";
import Link from "../Link";
import RelatedPosts from "../RelatedPosts";
import Tags from "../Tags";
import FollowUs from "../FollowUs";
import Newsletter from "../Newsletter";
import Infos from "../Infos";

export default function BlogLeftSidebar() {
  return (
    <CommonLayout>
      <Breadcrumb className="mt-3" />
      <div className="flex flex-col lg:flex-row items-start gap-32 mt-[50px]">
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
        <div className="flex flex-col w-2/3">
          <BlogWithImages img="/blog-img-main.jpg" />
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
            <Link />
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
      </div>
    </CommonLayout>
  );
}
