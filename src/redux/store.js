import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import { authenticationReducers } from "./reducers/authenticationReducers";
import cartReducers from "./reducers/cartReducers";
import orderReducers from "./reducers/orderReducers";
import productsReducers from './reducers/productsReducers'


const store = createStore(combineReducers({
   product: productsReducers,
   cart: cartReducers,  
   order: orderReducers,
   authentication: authenticationReducers,
  }), composeWithDevTools( applyMiddleware( /* logger, */ thunk ) ))

export default store;