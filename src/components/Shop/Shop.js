import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = [];
    if (cart.length === 0) {
      newCart = [...cart, selectedProduct];
    } else {
      const isExist = cart.find((item) => item.id === selectedProduct.id);
      if (isExist) {
        newCart = cart.map((item) => {
          if (item.id === selectedProduct.id) {
            item.count += 1;
          }
          return item;
        });
      } else {
        newCart = [...cart, selectedProduct];
      }
    }
    setCart(newCart);

    // setCart([...cart, product]); //another way
  };

  console.log(products);
  return (
    <div className="shop">
      <h1 className="shop-title">A Touch of Dutch</h1>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Products
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Products>
          ))}
        </div>
        <div className="cart-container">
          {" "}
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
