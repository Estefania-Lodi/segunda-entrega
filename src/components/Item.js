import React from 'react';

const Item = ({ producto }) => {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      {/* Añadir más detalles aquí si es necesario */}
    </div>
  );
};

export default Item;
