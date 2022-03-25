import React from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = ({ cart }) => {
  return (
    <div className="cart container">
      <h3 className="mt-5 ms-3">Selected Items</h3>
      <div>
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
      <div>
        {" "}
        <Button className="fs-5 fw-bolder mb-3 ms-3" variant="outline-success">
          Choose 1 for me
        </Button>{" "}
      </div>
      <div>
        {" "}
        <Button className="fs-5 fw-bolder ms-3" variant="outline-danger">
          Choose Again
        </Button>{" "}
      </div>
    </div>
  );
};

export default Cart;
