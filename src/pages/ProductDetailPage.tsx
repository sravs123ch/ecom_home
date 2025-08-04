import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Star, Truck, ShieldCheck, RotateCcw, Heart, ShoppingCart, 
  ChevronRight, Share2, Minus, Plus, Info
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
  const product = products.find(p => p.id === productId);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
        <p className="text-slate-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button as={Link} to="/">Return to Home</Button>
      </div>
    );
  }

  // Get similar products (same category)
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };

  return (
    <>
      <Helmet>
        <title>{`${product.name} | ShopHub`}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <main className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center text-sm">
              <li>
                <Link to="/" className="text-slate-500 hover:text-indigo-600 transition-colors">Home</Link>
              </li>
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              <li>
                <Link 
                  to={`/category/${product.category}`} 
                  className="text-slate-500 hover:text-indigo-600 transition-colors capitalize"
                >
                  {product.category.replace('-', ' ')}
                </Link>
              </li>
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              <li className="text-slate-900 font-medium truncate max-w-[200px]">
                {product.name}
              </li>
            </ol>
          </nav>

          {/* Product details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product images */}
            <div>
              <div className="relative aspect-square mb-4 bg-slate-100 rounded-xl overflow-hidden">
                <motion.img 
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === idx 
                        ? 'border-indigo-600' 
                        : 'border-transparent hover:border-indigo-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  {product.isNew && (
                    <Badge variant="secondary" className="mr-2">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge variant="warning">Bestseller</Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        size={18} 
                        className={idx < Math.floor(product.rating) 
                          ? "fill-amber-400 text-amber-400" 
                          : "fill-slate-200 text-slate-200"
                        }
                      />
                    ))}
                    <span className="ml-2 text-sm text-slate-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="ml-3 text-lg text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
                    )}
                    {product.originalPrice && (
                      <Badge variant="error" className="ml-3">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-slate-700">{product.description}</p>
              </div>

              {/* Color selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-slate-700 mb-3">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 rounded-full border transition-colors ${
                          selectedColor === color
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                            : 'border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-slate-700">Size</h3>
                    <button className="text-xs text-indigo-600 inline-flex items-center">
                      <Info size={14} className="mr-1" />
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
                          selectedSize === size
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                            : 'border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-slate-700 mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="w-10 h-10 rounded-l-md border border-r-0 border-slate-300 flex items-center justify-center"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} className={quantity <= 1 ? "text-slate-400" : "text-slate-700"} />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    min="1"
                    className="w-16 h-10 border-y border-slate-300 text-center focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 rounded-r-md border border-l-0 border-slate-300 flex items-center justify-center"
                  >
                    <Plus size={16} className="text-slate-700" />
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={handleAddToCart}
                  leftIcon={<ShoppingCart size={18} />}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant={isInWishlist(product.id) ? "secondary" : "outline"} 
                  size="lg" 
                  fullWidth
                  onClick={handleWishlistToggle}
                  leftIcon={<Heart size={18} className={isInWishlist(product.id) ? "fill-white" : ""} />}
                >
                  {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
                </Button>
              </div>

              {/* Additional features */}
              <div className="border-t border-slate-200 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  <div className="flex items-start">
                    <Truck size={18} className="text-slate-700 mt-0.5 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">Free Shipping</h4>
                      <p className="text-xs text-slate-500">Free standard shipping on orders over $75</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheck size={18} className="text-slate-700 mt-0.5 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">Secure Payment</h4>
                      <p className="text-xs text-slate-500">SSL/TLS encryption for all transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <RotateCcw size={18} className="text-slate-700 mt-0.5 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">Easy Returns</h4>
                      <p className="text-xs text-slate-500">30-day money back guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Share2 size={18} className="text-slate-700 mt-0.5 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">Share Product</h4>
                      <div className="flex space-x-2 mt-1">
                        <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar products */}
          <div className="mt-20">
            <FeaturedProducts 
              title="You Might Also Like" 
              products={similarProducts}
              viewAllLink={`/category/${product.category}`} 
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetailPage;