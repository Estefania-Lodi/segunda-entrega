import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const getProductById = async (productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = { id: productId, name: 'Product Name', description: 'Product Description', price: 100 };
        resolve(product);
      }, 1000);
    });
  };

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
