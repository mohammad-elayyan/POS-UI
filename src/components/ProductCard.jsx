import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: "cart/addToCart", payload: product });
  };
  console.log(cartItems);
  return (
    <div className="border p-2 m-2 bg-navbar border-gray-200 rounded-md w-[350px] h-96 relative overflow-auto">
      <span className="absolute top-2 left-0 bg-accent text-white text-xs px-2 py-1 rounded-full">
        {product.product_star_rating}
      </span>
      {product.is_best_seller && (
        <span className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
          Best Seller
        </span>
      )}

      <img
        src={product.product_photo}
        alt={product.product_title}
        className="w-full h-[57%] object-fill mb-3"
      />
      <h2 className="text-main-text">
        {product.product_title.slice(0, 70)}...
      </h2>

      <p className="text-main-text mt-2 font-semibold">
        {product.product_price}
        {"  "}
        <span className="line-through text-sm text-gray-500">
          {product.product_original_price}
        </span>
      </p>

      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
