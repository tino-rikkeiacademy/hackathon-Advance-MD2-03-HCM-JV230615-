/* eslint-disable no-restricted-globals */
import React, { useState } from 'react'
import Header from './components/header'
import ListCards from './components/listCards'
import Table from './components/table';

const productArr = [
    {
    "quantity" : 0,
        "id": 1,
        "title": "Cola",
        "price": 6,
        "image": "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg"
    },
      {
        "quantity" : 0,
        "id": 2,
        "title": "Fanta",
        "price": 5,
        "image": "https://www.coca-cola.com/content/dam/onexp/vn/home-image/fanta/blueberry.desktop.png"
    },
      {
        "quantity" : 0,
        "id": 3,
        "title": "Sprite",
        "price": 5,
        "image": "https://images.ofix.com/product-image/s99509_2.jpg"
    },
      {
        "quantity" : 0,
        "id": 4,
        "title": "Ayran",
        "price": 3,
        "image": "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg"
    },
      {
        "quantity" : 0,
        "id": 5,
        "title": "Salgam",
        "price": 4,
        "image": "http://esenlik.com.tr//images/prod/5704.jpg"
    },
      {
        "quantity" : 0,
        "id": 6,
        "title": "Cay",
        "price": 3,
        "image": "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg"
    },
      {
        "quantity" : 0,
        "id": 7,
        "title": "Kahve",
        "price": 10,
        "image": "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ="
    },
      {
        "quantity" : 0,
        "id": 8,
        "title": "Soda",
        "price": 4,
        "image": "http://esenlik.com.tr//images/prod/2928.jpg"
    },
      {
        "quantity" : 0,
        "id": 9,
        "title": "Bisiklet",
        "price": 1000,
        "image": "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg"
    },
      {
        "quantity" : 0,
        "id": 10,
        "title": "Lüx Kol Saati",
        "price": 25000,
        "image": "data:image/jpeg;base64,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"
    },
      {
        "quantity" : 0,
        "id": 11,
        "title": "Bugatti Chiron",
        "price": 2500000,
        "image": "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg"
    },
      {
        "quantity" : 0,
        "id": 12,
        "title": "Iskender",
        "price": 50,
        "image": "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg"
    },
      {
        "quantity" : 0,
        "id": 13,
        "title": "Lahmacun",
        "price": 12,
        "image": "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg"
    },
      {
        "quantity" : 0,
        "id": 14,
        "title": "Malikane",
        "price": 2500000000,
        "image": "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg"
    },
      {
        "quantity" : 0,
        "id": 15,
        "title": "Helicopter",
        "price": 28750000,
        "image": "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg"
    },
      {
        "quantity" : 0,
        "id": 16,
        "title": "Luxury Yatch",
        "price": 17500000,
        "image": "https://d.neoldu.com/news/57966.jpg"
    },
      {
        "quantity" : 0,
        "id": 17,
        "title": "Limosine",
        "price": 1000000,
        "image": "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg"
    },
      {
        "quantity" : 0,
        "id": 18,
        "title": "Ada",
        "price": 125000000,
        "image": "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg"
    },
      {
        "quantity" : 0,
        "id": 22,
        "title": "Stadium",
        "price": 2500000,
        "image": "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg"
    },
      {
        "quantity" : 0,
        "id": 23,
        "title": "Bitcoin",
        "price": 60000,
        "image": "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg"
    },
      {
        "id": 19,
        "title": "Messi Tshirt",
        "price": 250,
        "image": "https://i.etsystatic.com/35195478/r/il/626d6c/3959944709/il_fullxfull.3959944709_m5py.jpg"
      }
]

export default function SpendMoney() {

    // localStorage.setItem('listProduct', JSON.stringify(productArr));
    const listProductCart = JSON.parse(localStorage.getItem('listProductCart')) || [];

    const [total, setTotal] = useState(0);
    const [selectQuantity, setSelectQuantity] = useState(0);

    const handleChange = (e) => {
        setSelectQuantity(e.target.value);

    }

    const handleAdd = ((item) => {
        const newData = [...listProductCart, {...item , quantity : 1}];
        localStorage.setItem('listProductCart', JSON.stringify(newData));
        location.reload();
    }) 

    const clearCart = () => {
        listProductCart.length = 0;
        localStorage.setItem('listProductCart', JSON.stringify(listProductCart));
        location.reload();
    }

    const increaseQuantity = (item, index) => {
        listProductCart.splice(index, 1, { ...item, quantity: item.quantity + 1 });
        let newCart = listProductCart;
        localStorage.setItem("listProductCart", JSON.stringify(newCart));
        location.reload();
      };
    
      const decreaseQuantity = (item, index) => {
        listProductCart.splice(index, 1, {
          ...item,
          quantity: item.quantity == 1 ? 1 : item.quantity - 1,
        });
        let newCart = listProductCart;
        localStorage.setItem("listProductCart", JSON.stringify(newCart));
        location.reload();
      };

      const getTotal = () => {
        const finalTotal = listProductCart.reduce((acc, cur) => {
            return acc + (cur.price * cur.quantity)
        }, 0)
        return finalTotal;
      }

      const removeItem = (item, index) => {
        listProductCart.splice(index, 1);
        let newCart = listProductCart;
        localStorage.setItem("listProductCart", JSON.stringify(newCart));
        location.reload();
      };

  return (
    <div className=''>
        <Header total={total} productArr={productArr} getTotal={getTotal} />
        <ListCards 
            selectQuantity={selectQuantity} 
            handleChange={handleChange} 
            productArr={productArr} 
            handleAdd={handleAdd}
        />
        <Table productArr={listProductCart} clearCart={clearCart} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} getTotal={getTotal} removeItem={removeItem} />
    </div>
  )
}
