import React, { useState } from "react";
import Cards from "./Cards";
import "./index.css";
import Cart from "./cart/Cart";

export default function Products({ products }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCartItems((prevCartItems) => [...prevCartItems, { product, quantity }]);
  };

  const handleUpdateCartItem = (index, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity = newQuantity;
      setCartItems(updatedCartItems);
    }
  };
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <div className="card-wrapper">
        {products.map((product) => (
          <Cards
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
          />
        ))}
      </div>
      <div>
        <Cart cartItems={cartItems} onUpdateCartItem={handleUpdateCartItem} onClearCart={handleClearCart}/>
      </div>
    </>
  );
}
