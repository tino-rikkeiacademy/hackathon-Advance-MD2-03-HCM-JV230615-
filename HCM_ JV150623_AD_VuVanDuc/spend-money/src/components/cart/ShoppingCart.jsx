// import React, {useState, useEffect}from 'react'
import Cart from './Cart'

export default function ShoppingCart({cartProducts ,minusQuantity, plusQuantity, clearProductInCarts}) {

  return (
    <div>
        <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
                <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: 15 }}
                >
                <div className="card-body p-0">
                    <div className="row g-0">
                    <div className="col-lg-8">
                        <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                <h6 className="mb-0 text-muted">{cartProducts.length} items</h6>
                            </div>
                            <hr className="my-4" />
                            {cartProducts.length > 0 ?
                            cartProducts.map((item, index) => 
                            (<Cart 
                                key={index} 
                                item={item} 
                                minusQuantity={minusQuantity}
                                plusQuantity={plusQuantity}
                            />)) :
                            ''
                            }
                            <hr className="my-4" />
                            <div className="pt-5">
                                <button className='btn bg-primary text-white' onClick={clearProductInCarts}>Clear </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                        <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase">Total price</h5>
                            <h5>€ 
                                {cartProducts.reduce((total, item) => 
                                (total + item.price * item.quantity),0)
                                }
                            </h5>
                        </div>
                        <button
                            type="button"
                            className="btn btn-dark btn-block btn-lg"
                            data-mdb-ripple-color="dark"
                        >
                            Pay
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}
