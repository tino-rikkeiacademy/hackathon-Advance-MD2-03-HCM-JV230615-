import { useState } from "react";
import listProduct from "./listProducts.json";
import ProductItem from "./ProductItem";

const ListProducts = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product, quantity) => {
        setCartItems((prevCartItems) => {
            const savedProductIndex =
                prevCartItems &&
                prevCartItems.findIndex(
                    (item) => item?.product?.id === product.id
                );
            if (!savedProductIndex == -1) {
                return [...prevCartItems, { product, quantity }];
            } else {
                const prevSaveProduct = prevCartItems[savedProductIndex];
                return [
                    ...prevCartItems.slice(0, savedProductIndex),
                    {
                        ...prevSaveProduct,
                        product,
                        quantity: quantity + (prevSaveProduct?.quantity || 0),
                    },
                    ...prevCartItems.slice(savedProductIndex + 1),
                ];
            }
        });
    };


    return (
        <>
            <div className="p-10 grid grid-cols-1 gap-[50px] sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {listProduct.length > 0 &&
                    listProduct.map((item, index) => (
                        <ProductItem
                            item={item}
                            key={index}
                            addToCart={handleAddToCart}
                        />
                    ))}
            </div>
        </>
    );
};

export default ListProducts;
