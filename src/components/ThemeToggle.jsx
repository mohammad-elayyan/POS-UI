import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/reducers/themeSlice";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className=" px-2 py-1 rounded-md text-sm cursor-pointer border border-gray-400 flex items-center gap-1"
        onClick={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
      >
        {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
