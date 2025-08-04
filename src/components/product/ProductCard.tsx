import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { Badge } from '../ui/Badge';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i}
        size={14}
        className={i < rating ? "fill-amber-400 text-amber-400" : "text-amber-400"}
      />
    ));
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          {/* Main Image */}
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discount > 0 && (
              <Badge variant="error" className="px-2 py-1 font-medium">
                -{discount}% OFF
              </Badge>
            )}
            {product.isNew && (
              <Badge variant="secondary" className="px-2 py-1 font-medium">
                NEW
              </Badge>
            )}
            {product.isBestseller && (
              <Badge variant="warning" className="px-2 py-1 font-medium">
                HOT
              </Badge>
            )}
          </div>
          
          {/* Quick Actions - Always Visible */}
          <div className="absolute bottom-3 right-3 flex flex-col gap-2">
            <button
              onClick={handleWishlistToggle}
              className={`rounded-full p-2.5 ${
                isInWishlist(product.id) 
                  ? 'bg-indigo-100 text-[#FF5A5F]' 
                  : 'bg-white text-slate-700'
              } shadow-md transition-all`}
              aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart 
                size={18} 
                className={isInWishlist(product.id) ? "fill-[#FF5A5F]" : ""} 
              />
            </button>
            <button
              onClick={handleAddToCart}
              className="rounded-full bg-white p-2.5 text-slate-700 shadow-md transition-all"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-base font-semibold text-slate-800">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex mr-1">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs text-slate-500">({product.reviews})</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <span className="text-lg font-bold text-[#FF5A5F]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-slate-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};