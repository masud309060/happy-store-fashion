import React from 'react';
import { connect } from 'react-redux';
import { filterProductsBySizes, sortProductsByPrices } from '../../redux/action/productsAction';
import './Filter.css';

const Filter = ({ products, sort, size, filterItems, filterProductsBySizes, sortProductsByPrices}) => {

  return (
    <div className="filter">
      <div className="filter_result">{filterItems?.length} Products</div>
      <div className="filter_sort">
        Order {" "}
        <select 
        defaultValue={sort} 
        onChange={(e) => sortProductsByPrices(filterItems, e.target.value)} 
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter_size">
        Filter {" "}
        <select 
        defaultValue={size} 
        onChange={(e) => filterProductsBySizes(products, e.target.value)} 
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="X">X</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = state => {

  return {
    products: state.product.products,
    size: state.product.size,
    sort: state.product.sort,
    filterItems: state.product.filterItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterProductsBySizes: (products, size) => dispatch(filterProductsBySizes(products, size)),
    sortProductsByPrices: (filterItems, sort) => dispatch(sortProductsByPrices(filterItems, sort))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Filter);