import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, MinusCircle, PlusCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  // Group cart items by shop
  const itemsByShop = cartItems.reduce((groups, item) => {
    if (!groups[item.shopId]) {
      groups[item.shopId] = {
        shopName: item.shopName,
        items: []
      };
    }
    groups[item.shopId].items.push(item);
    return groups;
  }, {} as Record<string, { shopName: string, items: typeof cartItems }>);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // In a real app, this would navigate to checkout or process payment
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      alert('Thank you for your order! This is a demo, so no actual purchase was made.');
    }, 2000);
  };
  
  return (
    <div className="bg-secondary-50 min-h-screen py-8">
      <div className="container-custom">
        <h1 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-8">Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {Object.entries(itemsByShop).map(([shopId, { shopName, items }]) => (
                <div key={shopId} className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                  <div className="p-4 bg-secondary-50 border-b border-secondary-200">
                    <Link to={`/shop/${shopId}`} className="font-medium text-secondary-900 hover:text-primary-600 transition-colors">
                      {shopName}
                    </Link>
                  </div>
                  
                  <div>
                    {items.map((item) => (
                      <div key={item.id} className="p-4 border-b border-secondary-100 last:border-b-0">
                        <div className="flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-secondary-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <Link to={`/product/${item.id}`} className="text-lg font-medium text-secondary-900 hover:text-primary-600">
                                  {item.name}
                                </Link>
                                <p className="mt-1 text-sm text-secondary-500">
                                  ${item.price.toFixed(2)} per item
                                </p>
                              </div>
                              <p className="text-lg font-semibold text-secondary-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center border border-secondary-300 rounded-md">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 text-secondary-500 hover:text-primary-600 disabled:opacity-50"
                                  disabled={item.quantity <= 1}
                                  aria-label="Decrease quantity"
                                >
                                  <MinusCircle size={18} />
                                </button>
                                <span className="px-2 py-1 text-secondary-900 font-medium">
                                  {item.quantity}
                                </span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 text-secondary-500 hover:text-primary-600"
                                  aria-label="Increase quantity"
                                >
                                  <PlusCircle size={18} />
                                </button>
                              </div>
                              
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-secondary-500 hover:text-primary-600 transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-lg font-semibold text-secondary-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-secondary-700">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-secondary-700">
                    <span>Shipping estimate</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between text-secondary-700">
                    <span>Tax estimate</span>
                    <span>${(getCartTotal() * 0.13).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-secondary-200 pt-3 mt-3 flex justify-between font-semibold text-secondary-900">
                    <span>Order total</span>
                    <span>${(getCartTotal() + 5 + getCartTotal() * 0.13).toFixed(2)}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="mt-6 w-full btn btn-primary py-3 flex justify-center items-center"
                >
                  {isCheckingOut ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Checkout <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </button>
                
                <div className="mt-6">
                  <Link 
                    to="/category/all" 
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-center"
                  >
                    <ShoppingBag size={16} className="mr-2" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center">
              <ShoppingBag size={64} className="text-secondary-400" />
            </div>
            <h2 className="mt-4 text-xl font-medium text-secondary-900">Your cart is empty</h2>
            <p className="mt-2 text-secondary-600">
              Looks like you haven't added any products to your cart yet.
            </p>
            <div className="mt-6">
              <Link to="/category/all" className="btn btn-primary">
                Browse Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;