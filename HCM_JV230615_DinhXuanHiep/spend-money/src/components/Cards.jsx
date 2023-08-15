import React, { useState } from "react";
import "./index.css";

export default function Cards({ product, addToCart = () => {} }) {
    // state
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (quantity > 0) addToCart(product, quantity);
        setQuantity(0);
    };

    return (
        <div className="card-item">
            <img src={product.image} alt="" />
            <div className="card-item-title">
                <h4>{product.title}</h4>
                <h4>
                    $ <span>{product.price}</span>
                </h4>
            </div>
            <div className="card-item-buttons">
                <button>Interest</button>
                <input
                    type="number"
                    min={"1"}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button onClick={handleAddToCart}>Add</button>
            </div>
        </div>
    );
}