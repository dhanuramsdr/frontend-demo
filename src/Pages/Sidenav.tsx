// ============ components/Sidenav.tsx ============
import { NavLink } from "react-router-dom";
import image1 from "../assets/hero.png";
import { cn } from "../Utilits/utils";
import { Dropdown } from "../component/Dropdown";
import { navigationConfig } from "../Utilits/navigation.config";

interface variableInterface {
  state: boolean;
}

const Sidenav = ({ state }: variableInterface) => {
  console.log("state", state);

  return (
    <aside
      className={`${
        state ? "block w-52" : "hidden lg:block lg:w-72"
      } h-screen overflow-auto border-4 border-gray-500 rounded-2xl bg-white dark:bg-gray-900`}
    >
      <div className="hidden lg:flex gap-2 p-4 border-b border-gray-200">
        <img src={image1} alt="hero" className="w-16 h-10" />
        <h2 className="font-semibold text-xl dark:text-white">Tailwind</h2>
      </div>

      <div className="p-4">
        <h3 className="text-gray-400 mb-3">MENU</h3>
        <nav className="space-y-1">
          {navigationConfig.map((item, index) => {
            if (item.type === "link") {
              return (
                <NavLink
                  key={index}
                  to={item.path!}
                  className={({ isActive }) =>
                    cn(
                      "p-2 rounded-lg transition-all duration-200 w-full block flex items-center gap-2",
                      isActive
                        ? "border-2 border-blue-300 text-gray-700 bg-blue-50"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 hover:shadow-md",
                    )
                  }
                >
                  <span>{item.icon}</span>
                  {item.label}
                </NavLink>
              );
            } else {
              return (
                <Dropdown
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  items={item.items || []}
                />
              );
            }
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidenav;
