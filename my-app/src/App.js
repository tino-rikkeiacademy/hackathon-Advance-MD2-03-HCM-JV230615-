import { useState } from 'react';
import './App.css';
import Headerbar from './Components/headerbar';
import ProductsGrid from './Components/products';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CustomizedTables from './Components/cart';
function App() {
  const cartList = JSON.parse(localStorage.getItem("cart")) || [];
  const addTocart = (item) => {
    let newCart = [...cartList, { ...item, quantity: 1 }]
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  const increase = (index, item) => {
    cartList.splice(index, 1, { ...item, quantity: item.quantity + 1 });
    localStorage.setItem("cart", JSON.stringify(cartList));
  }
  const decrease = (index, item) => {
    cartList.splice(index, 1, { ...item, quantity: item.quantity == 0 ? 0 : item.quantity - 1 });
    localStorage.setItem("cart", JSON.stringify(cartList));
  }
  return (
    <>
      <Headerbar />
      <ProductsGrid addTocart={addTocart} />
      <CustomizedTables cartList={cartList} increase={increase} decrease={decrease} />
    </>
  );
}

export default App;
