import { button } from "@material-tailwind/react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Toggletheme = () => {
  const [isDark, setDark] = useState<boolean>(false);
  useEffect(() => {
    const isDarkThemeMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDarkThemeMode);
    if (isDarkThemeMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const Togglethem = (): void => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDark(true);
    }
  };
  console.log(localStorage.theme);
  console.log(isDark);

  return (
    <button
      onClick={Togglethem}
      className=" flex justify-center items-center border-2 border-gray-200 rounded-full w-10 h-10 "
    >
      {isDark ? (
        <span>
          <Moon size={20} color="gray" />
        </span>
      ) : (
        <span>
          <Sun size={20} color="gray" />
        </span>
      )}
    </button>
  );
};

export default Toggletheme;
