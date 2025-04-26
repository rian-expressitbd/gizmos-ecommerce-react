import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { FaChevronRight } from "react-icons/fa";

type image = {
  img: string;
};

export default function BlogWithImages({ img }: image) {
  return (
    <div>
      <div className="">
        <Image rounded="lg" src={img} alt="" />
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
          <Button
            className="flex gap-4 items-center bg-blue-600 p-4 mt-4"
            title="read-more-btn"
          >
            <p className="text-sm text-white font-semibold">READ MORE</p>
            <FaChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
