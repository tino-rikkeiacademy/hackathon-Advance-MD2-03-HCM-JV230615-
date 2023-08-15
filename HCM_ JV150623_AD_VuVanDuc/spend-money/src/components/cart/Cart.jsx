import React, {useState, useEffect} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Cart.css'

export default function Cart({item, minusQuantity, plusQuantity}) {
    return (
        <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
                <img className='img' src={item.image} alt="" />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
                <h6 className="text-black mb-0">{item.title}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className='btn-cart' onClick={() => minusQuantity(item.id)}> <RemoveIcon /></button>
                <div className='quantity'>{item.quantity}</div>
                <button className='btn-cart' onClick={() => plusQuantity(item.id)} ><AddIcon /></button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0">€ {item.price * item.quantity}</h6>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-muted">
                    <i className="fas fa-times" />
                </a>
            </div>
            <div>
                
            </div>
        </div>
    )
}
