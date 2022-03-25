import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);
  return (
    <div className="shop">
      <h1 className="shop-title">A Touch of Dutch</h1>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Products key={product.id} product={product}></Products>
          ))}
        </div>
        <div className="cart-container"></div>
      </div>
    </div>
  );
};

export default Shop;
