import React from "react";
import "./cart.css";

export default function Cart({ cartItems, onUpdateCartItem, onClearCart }) {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  return (
    <div>
      <div className="cart-wrapper">
        <div>
          <h2>
            <u>Your Cart</u>
            <span onClick={onClearCart}>Clear Cart</span>
          </h2>
          <br />

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-item" key={item.product.id}>
                <div>
                  <h4>{item.product.title}</h4>
                  <img src={item.product.image} alt="" />
                </div>
                <div className="cart-item-buttons">
                  <button
                    onClick={() => onUpdateCartItem(index, item.quantity - 1)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span>{item.quantity}</span>

                  <button
                    onClick={() => onUpdateCartItem(index, item.quantity + 1)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <h5>
                  $ <span>{item.product.price}</span>
                </h5>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-total">
            <p>
              Total: <span>${getTotalPrice().toFixed(2)}</span>
            </p>
            <button>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
