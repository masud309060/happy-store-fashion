import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/action/cartActions';
import ProductItem from './ProductItem';
import './Products.css';

const Products = ({filterItems, products, cartItems, addToCart }) => {
  
  return (
    <div className="products">
        {
          (products.length <= 0) ? 
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif"
           alt="loading-gif" width="300" /> :
          filterItems?.map(product => 
          <ProductItem product={product} cartItems={cartItems} addToCart={addToCart} key={product._id}/> )
        }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filterItems: state.product.filterItems,
    cartItems: state.cart.cartItems,
    products: state.product.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cartItems, product) => dispatch(addToCart(cartItems, product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);