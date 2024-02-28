// ProductDetail.js
import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.nombre}</h2>
      <div>
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div>
        <p>{product.descripcion}</p>
        <p>Precio: ${product.precio}</p>
      </div>
    </div>
  );
};

export default ProductDetail;