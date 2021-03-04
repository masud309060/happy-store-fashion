import React, { useEffect } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { fetchOrdersByEmail } from '../../redux/action/orderActions';
import { formateCurrency } from '../../util';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Orders = ({userData, orders, fetchOrdersByEmail}) => {
  useEffect(()=> {
    fetchOrdersByEmail(userData?.user.email)
  }, [])
  
  return (
    <div className="orders_container">
      <Header /> 
      <div className="orders">
        <h3>Your {orders.length >= 2 ? "orders": "order"} list</h3>
        {
           orders && orders.map(orderItem => 
            <div className="ordersItem">
              <div className="ordersItem_header">
                <div className="order_info">
                  <strong>Order: </strong> <br/>
                  <em>{new Date(orderItem.createdAt).toDateString()} {", "} {new Date(orderItem.createdAt).toLocaleTimeString()}</em>
                </div>
                <div className="order_id_and_total">
                  <strong className="order_id">Order Id: {orderItem._id}</strong> <br/>
                  <strong className="order_total">Total Price: {formateCurrency(orderItem.total)}</strong>
                </div>
              </div>
              {
                orderItem.cartItems?.map(product => 
                  <div className="orders_list">
                    <span>{product.count} x </span>
                    <span>{product.title}</span>
                  </div>
                  )
              }
            </div>
            )
        }
      </div>
      <Footer /> 
    </div>
  );
};
const mapStateToProps = state => {
  return {
    orders: state.order.orderByEmail,
    userData: state.authentication
  }
}
const mapDispatchToProps = dispatch => {
   return {
     fetchOrdersByEmail: (email) => dispatch(fetchOrdersByEmail(email))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);