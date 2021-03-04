import React, { useState } from 'react';
import './CheckoutFrom.css'
import Fade from 'react-reveal/Fade'

const CheckoutForm = ({cartItems, createOrder, setModalIsOpen}) => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    address: "",
  })

  const handleOrder = (e) => {
    e.preventDefault()
    
    const order = {
      name: inputData.name,
      email: inputData.email,
      address: inputData.address,
      total: cartItems.reduce((total, item) => total + item.price * item.count, 0),
      cartItems: cartItems,
    }
    createOrder(order)
    setModalIsOpen(true)
  }

  const handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Fade right>
    <div className="checkoutForm">
      <form onSubmit={handleOrder}>
        <div className="form_control">
          <label htmlFor="name">Name: </label>
          <input 
          id="name"
          type="text" 
          name="name"
          onChange={handleInput}
          required
          />
        </div>
        <div className="form_control">
          <label htmlFor="email">Email: </label>
          <input 
          id="email"
          type="email" 
          name="email"
          onChange={handleInput}
          required
          />
        </div>
        <div className="form_control">
          <label htmlFor="address">Address: </label>
          <input 
          id="address"
          type="text" 
          name="address"
          onChange={handleInput}
          required
          />
        </div>
        <div className="form_control">
          <button type="submit">Checkout</button>
        </div>
      </form>
    </div>
    </Fade>
  );
};

export default CheckoutForm;