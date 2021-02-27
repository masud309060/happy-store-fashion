import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";


export const addToCart = (cartItems, product) => {
  const copyCartItems = cartItems.slice();
  let alreadyInCart = false;
  copyCartItems.forEach(x => {
    if(x._id === product._id) {
      x.count++;
      alreadyInCart = true
    }
  });
  if(!alreadyInCart) {
    copyCartItems.push({...product, count: 1})
  }
  localStorage.setItem("cartItems", JSON.stringify(copyCartItems))
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        items: copyCartItems
      }
    })
  }
}

export const removeFromCart = (cartItems, id) => {
  const copyItems = cartItems.slice()
  const noMatchItems = copyItems.filter( x => x._id !== id ) 
  localStorage.setItem("cartItems", JSON.stringify(noMatchItems))

  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        items: noMatchItems
      }
    })
  }
}
