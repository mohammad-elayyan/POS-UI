import { Minus, Plus } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducers/cartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const itemPrice = (
    parseFloat(product.product_price.replace("$", "")) *
    parseInt(product.quantity)
  ).toFixed(2);

  return (
    <div>
      <div className="p-2 border-b flex items-center gap-2">
        <img
          src={product.product_photo}
          alt={product.product_title}
          className="w-12 h-12 object-fill rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-main-text font-semibold text-sm">
            {product.product_title.slice(0, 50)}...
          </h3>
          <p className="text-main-text mt-2">${itemPrice}</p>
        </div>
        <button
          className="text-main-text cursor-pointer w-4 h-4 flex items-center justify-center border rounded-full"
          onClick={() => dispatch(removeFromCart(product))}
        >
          <Minus size={9} />
        </button>
        <span className="text-main-text mx-0.5">{product.quantity}</span>
        <button
          className="text-main-text cursor-pointer w-4 h-4 flex items-center justify-center border rounded-full"
          onClick={() => dispatch(addToCart(product))}
        >
          <Plus size={9} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
