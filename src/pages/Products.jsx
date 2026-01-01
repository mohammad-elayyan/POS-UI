import React, { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/reducers/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Products = () => {
  //   const { products } = useSelector((state) => state.products);
  const { products, filteredProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/search",
      params: {
        query: "Computers",
        page: "2",
        country: "US",
        sort_by: "RELEVANCE",
        product_condition: "ALL",
        is_prime: "false",
        deals_and_discounts: "NONE",
      },
      headers: {
        "x-rapidapi-key": "830568faa6mshe695cca6d4f1a39p116e93jsn63774638e71c",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    const getProducts = async () => {
      try {
        const response = await axios.request(options);
        dispatch(setProducts(response.data.data.products));
        localStorage.setItem(
          "products",
          JSON.stringify(response.data.data.products)
        );
      } catch (error) {
        console.error(error);
      }
    };
    if (localStorage.getItem("products")) {
      dispatch(setProducts(JSON.parse(localStorage.getItem("products"))));
    } else getProducts();
  }, [dispatch]);

  return (
    <div className="flex items-center flex-wrap gap-4 w-full  justify-center py-4">
      {products &&
        (filteredProducts.length > 0 ? filteredProducts : products).map(
          (product) => <ProductCard key={product.asin} product={product} />
        )}
    </div>
  );
};

export default Products;
