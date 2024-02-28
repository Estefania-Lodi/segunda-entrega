import React from 'react';

const Product = ({ producto }) => {
  return (
    <div className="product">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.nombre} className="productImage" />
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default Product;
