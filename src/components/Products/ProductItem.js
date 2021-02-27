import React, { useState } from 'react';
import { formateCurrency } from '../../util';
import './ProductItem.css';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'

const ProductItem = ({product, addToCart, cartItems}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showProduct, setShowProduct] = useState(null)
  
  Modal.setAppElement('#root')
  const openModal = (product) => {
    setModalIsOpen(true)
    setShowProduct(product)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }
  return (
    <>
    <Fade bottom>
      <div className="productItem">
        <a href={'#'+ product._id} 
          onClick={() => openModal(product)}
          >
          <img className="productItem_img" src={product.image} alt={product.title}/>
          <p className="productItem_title">{product.title}</p>
        </a>
        <div className="productItem_price">
          <div className="productItem_price">
            {formateCurrency(product.price)}
          </div> 
          <button onClick={() => addToCart(cartItems, product)} className="Primary_btn">
            Add To Cart
          </button>
        </div>
      </div>
    </Fade>
    {
      showProduct && 
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal} 
      >
      <Zoom>
      <div className="modal_slide" id="modal_slide">
        <button onClick={closeModal} className="modal_btn"> x </button>
        <div className="modal_products">
          <img src={showProduct.image} alt={showProduct.title}/>
          <div className="modal_products_info">
            <p>
              <strong>{showProduct.title}</strong>
            </p>
            <p>{showProduct.description}</p>
            <div>
              AvailableSizes: {" "}
              {
                showProduct.availableSizes.map(x => 
                <span key={x}>
                  {" "} <button> {x} </button>
                </span>)
              }
            </div>
            <div className="productItem_price" style={{margin:"2rem 0"}}>
              <div className="productItem_price">
                {formateCurrency(showProduct.price)}
              </div> 
              <button onClick={() => {
                addToCart(cartItems, product);
                closeModal();
                }}
                className="Primary_btn">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      </Zoom>
    </Modal>
    }
    </>
  );
};


export default ProductItem;