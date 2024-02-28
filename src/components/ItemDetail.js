import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
