import React from 'react'
import './Header.css'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  return (
    <div className='header'>
        <p className='heading'>To Spend <span className='total'>$128,000,000,000</span> You have money</p>
        {/* <ShoppingCartIcon /> */}
    </div>
  )
}
