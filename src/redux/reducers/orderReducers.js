import { CLEAR_ORDER, CREATE_ORDER } from "../types";


const initialState = {
  order: []
}

const orderReducers = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_ORDER : return {
      ...state,
      order: action.payload
    }
    case CLEAR_ORDER : return {
      ...state,
      order: null
    }
    default: return state
  }
}

export default orderReducers;