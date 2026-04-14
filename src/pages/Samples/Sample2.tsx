import { MapPin } from "lucide-react";
import imag1 from "../../assets/hero.png";
const Sample2 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-1/2 mt-10 ml-10 py-2 h-auto jus">
      <div className="border-4 border-blue-700">
        <div className=" bg-violet-600 flex  rounded-2xl mt-1 w-1/2 ">
          <MapPin size={25} color="white" className=" ml-3" />
          <span className=" text-white rounded-2xl  ">india</span>
        </div>
      </div>
      <div className="border-4 border-blue-700 flex sm:justify-end">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-300 border-2 border-white rounded-full peer-checked:bg-violet-600 peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all"></div>
        </label>
      </div>
      <div className="border-4 border-blue-700">
        <h1 className="text-white text-[18px]  md:text-xl">Monday</h1>
        <span className="text-white font-light text-[10px]">
          {new Date(Date.now()).toLocaleDateString()}
        </span>
      </div>
      <div className="border-4 border-blue-700 flex sm:justify-end">
        <img src={imag1} alt="sun" className="w-15 h-20" />
      </div>
      <div className="border-4 border-blue-700">
        <h1 className="text-white text-3xl">26 C</h1>
        <span className="text-white font-light text-[10px]">
          {new Date(Date.now()).toLocaleDateString()}
        </span>
      </div>
      <div className="border-4 border-blue-700  sm:text-right">
        <h1 className=" text-xl lg:text-2xl font-semibold text-white">
          Cloudy
        </h1>
        <span className=" text-[10px] font-light text-white">Feel like 26</span>
      </div>
    </div>
  );
};

export default Sample2;
