import React, {useState, useEffect} from 'react'
import Header from './header/Header'
import Card from './card/Card'
import Products from '../Data'
import ShoppingCart from './cart/ShoppingCart'

export default function SpendMoney() {
  const [productsList, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [flag, setFlag] = useState(false)

  const plusQuantity = (id) => { 
    for(let i in cartProducts) {
      if(cartProducts[i].id === id) {
        cartProducts[i].quantity += 1;
        localStorage.setItem('cardList',JSON.stringify(cartProducts))
        setFlag(!flag);
      }
    }
  }

  const minusQuantity = (id) => { 
      for(let i in cartProducts) {
        if(cartProducts[i].id === id) {
          if(cartProducts[i].quantity > 1 ) {
            cartProducts[i].quantity -= 1;
            localStorage.setItem('cardList',JSON.stringify(cartProducts))
            setFlag(!flag);
          }else {
            const newCartProducts = cartProducts.filter(item => (
              item.id !== id
            ))
            localStorage.setItem('cardList',JSON.stringify(newCartProducts))
            setFlag(!flag);
          }
        }
      }
  }

  const addProductToCart = (id) => {
    for (let i in productsList) {
      if (productsList[i].id === id) {
        productsList[i].quantity = 1
        const cardList = JSON.parse(localStorage.getItem('cardList'));
        cardList.push(productsList[i]);
        localStorage.setItem('cardList', JSON.stringify(cardList))
        setFlag(!flag);
      }
    }
  }

  const addToCart = (id) => {
    if(cartProducts.length > 0) {
      for(let i in  cartProducts) {
        if(cartProducts[i].id === id) {
          cartProducts[i].quantity += 1;
          localStorage.setItem('cardList',JSON.stringify(cartProducts))
          setFlag(!flag);
          return
        }
      }
      addProductToCart(id);
    }else {
      addProductToCart(id);
    }
  }

  const minusProduct = (id) => {
    for(let i in cartProducts) {
      if (cartProducts[i].id === id) {
        if(cartProducts[i].quantity >= 1) {
          cartProducts[i].quantity -= 1
          localStorage.setItem('cardList',JSON.stringify(cartProducts))
          setFlag(!flag);
        }else {
          let newCartProducts = cartProducts.filter(item => (item.quantity > 1))
          localStorage.setItem('cardList',JSON.stringify(newCartProducts))
          setFlag(!flag);
        }
      }
    }
  }

  const clearProductInCarts = () => {
    localStorage.setItem('cardList',JSON.stringify([]))
    setFlag(!flag);
  }

  useEffect(()=> {
    setProducts(Products);
  }, [])

  useEffect(() => {
    const cardList = JSON.parse(localStorage.getItem('cardList')) || []
    setCartProducts(cardList);
  },[flag])

  return (
    <div>
        <Header cartProducts={cartProducts}   />
        <div className='container my-4'>
            <div className='row'>
                {productsList.map((item, index) => (
                  <div className='col-3' key={index}>
                    <Card 
                      product={item} 
                      addToCart={addToCart}
                      minusProduct = {minusProduct}
                    />
                  </div>
                ))}
            </div>
        </div>
        <ShoppingCart 
          cartProducts={cartProducts} 
          minusQuantity={minusQuantity}
          plusQuantity = {plusQuantity}
          clearProductInCarts ={clearProductInCarts}
        />
    </div>
  )
}
