import { CLEAR_ORDER, CREATE_ORDER, FETCH_ORDERS_BY_EMAIL, FETCH_ORDERS_BY_EMAIL_FAILURE } from "../types";


const initialState = {
  order: [],
}

const orderReducers = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_ORDER : return {
      ...state,
      order: action.payload
    }
    case CLEAR_ORDER : return {
      ...state,
      order: null,
    }
    case FETCH_ORDERS_BY_EMAIL: return {
      ...state,
      orderByEmail: action.payload.order,
      error: ""
    }
    case FETCH_ORDERS_BY_EMAIL_FAILURE: return {
      ...state,
      orderByEmail: action.payload.order,
      error: action.payload.error
    }

    default: return state
  }
}

export default orderReducers;