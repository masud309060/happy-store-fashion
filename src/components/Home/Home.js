import React, { useEffect } from "react";
import Products from "../Products/Products";
import "./Home.css";
import Filter from "../Filter/Filter";
import Cart from "../Cart/Cart";
import { fetchProducts } from "../../redux/action/productsAction";
import { connect } from "react-redux";
import Header from "../Header/Header";
import { authStateChange } from "../../redux/action/authenticatinActions";
import Footer from "../Footer/Footer";

const Home = ({ fetchProducts, authStateChange }) => {
  useEffect(() => {
    fetchProducts();
    authStateChange();
  }, []);

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
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts(dispatch)),
    authStateChange: () => dispatch(authStateChange()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
