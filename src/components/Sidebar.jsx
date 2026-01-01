import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="bg-secondary w-1/6">
      {theme === "light" ? (
        <img src="./logo-w.png" alt="logo" className="w-1/2 mx-auto my-4" />
      ) : (
        <img src="./logo.png" alt="logo" className="w-1/2 mx-auto my-4" />
      )}
      <div className="mt-4">
        <ul>
          <li className="text-secondary-text hover:text-main-text border-b border-main-text cursor-pointer hover:bg-main px-4 py-3">
            Dashboard
          </li>
          <li className="text-secondary-text hover:text-main-text border-b border-main-text cursor-pointer hover:bg-main px-4 py-2">
            Products
          </li>
          <li className="text-secondary-text hover:text-main-text border-b border-main-text cursor-pointer hover:bg-main px-4 py-2">
            Categories
          </li>
          <li className="text-secondary-text hover:text-main-text  cursor-pointer hover:bg-main px-4 py-2">
            Reports
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
