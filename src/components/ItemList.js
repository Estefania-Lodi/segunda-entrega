import React from 'react';
import Product from './Product';

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => (
        <Product key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
