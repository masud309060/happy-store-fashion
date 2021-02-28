import React, { useEffect } from 'react';
import Products from '../Products/Products';
import './Home.css';
import Filter from '../Filter/Filter';
import Cart from '../Cart/Cart';
import { fetchProducts } from '../../redux/action/productsAction';
import { connect } from 'react-redux';
import Header from '../Header/Header';

const Home = ({ fetchProducts }) => {

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <div className="home_container">
      <Header />
      <div className="home_main">
        <div className="home_main_products">
          <Filter /> 
          <Products /> 
        </div>
        <div className="home_main_sidebar">
          <Cart /> 
        </div>
      </div>

      <div className="home_footer">
        <span>All Right is reserved &copy; {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.product
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts(dispatch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);





















  /* const sortProducts = (e) => {
    let sort = e.target.value;
   setProducts((products) => ({
     ...products,
     sort: sort,
     products: products.products.slice().sort((a,b) => {
       if ( sort === "lowest") {
          if(a.price > b.price) {
            return 1
          } else {
            return -1
          }
       } else if ( sort === "highest") {
          if(a.price < b.price) {
            return 1
          } else {
            return -1;
          }
       } else {
         if (a._id < b._id) {
           return 1;
         } else {
           return -1
         }
       }
     })
   }))
  }
  const sizeProducts = (e) => {
    if (e.target.value === "") {
      setProducts({
        ...products,
        size: "",
        products: data.products,
      })
    } else {
      setProducts({
        ...products,
        size: e.target.value,
        products: data.products.filter(
          product => product.availableSizes.indexOf(e.target.value) >= 0)
      })
    }
  } */



  /*   
    const addToCart = (product) => {
    const cartItems = products.cartItems ? products.cartItems.slice() : [];
    let alreadyIncart = false;
    
    cartItems.forEach((item) => {
      if(item._id === product._id) {
        item.count++;
        alreadyIncart = true;
      } 
    })
    if(!alreadyIncart) {
      cartItems.push({...product, count: 1 })
    }
    setProducts({...products, cartItems})
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    } 
*/


/* 
    const removeFromCart = (id) => {
      const cartItems = products.cartItems.slice();
      const notMatcheItem = cartItems.filter(item => item._id !== id)
      setProducts({...products, cartItems: notMatcheItem})
      localStorage.setItem("cartItems", JSON.stringify(notMatcheItem))
    }
*/


/* 

 const createOrder = (order) => {
    console.log(order)
    alert("Thank you for your order " + order.name)
  }

*/