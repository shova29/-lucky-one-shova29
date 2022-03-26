import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState([]);

  const randomChoosenProduct = () => {
    let randomNumber = Math.floor(Math.random() * cart.length);
    if (cart.length === 0) {
      setCartItems("No items in cart");
    } else {
      const newCart = [...cart];
      setCartItems(newCart);
      console.log(cartItems);
      setCartItems(cart[randomNumber].name);
    }
  };
  const removeProduct = () => {
    document.getElementById("itemPanel").innerHTML = "";
    setCartItems([]);
  };

  return (
    <div className="cart container">
      <h3 className="mt-5 ms-3">Selected Items</h3>
      <div id="itemPanel">
        {cart.map((product) => (
          <div className="selected-product mb-2" key={product.id}>
            <div className="selected-cart-img me-3">
              <img src={product.img} alt="" />
            </div>
            <p className="mt-2 me-3">{product.name}</p>{" "}
            <div className="ms-3 fs-3">
              <AiOutlineDelete className="delete-icon" />
            </div>
          </div>
        ))}
      </div>

      <div className="container ms-1 random-product">
        <p className="fw-bold fs-5 mb-5">
          Selected Product for You:
          <span className="seleted-product-text fw-bold mb-5">
            {cartItems}
          </span>{" "}
        </p>
      </div>
      <br />
      <div className="mt-5">
        {" "}
        <Button
          onClick={() => randomChoosenProduct()}
          className="randomly-choosen-btn fs-5 fw-bolder mt-5 mb-3 ms-3"
          variant="outline-success"
        >
          Choose 1 for me
        </Button>{" "}
      </div>
      <div>
        {" "}
        <Button
          onClick={() => removeProduct()}
          className="choose-again-btn fs-5 fw-bolder ms-3"
          variant="outline-secondary"
        >
          Choose Again
        </Button>{" "}
      </div>
    </div>
  );
};

export default Cart;
