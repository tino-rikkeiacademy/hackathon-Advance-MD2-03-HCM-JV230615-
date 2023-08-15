import React from 'react'
import './Header.css'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header({cartProducts}) {
 
  return (
    <div className='header'>
        <p className='heading'>To Spend  
          <span className='total'>
          $ {cartProducts.length > 0 ?
            cartProducts.reduce((total, item) => (total + item.price * item.quantity),0):
            0
            }
          </span> 
          You have money
      </p>
        {/* <ShoppingCartIcon /> */}
    </div>
  )
}
