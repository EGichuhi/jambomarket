import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categoryData';
import { getProductsByCategory } from '../data/productData';
import { shops } from '../data/shopData';
import { Filter, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedShops, setSelectedShops] = useState<string[]>([]);
  
  const category = id === 'all' 
    ? { id: 'all', name: 'All Products', description: 'Browse all products from Kenyan businesses in Canada', image: '', count: 0 }
    : categories.find(c => c.id === id);
  
  if (!category) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold text-secondary-900">Category not found</h2>
        <p className="mt-4 text-secondary-600">The category you're looking for doesn't exist or has been removed.</p>
        <Link to="/category/all" className="mt-8 btn btn-primary inline-block">
          Browse All Products
        </Link>
      </div>
    );
  }
  
  let products = getProductsByCategory(category.id);

  // Apply filters
  if (selectedShops.length > 0) {
    products = products.filter(product => selectedShops.includes(product.shopId));
  }
  products = products.filter(product => 
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Apply sorting
  switch (sortBy) {
    case 'price-low':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      products.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      products.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      // 'featured' is default, no additional sorting needed
      break;
  }
  
  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const shop = shops.find(s => s.id === product.shopId);
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

  const toggleShopFilter = (shopId: string) => {
    setSelectedShops(prev => 
      prev.includes(shopId)
        ? prev.filter(id => id !== shopId)
        : [...prev, shopId]
    );
  };
  
  return (
    <div className="bg-white">
      {/* Category Header */}
      <div className="bg-secondary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
          <p className="mt-4 text-secondary-300 max-w-2xl">
            {category.description}
          </p>
          
          {/* Category navigation for non-"all" categories */}
          {id !== 'all' && (
            <div className="mt-8">
              <Link to="/category/all" className="text-primary-400 hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to All Categories
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <div className="container-custom py-8">
        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <h2 className="text-lg font-medium text-secondary-900">
            {products.length} products
          </h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input pr-8 appearance-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary-500 pointer-events-none" />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-secondary flex items-center justify-center"
            >
              <Filter size={16} className="mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Panel */}
          {showFilters && (
            <div className="lg:col-span-1 bg-white p-4 rounded-lg shadow-sm border border-secondary-200">
              <h3 className="font-semibold text-secondary-900 mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-secondary-900 mb-2">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-secondary-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Shop Filter */}
              <div>
                <h4 className="text-sm font-medium text-secondary-900 mb-2">Shops</h4>
                <div className="space-y-2">
                  {shops.map(shop => (
                    <label key={shop.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedShops.includes(shop.id)}
                        onChange={() => toggleShopFilter(shop.id)}
                        className="rounded text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-secondary-700">{shop.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className={`${showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => {
                  const shop = shops.find(s => s.id === product.shopId);
                  
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
                            onClick={() => handleAddToCart(product.id)}
                            className="w-full flex items-center justify-center space-x-2 font-medium"
                          >
                            <ShoppingBag size={18} />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        {shop && (
                          <Link to={`/shop/${product.shopId}`}>
                            <p className="text-primary-600 text-sm font-medium hover:underline">
                              {shop.name}
                            </p>
                          </Link>
                        )}
                        
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
            ) : (
              <div className="text-center py-16 bg-secondary-50 rounded-lg">
                <p className="text-secondary-700 text-lg">No products available in this category.</p>
                <Link to="/category/all" className="mt-4 btn btn-primary inline-block">
                  Browse All Products
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Other Categories */}
        {id !== 'all' && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Other Categories</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categories.filter(c => c.id !== id).slice(0, 4).map((category) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group"
                >
                  <div className="card overflow-hidden h-full">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-secondary-500">
                        {category.count} products
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;