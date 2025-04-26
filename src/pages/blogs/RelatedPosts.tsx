import { Image } from "@/components/ui/image";

export default function RelatedPosts() {
  return (
    <div className="flex flex-col mt-[50px]">
      <h1 className="text-2xl font-semibold">Related Posts</h1>
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <Image rounded="lg" src="/blog-img2.jpg" alt="" />
          <div>
            <p className="text-sm text-gray-300">22 October 2022</p>
            <h6 className="mt-2 text-md font-bold">
              Digtal Strategy Design And Solution For Award Winning
            </h6>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <Image rounded="lg" src="/blog-img3.jpg" alt="" />
          <div>
            <p className="text-sm text-gray-300">22 October 2022</p>
            <h6 className="mt-2 text-md font-bold">
              Digtal Strategy Design And Solution For Award Winning
            </h6>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <Image rounded="lg" src="/blog-img4.jpg" alt="" />
          <div>
            <p className="text-sm text-gray-300">22 October 2022</p>
            <h6 className="mt-2 text-md font-bold">
              Digtal Strategy Design And Solution For Award Winning
            </h6>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <Image rounded="lg" src="/blog-img5.jpg" alt="" />
          <div>
            <p className="text-sm text-gray-300">22 October 2022</p>
            <h6 className="mt-2 text-md font-bold">
              Digtal Strategy Design And Solution For Award Winning
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
