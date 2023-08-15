import Header from "./components/Header";
import ListProducts from "./components/ListProducts";
import ShoppingCart from "./components/ShoppingCart";


export default function UserInterface() {
    
    return (
        <div className="bg-[#c7c7c7db] h-auto">
            <Header />
            <ListProducts/>
            <ShoppingCart/>
        </div>
    );
}
