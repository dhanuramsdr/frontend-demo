import { Bell, Ellipsis, TextAlignStart, X } from "lucide-react";
import { useState } from "react";
import Toggletheme from "../component/Toggletheme";
import image1 from "../assets/hero.png";
import SearchBar from "../component/Search";
import Userdropdown from "../component/Userdropdown";
import Mobileview from "./Mobileview";
import { useHeaderStore } from "../Globelstate/Store";

interface mainInterface {
  setState: (state: boolean) => void;
  state: boolean;
}

const Header = ({ setState, state }: mainInterface) => {
  const { header, setHeader, toggleHeader } = useHeaderStore();

  console.log(state);

  return (
    <header className=" relative flex justify-between  w-full h-24  hover:shadow-gray-700 border-2 border-gray-500 rounded-2xl  p-2 dark:bg-black dark:border-gray-700 transition-colors duration-300">
      <div className="lg:hidden flex justify-between items-center  block min-w-full">
        {state ? (
          <button onClick={() => setState(!state)}>
            <X size={20} color={"gray"} />
          </button>
        ) : (
          <button onClick={() => setState(!state)}>
            <TextAlignStart size={20} color={"gray"} />
          </button>
        )}
        <div className="flex justify-content-evenly">
          <img src={image1} alt="hero" className="w-16 h-10" />
          <h2 className="font-semibold text-xl">Tailwind</h2>
        </div>
        <button
          onClick={() => setHeader(!header)}
          className=" flex items-center justify-center"
        >
          <Ellipsis
            className="active:rounded mt-5 active:bg-gray-400"
            size={20}
          />
        </button>
      </div>
      <div className="hidden lg:flex justify-between space-x-10 w-full">
        <SearchBar />
        <div className="flex items-center gap-3.5 ">
          <Toggletheme />
          <Bell
            color="gray"
            size={35}
            className="border-2 border-gray-300 rounded-full p-2 "
          />
          <Userdropdown />
        </div>
      </div>

      {header && (
        <div className="absolute top-24 left-0 right-0 z-0 lg:hidden">
          <Mobileview />
        </div>
      )}
    </header>
  );
};

export default Header;
