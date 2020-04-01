import React from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import ProductList from '../components/ProductList';

import Content from '../assets/db/productList.js';

function product({ match }) {
  const product = Content.filter(item => item.slug === match.params.slug)[0];
  const productDetails = {
    left: {
      imageSrc: product.imageSrc,
      product: true
    },
    right: {
      headLine: product.name,
      text: product.description,
      price: product.price,
      sizes: product.sizes,
      colors: product.colors
    }
  };

  return (
    <>
      <MainScreen content={productDetails} />
      <PromoList />
      <ProductList />
    </>
  );
}

export default product;
