import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';

const products = [
  {
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "price": "1000"
  },
  {
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "price": "1000"
  },
  {
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "price": "1000"
  },
  {
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "price": "1000"
  },
  {
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "price": "1000"
  },
  {
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "price": "1000"
  },
  {
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "price": "1000"
  },
];

const ProductList = () => {
  return (
    <div className={'list'}>
      {products.map(item => (
        <ProductItem
          key={item}
          product={item}
          onAdd={onAdd}
          className={'item'}
        />
      ))}
    </div>
  )
}

export default ProductList