import {
  Bell,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Search,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import { toggleCart } from "../redux/reducers/cartSlice";
import SearchBar from "./SearchBar";
import { clearUser } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isUserOptionsOpen, setIsUserOptionsOpen] = React.useState(false);
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    setIsUserOptionsOpen(false);
    navigate("/login");
  };

  return (
    <div className="bg-navbar h-14 w-full py-2 flex items-center px-4 sticky left-0 top-0 z-10 shadow-md">
      <SearchBar />

      <div className="ml-auto flex items-center gap-5">
        <div>
          <ThemeToggle />
        </div>
        <div className="  gap-4 cursor-pointer relative">
          <Bell size={15} />
          <span className="counterBadge bg-accent">8</span>
        </div>
        <div className="cursor-pointer relative">
          <MessageSquare size={15} />
          <span className="counterBadge bg-success">5</span>
        </div>
        <div
          className="cursor-pointer relative"
          onClick={() => dispatch(toggleCart())}
        >
          <ShoppingCart size={19} />
          <span className="counterBadge bg-primary left-2.5">
            {cartItems.length}
          </span>
        </div>
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsUserOptionsOpen(!isUserOptionsOpen)}
          >
            <img
              src="./user.png"
              alt="user avatar"
              className="h-8 w-8 rounded-md object-cover cursor-pointer"
            />
            <h2 className="font-semibold text-base">{user.name}</h2>
            {isUserOptionsOpen ? (
              <ChevronUp size={14} />
            ) : (
              <ChevronDown size={14} />
            )}
          </div>
          {isUserOptionsOpen && (
            <div className="absolute right-0 mt-2 p-1 bg-navbar rounded-md shadow-lg">
              <ul>
                <li className="cursor-pointer hover:bg-main px-4 py-2">
                  Profile
                </li>
                <li className="cursor-pointer hover:bg-main px-4 py-2">
                  Settings
                </li>
                <li
                  className="cursor-pointer hover:bg-main px-4 py-2"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
