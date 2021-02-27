import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FILTER_PRODUCTS_BY_SIZES, ORDER_PRODUCTS_BY_PRICES } from "../types";

const initialState = {
  loading: false,
  products: [],
  error: '',
}


const productsReducers = ( state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_REQUEST: return {
      ...state,
      loading: true
    }
    case FETCH_PRODUCTS_SUCCESS: return {
      ...state,
      loading: false,
      products: action.payload,
      filterItems: action.payload,
      error: ''
    }
    case FETCH_PRODUCTS_FAILURE: return {
      ...state,
      loading: false,
      products: [],
      error: action.payload
    }
    case FILTER_PRODUCTS_BY_SIZES: return {
      ...state,
      size: action.payload.size,
      filterItems: action.payload.items
    }
    case ORDER_PRODUCTS_BY_PRICES: return {
      ...state,
      sort: action.payload.sort,
      filterItems: action.payload.items
    }

    default: return state

  }
}

export default productsReducers;