import React, { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Cart.css';
import CartItem from './CartItem';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/action/cartActions';
import { clearOder, createOrder } from '../../redux/action/orderActions';
import Modal from 'react-modal';
import { formateCurrency } from '../../util';

const Cart = ({cartItems,  order, removeFromCart, createOrder, clearOrder}) => {
  const [showForm, setShowForm] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
    clearOrder()
    setShowForm(false)
  }

  return (
    <>
      <div className="cart">
        <div className="cart_header">
          {
            cartItems.length ?  
            <p>You have {cartItems.length} items in your cart</p> : 
            <p>Your cart is empty</p>
          }
        </div>
        <div>
          {
            cartItems?.map(cartItem => <CartItem 
              cartItems={cartItems}
              cartItem={cartItem} 
              removeFromCart={removeFromCart} 
              key={cartItem._id}/> )
          }
        </div>
        {
          order &&  modalIsOpen &&
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          >
            <Zoom>
              <div className="order_modal">
                <button onClick={closeModal} className="modal_btn">x</button>
                <h3>Your order is placed</h3>
                <h2>Order Id: {" "} {order._id}</h2>
                <div className="order_details">
                  <div>
                    <span>Name: </span>
                    <span>{order.name}</span>
                  </div>
                  <div>
                    <span>Email: </span>
                    <span>{order.email} </span>
                  </div>
                  <div>
                    <span>Address: {" "} </span>
                    <span> {order.address} </span>
                  </div>
                  <div>
                    <span>Date: </span>
                    <span>{new Date(order.createdAt).toLocaleDateString()} {" "} 
                      <strong>{new Date(order.createdAt).toLocaleTimeString()}</strong>
                    </span>
                  </div>
                  <div>
                    <span>Total: </span>
                    <strong>{ formateCurrency(+order.total)}</strong>
                  </div>
                  <div className="order_cart">
                    <strong style={{marginRight: "auto"}}>Products List: </strong>
                    {
                      order.cartItems?.map(item => 
                      <div className="order_cart_item">
                        <span>{item.count}</span> 
                        <span> x </span>
                        <span> {item.title}</span>
                      </div>)
                    }
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        }
        <Fade top>
          <div className="cart_total">
            {
              cartItems?.length > 0 ? 
              <>
              <p>
              {
                formateCurrency(
                  cartItems?.reduce((total, item) => 
                  total + item.price * item.count, 0)
                  )
              }
              </p> 
              <button onClick={ () => setShowForm(true) }>
                Proceed Checkout
              </button>
              </>
              : " "
            }
          </div>
        </Fade>
        {
          showForm && cartItems.length > 0 &&
          <CheckoutForm cartItems={cartItems} createOrder={createOrder} setModalIsOpen={setModalIsOpen}/>
        }
      </div>
      
    </>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    order: state.order.order
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (cartItems, product) => dispatch(removeFromCart(cartItems, product)),
    createOrder: (order) => dispatch(createOrder(order)),
    clearOrder: () => dispatch(clearOder())
  }  
}

export default connect(mapStateToProps, mapDispatchToProps )(Cart);