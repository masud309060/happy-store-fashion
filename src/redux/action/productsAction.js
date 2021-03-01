import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FILTER_PRODUCTS_BY_SIZES, ORDER_PRODUCTS_BY_PRICES  } from "../types"


export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest)
    try {
      const res = await fetch('/api/products')  
      const data = await res.json()
      dispatch(fetchProductsSuccess(data))
    } catch (error) {
      dispatch(fetchProductsFailure(error.message))
    }

  }
}

export const filterProductsBySizes = (products, size) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_SIZES,
      payload: {
        size: size,
        items: size === "" ? products : 
        products.filter( x => x.availableSizes.indexOf(size) >= 0 )
      }
    })
  }
}

export const sortProductsByPrices = (filterProducts, sort) => {
  const sortProducts = filterProducts.slice()

  return (dispatch) => {
    dispatch({
      type: ORDER_PRODUCTS_BY_PRICES,
      payload: {
        sort: sort,
        items: sort === "" ? 
        sortProducts.sort((a,b) => a._id > b._id ? 1 : -1) : 
        sort === "lowest" ? 
        sortProducts.sort((a, b) => a.price > b.price ? 1 : -1) : 
        sortProducts.sort((a, b) => a.price < b.price ? 1 : -1)
      }
    })
  }
}