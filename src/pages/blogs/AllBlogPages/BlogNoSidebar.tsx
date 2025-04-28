import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";
import { Pagination } from "@/components/ui/pagination";
import BlogWithImages from "../BlogWithImages";
import Quotation from "../Quotation";
import Link from "../Link";

export default function BlogNoSidebar() {
  return (
    <CommonLayout>
      <Breadcrumb className="mt-3" />
      <div className="flex flex-col lg:flex-row items-start mx-auto gap-32 mt-[50px]">
        <div className="flex flex-col w-[70%] mx-auto">
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
