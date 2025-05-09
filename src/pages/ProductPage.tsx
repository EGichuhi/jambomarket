import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, getProductsByShop } from '../data/productData';
import { shops } from '../data/shopData';
import { Star, Truck, ShieldCheck, ArrowLeft, ChevronRight, MinusCircle, PlusCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold text-secondary-900">Product not found</h2>
        <p className="mt-4 text-secondary-600">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="mt-8 btn btn-primary inline-block">
          Return to Homepage
        </Link>
      </div>
    );
  }
  
  const shop = shops.find(s => s.id === product.shopId);
  const relatedProducts = getProductsByShop(product.shopId)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
    
  const handleAddToCart = () => {
    if (!shop) return;
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      shopId: product.shopId,
      shopName: shop.name,
    });
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-secondary-50 py-4">
        <div className="container-custom">
          <nav className="flex text-sm">
            <Link to="/" className="text-secondary-600 hover:text-primary-600">Home</Link>
            <ChevronRight size={16} className="mx-2 text-secondary-400" />
            <Link to={`/category/${product.category}`} className="text-secondary-600 hover:text-primary-600">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <ChevronRight size={16} className="mx-2 text-secondary-400" />
            <span className="text-secondary-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <div className="mb-8 lg:mb-0">
            <div className="relative h-96 sm:h-[500px] bg-secondary-100 rounded-lg overflow-hidden mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded overflow-hidden ${selectedImage === idx ? 'ring-2 ring-primary-500' : 'opacity-70'}`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            {shop && (
              <Link to={`/shop/${shop.id}`} className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
                <ArrowLeft size={16} className="mr-1" />
                Visit {shop.name}
              </Link>
            )}
            
            <h1 className="text-3xl font-bold text-secondary-900">{product.name}</h1>
            
            <div className="mt-4 flex items-center">
              <div className="flex text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" className="text-secondary-300" />
              </div>
              <span className="ml-2 text-secondary-600 text-sm">(24 reviews)</span>
            </div>
            
            <div className="mt-6">
              <p className="text-3xl font-bold text-secondary-900">${product.price.toFixed(2)}</p>
              <p className="mt-1 text-sm text-secondary-600">Taxes calculated at checkout</p>
            </div>
            
            <div className="mt-6 border-t border-b border-secondary-200 py-6">
              <p className="text-secondary-800 whitespace-pre-line">
                {product.description}
              </p>
            </div>
            
            {/* Shop Info */}
            {shop && (
              <div className="mt-6 flex items-center">
                <Link to={`/shop/${shop.id}`}>
                  <img 
                    src={shop.logo} 
                    alt={shop.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </Link>
                <div className="ml-3">
                  <Link to={`/shop/${shop.id}`} className="font-medium text-secondary-900 hover:text-primary-600">
                    {shop.name}
                  </Link>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-secondary-600">
                      {shop.location}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Add to Cart */}
            <div className="mt-8">
              <div className="flex items-center space-x-4 mb-4">
                <label htmlFor="quantity" className="text-secondary-700 font-medium">
                  Quantity:
                </label>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity} 
                    className="text-secondary-500 hover:text-primary-600"
                    aria-label="Decrease quantity"
                  >
                    <MinusCircle size={20} />
                  </button>
                  <span className="w-10 text-center font-medium text-secondary-900">
                    {quantity}
                  </span>
                  <button 
                    onClick={increaseQuantity} 
                    className="text-secondary-500 hover:text-primary-600"
                    aria-label="Increase quantity"
                  >
                    <PlusCircle size={20} />
                  </button>
                </div>
              </div>
              
              <button 
                onClick={handleAddToCart} 
                className="w-full btn btn-primary py-3 text-base"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
            
            {/* Product Features */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <Truck size={20} className="text-primary-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-secondary-900">Free delivery across Canada</h4>
                  <p className="text-sm text-secondary-600">For orders over $50</p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheck size={20} className="text-primary-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-secondary-900">Authentic Kenyan Products</h4>
                  <p className="text-sm text-secondary-600">Directly from Kenyan small business owners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">More from this shop</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="card group">
                  <Link to={`/product/${relatedProduct.id}`} className="block h-64 overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${relatedProduct.id}`}>
                      <h3 className="font-medium text-secondary-900 hover:text-primary-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <p className="mt-2 font-semibold text-secondary-900">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;