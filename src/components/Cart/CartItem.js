import React from "react";
import "./CartItem.css";
import { formateCurrency } from "../../util";
import Fade from "react-reveal/Fade";

const CartItem = ({ cartItems, cartItem, removeFromCart }) => {
  return (
    <Fade left>
      <div className="cartItem">
        <img className="cartItem_img" src={cartItem.image} alt="" />
        <div className="cartItem_content">
          <p>{cartItem.title}</p>
          <div className="cartItem_control">
            <p>{`${formateCurrency(cartItem.price)} x ${cartItem?.count}`}</p>
            <button onClick={() => removeFromCart(cartItems, cartItem._id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CartItem;
