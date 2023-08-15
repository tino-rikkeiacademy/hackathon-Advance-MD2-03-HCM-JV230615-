import React, {useState, useEffect} from 'react'
import './Card.css'
export default function Card({product, addToCart, minusProduct}) {
  const [quantity, setQuantity] = useState(0)

  const handleMinus = (id, quantity) => {
      minusProduct(id)
      if (quantity === 0) {
        setQuantity(0)
      }else {
        setQuantity(quantity-1)
      }
  }

  const handleAddToCart = (id) => {
        setQuantity(quantity + 1);
        addToCart(id);
  }

  return (
    <div className="card-item">
      <img src={product.image} className="card-img-v1 card-img-top p-3" alt="Fissure in Sandstone"/>
      <div className="card--body">
        <div className='sub-heading d-flex justify-content-between '> 
          <h5 className="card-title">{product.title}</h5>
          <span>${quantity === 0 ? product.price : product.price * quantity}</span>
        </div>
        <div className='btn-wrapper d-flex justify-content-between rounded-8'>
          <span className='btn-card btn-card--insert' onClick={() => handleMinus(product.id, quantity)}>Interest</span>
          <span className='btn-card count'>{quantity}</span>
          <span className='btn-card btn-card--add' onClick={() => handleAddToCart(product.id)}>Add</span>
        </div>  
      </div>
    </div>
  )
}
