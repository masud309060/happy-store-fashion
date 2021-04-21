import React, { useEffect } from "react";
import "./Orders.css";
import { connect } from "react-redux";
import { fetchOrdersByEmail } from "../../redux/action/orderActions";
import { formateCurrency } from "../../util";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router";

const Orders = ({ userData, orders, fetchOrdersByEmail }) => {
  const history = useHistory();
  useEffect(() => {
    if (userData.authorise === false) {
      history.push("/login");
    }
    fetchOrdersByEmail(userData?.user.email);
  }, []);

  return (
    <div className="orders_container">
      <Header />
      <div className="orders">
        {orders && orders.length === 0 ? (
          <h3>You have no orders</h3>
        ) : (
          <h3>Your {orders && orders.length >= 2 ? "orders" : "order"} list</h3>
        )}
        {orders &&
          orders.map((orderItem) => (
            <div className="ordersItem" key={orderItem._id}>
              <div className="ordersItem_header">
                <div className="order_info">
                  <strong>Order: </strong> <br />
                  <em>
                    {new Date(orderItem.createdAt).toDateString()} {", "}{" "}
                    {new Date(orderItem.createdAt).toLocaleTimeString()}
                  </em>
                </div>
                <div className="order_id_and_total">
                  <strong className="order_id">
                    Order Id: {orderItem._id}
                  </strong>{" "}
                  <br />
                  <strong className="order_total">
                    Total Price: {formateCurrency(orderItem.total)}
                  </strong>
                </div>
              </div>
              {orderItem.cartItems?.map((product, i) => (
                <div className="orders_list" key={i}>
                  <span>{product.count} x </span>
                  <span>{product.title}</span>
                </div>
              ))}
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orderByEmail,
    userData: state.authentication,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrdersByEmail: (email) => dispatch(fetchOrdersByEmail(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
