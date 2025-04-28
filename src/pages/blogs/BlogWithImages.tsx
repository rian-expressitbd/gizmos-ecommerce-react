import { Image } from "@/components/ui/image";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

type image = {
  img: string;
};

export default function BlogWithImages({ img }: image) {
  return (
    <div className="w-full">
      <div className="w-full">
        <Image className="w-full" rounded="lg" src={img} alt="" />
        <div className="mt-5">
          <p className="text-sm text-gray-400">
            ELECTRONICS | SEPTEMBER 28, 2022
          </p>
          <h3 className="text-2xl font-semibold">
            Futuristic Interactive Designs
          </h3>
          <p className="mt-4 text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue
            ligula, feugiat ut nulla perpet. Ut est lacus, molestie in no, icula
            mea ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam
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
      </div>
    </div>
  );
}
