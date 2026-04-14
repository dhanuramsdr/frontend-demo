import Sample1 from "./Sample1";
import Sample2 from "./Sample2";
import Sample3 from "./Sample3";
import Sample4 from "./Sample4";

const Sample = () => {
  return (
    <>
      <div className="border-4 border-white">
        <Sample1 />
        <div className=" grid grid-cols-1  lg:grid-cols-2 justify-items-center gap-5 border-4 border-amber-500 ">
          <Sample2 />
          <Sample3 />
          <Sample4 />
        </div>
      </div>
    </>
  );
};

export default Sample;
