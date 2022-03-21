import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
      <img src='https://placeimg.com/50/50/tech' alt='Handbag' />
      <div className='product__info'>
        <p>Bag</p>
        <p className='product__price'>
          <small>$</small>
          <strong>42.00</strong>
        </p>
        <div className='product__rating'>
          {Array()
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <button>Remove From Basket</button>
    </div>
  );
}

export default CheckoutProduct;
