import React from 'react';
import './shop.css';

export default function Shop({ itemProduct, setItemProduct }) {
  const handleRemove = (productId) => {
    const updatedItemProduct = itemProduct.filter(
      (item) => item.id !== productId
    );
    setItemProduct(updatedItemProduct);
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedItemProduct = itemProduct.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setItemProduct(updatedItemProduct);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedItemProduct = itemProduct.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setItemProduct(updatedItemProduct);
  };

  const handleTotal = () => {
    setItemProduct([]);
  };

  const calculateTotalPrice = () => {
    const totalPrice = itemProduct.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return totalPrice;
  };

  return (
    <div>
      <h1>Cart</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemProduct.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
              <td>{item.price}</td>
              <td>
                <span style={{ cursor: 'pointer' }}>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </button>
                </span>
                {item.quantity}
                <span style={{ cursor: 'pointer' }}>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>
                </span>
              </td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} style={{ textAlign: 'right', fontWeight: '700', fontSize: '20px' }}>
              Total Price:
            </td>
            <td style={{ color: 'red', fontWeight: '600', fontSize: '20px' }}>
              {calculateTotalPrice()}
            </td>
            <td>
              <button onClick={handleTotal} style={{ background: 'gray' }}>
                BUY
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}