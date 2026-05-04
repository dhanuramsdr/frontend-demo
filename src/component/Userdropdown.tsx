import { User } from "lucide-react";
import { useState } from "react";

const Userdropdown = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="relative border-4 inline-block text-left rounded-2xl">
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className="flex gap-3 justify-center items-center rounded-md shadow-sm px-4 py-2"
        >
          <User
            size={16}
            color="gray"
            className="bg-gray-200 rounded-full w-7 h-7"
          />
          <span>Profile</span>
          <svg
            className=" mr-1 h-5 w-5"
            xmlns="https://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div
          className="absolute right-5 mt-2 w-56 rounded-md shadow-lg bg-white  ring-black ring-opacity-5
                    "
          role="menu"
        >
          <div role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
              role="menuitem"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
              role="menuitem"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
              role="menuitem"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userdropdown;
