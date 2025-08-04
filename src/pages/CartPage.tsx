import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, ChevronRight, Plus, Minus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();

  return (
    <>
      <Helmet>
        <title>Your Cart | ShopHub</title>
        <meta name="description" content="Review and checkout items in your ShopHub shopping cart" />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
            <ShoppingCart size={28} className="mr-3" />
            Your Cart
          </h1>

          {cart.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-xl">
              <ShoppingCart size={64} className="mx-auto text-slate-400 mb-6" />
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Your cart is empty</h2>
              <p className="text-slate-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Button as={Link} to="/" size="lg">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900">Cart Items ({cart.length})</h2>
                  </div>

                  <ul className="divide-y divide-slate-200">
                    {cart.map((item) => (
                      <motion.li 
                        key={`${item.product.id}-${item.color}-${item.size}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6"
                      >
                        <div className="flex flex-col sm:flex-row">
                          {/* Product image */}
                          <div className="w-full sm:w-24 h-24 bg-slate-100 rounded-md overflow-hidden mb-4 sm:mb-0">
                            <img 
                              src={item.product.images[0]} 
                              alt={item.product.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>

                          {/* Product details */}
                          <div className="flex-1 sm:ml-6">
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                              <div>
                                <h3 className="text-lg font-medium text-slate-900 mb-1">
                                  <Link 
                                    to={`/product/${item.product.id}`}
                                    className="hover:text-indigo-600 transition-colors"
                                  >
                                    {item.product.name}
                                  </Link>
                                </h3>
                                <div className="text-sm text-slate-500 mb-4">
                                  {item.color && <span className="mr-4">Color: {item.color}</span>}
                                  {item.size && <span>Size: {item.size}</span>}
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-lg font-medium text-slate-900">${item.product.price.toFixed(2)}</span>
                                {item.product.originalPrice && (
                                  <span className="text-sm text-slate-500 line-through ml-2">
                                    ${item.product.originalPrice.toFixed(2)}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
                              {/* Quantity controls */}
                              <div className="flex items-center mb-4 sm:mb-0">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus size={16} className={item.quantity <= 1 ? "text-slate-400" : "text-slate-700"} />
                                </button>
                                <span className="mx-3 w-8 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center"
                                >
                                  <Plus size={16} className="text-slate-700" />
                                </button>
                              </div>

                              {/* Remove button */}
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="flex items-center text-slate-500 hover:text-red-600 transition-colors"
                              >
                                <Trash2 size={16} className="mr-1" /> Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="p-6 bg-slate-50 flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={clearCart}
                      className="text-slate-600"
                    >
                      Clear Cart
                    </Button>
                    <Button 
                      as={Link} 
                      to="/"
                      variant="ghost"
                      className="text-indigo-600"
                      rightIcon={<ChevronRight size={16} />}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order summary */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24">
                  <div className="p-6 border-b border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Subtotal</span>
                        <span className="text-slate-900 font-medium">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Shipping</span>
                        <span className="text-slate-900 font-medium">
                          {subtotal >= 75 ? 'Free' : '$5.99'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Tax</span>
                        <span className="text-slate-900 font-medium">
                          ${(subtotal * 0.08).toFixed(2)}
                        </span>
                      </div>

                      <div className="border-t border-slate-200 pt-4 mt-4">
                        <div className="flex justify-between font-bold">
                          <span className="text-slate-900">Total</span>
                          <span className="text-indigo-600">
                            ${(subtotal + (subtotal >= 75 ? 0 : 5.99) + (subtotal * 0.08)).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      as={Link}
                      to="/checkout"
                      size="lg"
                      fullWidth
                      className="mt-6"
                    >
                      Proceed to Checkout
                    </Button>

                    <div className="mt-6 text-center">
                      <p className="text-xs text-slate-500 mb-2">We accept</p>
                      <div className="flex justify-center space-x-2">
                        <div className="w-10 h-6 bg-slate-800 rounded"></div>
                        <div className="w-10 h-6 bg-blue-500 rounded"></div>
                        <div className="w-10 h-6 bg-red-500 rounded"></div>
                        <div className="w-10 h-6 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default CartPage;