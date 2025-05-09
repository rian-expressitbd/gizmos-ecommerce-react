import Teams from "./Teams";
import Video from "./Video";
import MultiVendor from "./MultiVendor";
import Blogs from "@/components/Home/Blogs/Blogs";

export default function About() {
  return (
    <>
      <div>
        <img
          className="w-[100vw] object-cover"
          src="/about-us-main.jpg"
          alt=""
        />
      </div>
      <div className="mx-auto w-[90%] mb-5 lg:mb-[70px]">
        <div className="flex flex-col lg:flex-row mx-auto gap-7 lg:gap-20 mt-3 lg:mt-[50px] mb-3 lg:mb-[50px]">
          <div className="w-full lg:w-1/3">
            <h1 className="text-2xl lg:text-4xl font-semibold">
              More About Company History
            </h1>
          </div>
          <div className="flex flex-col w-full lg:w-2/3">
            <p className="text-sm text-[#677AB0]">
              Nulla porta nulla nec orci vulputate, id rutrum sapien varius.
              Class aptent taciti sociosqu ad litora torquent per conubia sed
              nostra, per inceptos himenaeos. Nulla facilisi. Integer vel felis
              cursus, varius arcu non, sollicitudin tortor. Vivamus piorttitor
              libero id metus scele risque pellentesque sit amet in est. Mauris
              accumsan porta ante, vel tincidunt quam auctor vitae. Maecenas
              suscipit risus neque, at dapibus dolor sollicitudin vitae.
              Maecenas a eros eget lorem iaculis ultricies.
            </p>
            <p className="text-sm text-[#677AB0] mt-[20px]">
              Suspendisse sodales magna ut gravida feugiat. Aenean gravida
              pellentesque lacinia. Suspendisse ullamcorper, volumuse iaculis
              pharet ra, lacus sem gravida urna, eu pharetra enim felis
              condiment um enim. Cras eget quam mollis, ultrices dolor
              tincidunt, finibus mauris. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. In sonet rhoncus
              metus ex, quis pretium neque tincidunt ut. Donec vestibulum congue
              sapien eu lacinia. Fusce vitae convallis tortor, sed ultricies
              eros. Morbi quis varius nibh, nec semper nibh.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col">
            <img
              className="object-cover rounded-[10px]"
              src="/vision.jpg"
              alt=""
            />
            <h3 className="text-2xl font-semibold mt-5">Our Vision</h3>
            <p className="text-sm text-[#677AB0] mt-5">
              Ne nemore aeterno dolores sit, sit ne consulatu dignissim, vix
              autem volumus id tacimates id. Ad quod ignota democritum his, quis
              probatus mel te. At sale sonet eam, ex eam nostrum recusabo
              pertinacia. Est ne propriae cotidieque, an vel solet malorum
              inermis, alii admodum.
            </p>
          </div>
          <div className="flex flex-col">
            <img
              className="object-cover rounded-[10px]"
              src="/vision2.jpg"
              alt=""
            />
            <h3 className="text-2xl font-semibold mt-5">What We Do</h3>
            <p className="text-sm text-[#677AB0] mt-5">
              Ne nemore aeterno dolores sit, sit ne consulatu dignissim, vix
              autem volumus id tacimates id. Ad quod ignota democritum his, quis
              probatus mel te. At sale sonet eam, ex eam nostrum recusabo
              pertinacia. Est ne propriae cotidieque, an vel solet malorum
              inermis, alii admodum.
            </p>
          </div>
        </div>
      </div>
      <Teams />
      <Video />
      <MultiVendor />
      <div className="bg-[#F3F6FB]">
        <Blogs />
      </div>
    </>
  );
}
