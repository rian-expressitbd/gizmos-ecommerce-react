import { Image } from "@/components/ui/image";

export default function FollowUs() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Image className="w-full" rounded="lg" src="/blog-img1.jpg" alt="" />
      <Image className="w-full" rounded="lg" src="/blog-img2.jpg" alt="" />
      <Image className="w-full" rounded="lg" src="/blog-img3.jpg" alt="" />
      <Image className="w-full" rounded="lg" src="/blog-img4.jpg" alt="" />
      <Image className="w-full" rounded="lg" src="/blog-img5.jpg" alt="" />
      <Image className="w-full" rounded="lg" src="/blog-img6.jpg" alt="" />
    </div>
  );
}
