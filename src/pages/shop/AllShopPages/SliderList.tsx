import Featured from "@/components/Home/Featured/Featured";
import CommonLayout from "@/layouts/common-layout";

export default function SliderList() {
  return (
    <div>
      <CommonLayout>
        <div className="mt-5">
          <Featured />
        </div>
      </CommonLayout>
    </div>
  );
}
