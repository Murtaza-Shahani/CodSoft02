import React, { useEffect, useState } from 'react';
import '../App.css';

const CartList = ({ cart }) => {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const handleIncrement = (index) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCART(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCART(updatedCart);
  };

  return (
    <>
      <div>
        {cart?.map((cartItem, cartIndex) => {
          return (
            <div key={cartIndex}>
              <img src={cartItem.url} alt="" width={40} />
              <span>{cartItem.name}</span>
              <button onClick={() => handleDecrement(cartIndex)}>-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => handleIncrement(cartIndex)}>+</button>
              <span> RS:{cartItem.price * cartItem.quantity}</span>
            </div>
          );
        })}
        <p>
          Total: RS&nbsp;
          {
            // Calculate total price
            CART.reduce((total, item) => total + item.price * item.quantity, 0)
          }
        </p>
      </div>
    </>
  );
};

export default CartList;
