import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER, FETCH_ORDERS_BY_EMAIL, FETCH_ORDERS_BY_EMAIL_FAILURE } from "../types"

export const createOrder = (order) => {
  return (dispatch) => {
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ 
        type: CREATE_ORDER,
        payload: data
      })
      localStorage.clear("cartItems")
      dispatch({
        type: CLEAR_CART
      })
    })
  }
}

export const clearOder = () => {
  return (dispatch )=> {
    dispatch({
      type: CLEAR_ORDER
    })
  }
}

export const fetchOrdersByEmail = (email) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/orders/data?email=${email}`)
      const data = await res.json()
      dispatch({
        type: FETCH_ORDERS_BY_EMAIL,
        payload: {
          order: data,
          error: ""
        }
      })
    } catch (error) {
      dispatch({
        type: FETCH_ORDERS_BY_EMAIL_FAILURE,
        payload: {
          error: error.message,
          order: []
        }
      })
    }
  }
}