import { Bell } from "lucide-react";
import SearchBar from "../component/Search";
import Toggletheme from "../component/Toggletheme";
import Userdropdown from "../component/Userdropdown";

const Mobileview = () => {
  return (
    <div className=" flex   justify-between items-center border-2 border-gray-500 rounded-2xl">
      <SearchBar />
      <Toggletheme />
      <Bell
        color="gray"
        size={35}
        className="border-2 border-gray-300 rounded-full p-2 "
      />
      <Userdropdown />
    </div>
  );
};

export default Mobileview;
