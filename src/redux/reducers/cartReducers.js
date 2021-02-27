import { ADD_TO_CART, REMOVE_FROM_CART } from "../types"


const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || []
}

const cartReducers = ( state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART: return {
      ...state,
      cartItems: action.payload.items
    }
    case REMOVE_FROM_CART: return {
      ...state,
      cartItems: action.payload.items
    }
    default: return state
  }
}

export default cartReducers;