import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:cursor-pointer">
      <img src={product.image?product.image:"https://p2-ofp.static.pub/fes/cms/2022/09/26/i6zlcap44kafmcywlh54d9rd1wieh1215035.png"} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>{product.company}</p>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>
      <Link to={`/products/${product.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
};

export default ProductCard;
