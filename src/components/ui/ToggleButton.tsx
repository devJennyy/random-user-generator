import { useTheme } from "@/context/theme";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className={`relative sm:w-20 w-15 h-8 sm:h-10 flex items-center sm:px-2 px-1 rounded-full bg-[#27272A] shadow-xl dark:bg-[#181A20] hover:cursor-pointer transition-all duration-300 border border-white/5 dark:border-white/6`}
    >
      <div
        className={`absolute sm:left-2 top-1/2 transform -translate-y-1/2 sm:w-8 sm:h-8 w-6 h-6 bg-black rounded-full flex items-center justify-center transition-all duration-500 ${
          darkMode ? "sm:translate-x-8 translate-x-[26px]" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <BsFillMoonStarsFill className="sm:text-[16px] text-white" />
        ) : (
          <MdWbSunny className="sm:text-[18px] text-white" />
        )}
      </div>

      <div className="flex w-full justify-between items-center px-1 text-white/60 font-semibold">
        <MdWbSunny className="sm:text-[18px]" />
        <BsFillMoonStarsFill className="sm:text-[18px]" />
      </div>
    </button>
  );
};

export default ToggleButton;
