import img1 from "../../assets/hero.png";
const Sample3 = () => {
  return (
    <div className="border-4 border-blue-500 w-1/2 mt-15  ">
      <h1 className="text-white">Today highlight</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 border-4 gap-5 justify-items-center h-auto  ">
        <div className=" border-4 border-violet-700 ">
          <h2 className="text-white ">chance of rain</h2>
          <div className="w-1/3">
            <img src={img1} alt="sample1" className="w-full" />
          </div>
        </div>
        <div className=" border-4 border-violet-700 ">
          <h2 className="text-white ">chance of rain</h2>
          <div className="w-1/3">
            <img src={img1} alt="sample1" className="w-full" />
          </div>
        </div>
        <div className=" border-4 border-violet-700 ">
          <h2 className="text-white ">chance of rain</h2>
          <div className="w-1/3">
            <img src={img1} alt="sample1" className="w-full" />
          </div>
        </div>
        <div className=" border-4 border-violet-700 ">
          <h2 className="text-white ">chance of rain</h2>
          <div className="w-1/3">
            <img src={img1} alt="sample1" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample3;
