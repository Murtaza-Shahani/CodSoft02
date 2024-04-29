import React from 'react';
import '../App.css';
import { useState } from 'react';

const ProductList = ({ product,addToCart }) => {
  return (
    <>
      <div className="flex">
        {product.map((productItem, productIndex) => {
          return (
            <div key={productIndex} style={{ width: '50%' }}>
                <div className='productItem'>
                    <img src={productItem.url} alt="" width="100%" />
                     <p>{productItem.name} | {productItem.category}</p>
                     <p>{productItem.seller}</p>
                     <p> RS.{productItem.price}</p>
                     <button onClick={()=> addToCart (productItem)}> Add to Cart </button>


              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
