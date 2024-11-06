// components/ProductCard.tsx


import { FC } from 'react';


const ProductCard = ({ product, discountPercentage = 40 }) => {
  const discountedPrice = (product.price - (product.price * discountPercentage) / 100).toFixed(2);

  return (
    <div className="bg-white shadow-md rounded-md p-4 max-w-xs relative">
      {/* Discount badge */}
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        -{discountPercentage}%
      </span>

      {/* Product Image */}
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />

      {/* Icon buttons */}
      <div className="absolute top-2 right-2 space-y-2">
        <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
          ❤️
        </button>
        <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
          👁️
        </button>
      </div>

      {/* Product details */}
      <div className="mt-4">
        <h3 className="text-gray-700 font-medium text-lg">{product.title}</h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-red-500 font-bold text-xl">${discountedPrice}</span>
          <span className="text-gray-400 line-through">${product.price}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mt-2">
          <span className="text-yellow-500">⭐</span>
          <span className="text-yellow-500">{product.rating.rate}</span>
          <span className="text-gray-600">({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
