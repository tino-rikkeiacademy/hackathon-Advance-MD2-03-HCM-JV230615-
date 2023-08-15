import React from "react";
import Header from "./Header";
import Products from "./Products";
import products from "../products.json";
// import Cart from "./cart/Cart";
export default function SpendMoney() {
  return (
    <>
      <div>
        <Header></Header>
        <Products products={products}></Products>
      </div>
    </>
  );
}
