import { useState } from "react";
import "./productItem.css";
const ProductItem = ({ item, addToCart = () => {} }) => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        setQuantity(value >= 1 ? value : 1);
      };

    const handleAddToCart = () => {
        if (quantity > 0) addToCart(item, quantity);
        setQuantity(0);
    };


    return (
        <div>
            <div className=" bg-white h-[340px] p-3 pt-9">
                <img
                    src={item.image}
                    alt="Front of men's Basic Tee in black."
                    className="w-[370px] h-[180px] "
                />

                <div className="mt-4 mb-4 mx-4 flex justify-between font-medium text-gray-900 ">
                    <p> {item.title}</p>
                    <p> ${item.price}</p>
                </div>

                <div className="card-item-buttons">
                    <button>Interest</button>
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}/>
                        
                    <button onClick={handleAddToCart}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
