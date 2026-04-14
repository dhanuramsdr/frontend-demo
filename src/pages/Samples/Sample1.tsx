import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowDown, MenuIcon, Search, User } from "lucide-react";
import { useState } from "react";

const Sample1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-800  text-white font-semibold flex flex-col sm:flex-col md:flex-col lg:flex-row  justify-between ">
      <div className="border-4  border-white font-semibold rounded-2xl space-x-2 justify-center items-center sm:mx-52 lg:mx-0 ">
        <button>
          <Search size={16} color="white" />
        </button>
        <input type="search" placeholder="search here" />
      </div>
      <div className="hidden md:flex border-4 border-white font-semibold  rounded-2xl space-x-5 md:mx-52 lg:mx-0  justify-between items-center lg:space-x-24 ">
        <div className="flex  items-center">
          <User
            size={16}
            color="black"
            className="bg-purple-600 rounded-full "
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:text-violet-600 border-none hover:border-none">
                Menu
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-4 border-gray-800 opacity-50 p-5 space-y-5">
              <DropdownMenuItem className="hover:text-violet-700">
                option1
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:text-violet-700">
                option2
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:text-violet-700">
                option3
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ArrowDown
          color="black"
          size={16}
          className="bg-gray-500 opacity-50 rounded-full "
        />
      </div>
      <button className=" md:hidden flex justify-end">
        <MenuIcon
          size={20}
          color="white"
          className="border-4 border-amber-600 mx-10"
          onClick={() => setOpen(!open)}
        ></MenuIcon>
      </button>
      {open && (
        <div className="md:hidden border-4 border-gray-500 flex flex-col mx-20 space-y-5 rounded-2xl bg-gray-900 p-4">
          <button
            className="text-white hover:text-violet-600 px-4 py-2 rounded text-left"
            onClick={() => setOpen(false)}
          >
            button1
          </button>
          <button
            className="text-white hover:text-violet-600 px-4 py-2 rounded text-left"
            onClick={() => setOpen(false)}
          >
            button2
          </button>
          <button
            className="text-white hover:text-violet-600 px-4 py-2 rounded text-left"
            onClick={() => setOpen(false)}
          >
            button3
          </button>
        </div>
      )}{" "}
    </div>
  );
};

export default Sample1;
