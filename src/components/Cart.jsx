import { X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../redux/reducers/cartSlice";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="bg-navbar w-96 h-[92vh] sticky top-14 right-0 overflow-auto">
      <div className="cart-header border-b p-4 flex items-center justify-between">
        <h2 className="text-main-text font-semibold text-lg">Cart</h2>
        <X
          className=" cursor-pointer"
          size={24}
          onClick={() => {
            dispatch(toggleCart());
          }}
        />
      </div>
      <div className="p-2">
        {cartItems?.length > 0 ? (
          <div className="flex flex-col">
            {cartItems.map((item) => (
              <CartItem key={item.asin} product={item} />
            ))}
            <Checkout />
          </div>
        ) : (
          <div className="p-4 text-center text-main-text">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
