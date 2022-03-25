import React from "react";
import "./Products.css";
import { MdAddShoppingCart } from "react-icons/md";

const Products = (props) => {
  const { product } = props;
  const { name, price, img } = product;
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
      </div>
      <button className="button-cart">
        <p className="button-text">ADD TO CART</p>
        <MdAddShoppingCart className="icon" />
      </button>
    </div>
  );
};

export default Products;
