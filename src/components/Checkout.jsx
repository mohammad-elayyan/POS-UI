import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/reducers/cartSlice";

const Checkout = () => {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="pt-4 mt-4">
      <div className="flex justify-between items-center mb-4 px-4">
        <span className="text-main-text font-semibold text-lg">Total:</span>
        <span className="text-main-text font-bold text-xl">
          ${total.toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col gap-3 px-4 mb-4">
        <button
          className="w-full bg-error hover:bg-red-700 text-white py-2 rounded cursor-pointer"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        <button className="w-full bg-primary hover:bg-blue-700 text-white py-2 rounded cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
