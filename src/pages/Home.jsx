import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Products from "./Products";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";

const Home = () => {
  const { isCartOpen } = useSelector((state) => state.cart);
  return (
    <div className="flex w-full h-screen home">
      <Sidebar />
      <div className="overflow-y-auto w-full">
        <Navbar />
        <div className="flex">
          <Products />
          {isCartOpen && <Cart />}
        </div>
      </div>
    </div>
  );
};

export default Home;
