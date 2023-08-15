import "./App.css";
import Cart from "./cart";
// import ShoppingCart from "./shoppingCart";


function App() {
  return (
    <div className="">
      <div className="header">
        <span className="spend">TO SPEND</span>
        <span className="total-money">11000</span>
        <span className="warning">YOU HAVE MONEY</span>

      </div>
      <div className="App">
        <Cart />
       
      </div>
    </div>
  );
}

export default App;
