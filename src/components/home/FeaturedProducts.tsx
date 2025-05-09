import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { products, Product } from '../../data/productData';
import { shops } from '../../data/shopData';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 8);
  
  const handleAddToCart = (product: Product) => {
    const shop = shops.find(shop => shop.id === product.shopId)!;
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      shopId: product.shopId,
      shopName: shop.name,
    });
  };
  
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <div className="flex justify-between items-baseline mb-10">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900">Featured Products</h2>
            <p className="mt-2 text-secondary-600">Discover our handpicked selection of unique Kenyan treasures</p>
          </div>
          <Link to="/category/all" className="text-primary-600 hover:text-primary-700 font-medium hidden sm:block">
            View All Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => {
            const shop = shops.find(shop => shop.id === product.shopId);
            
            return (
              <div 
                key={product.id} 
                className="card group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden h-64">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  
                  {/* Quick add to cart button - appears on hover */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 bg-primary-600 text-white p-3 transition-transform duration-300 ${
                      hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'
                    }`}
                  >
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full flex items-center justify-center space-x-2 font-medium"
                    >
                      <ShoppingBag size={18} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <Link to={`/shop/${product.shopId}`}>
                    <p className="text-primary-600 text-sm font-medium hover:underline">
                      {shop?.name}
                    </p>
                  </Link>
                  
                  <Link to={`/product/${product.id}`}>
                    <h3 className="mt-1 text-lg font-semibold text-secondary-900 hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="mt-2 flex items-center">
                    <div className="flex text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" className="text-secondary-300" />
                    </div>
                    <span className="ml-1 text-xs text-secondary-600">(24)</span>
                  </div>
                  
                  <p className="mt-2 text-lg font-bold text-secondary-900">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link 
            to="/category/all" 
            className="btn btn-primary inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;