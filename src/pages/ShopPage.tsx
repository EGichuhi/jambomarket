import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Mail, Calendar, Filter } from 'lucide-react';
import { shops } from '../data/shopData';
import { getProductsByShop } from '../data/productData';

const ShopPage = () => {
  const { id } = useParams<{ id: string }>();
  const shop = shops.find(s => s.id === id);
  
  if (!shop) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold text-secondary-900">Shop not found</h2>
        <p className="mt-4 text-secondary-600">The shop you're looking for doesn't exist or has been removed.</p>
        <Link to="/shops" className="mt-8 btn btn-primary inline-block">
          Browse Other Shops
        </Link>
      </div>
    );
  }
  
  const shopProducts = getProductsByShop(shop.id);
  
  return (
    <div className="bg-white">
      {/* Shop Header */}
      <div className="relative">
        <div className="h-64 md:h-80 overflow-hidden">
          <img 
            src={shop.coverImage} 
            alt={`${shop.name} cover`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        
        <div className="container-custom relative -mt-32 z-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="md:flex md:items-end">
              <div className="flex-shrink-0 flex justify-center md:justify-start md:mr-6 -mt-16">
                <img 
                  src={shop.logo} 
                  alt={shop.name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="mt-6 md:mt-0 text-center md:text-left flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-secondary-900">{shop.name}</h1>
                <div className="mt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <div className="flex items-center text-secondary-700">
                    <MapPin size={16} className="mr-1 text-primary-600" />
                    {shop.location}
                  </div>
                  <div className="flex items-center text-secondary-700">
                    <Star size={16} className="mr-1 text-yellow-400" fill="currentColor" />
                    <span>{shop.rating} ({shop.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center text-secondary-700">
                    <Calendar size={16} className="mr-1 text-primary-600" />
                    Member since {shop.joinedDate}
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
                <a 
                  href={`mailto:contact@${shop.name.toLowerCase().replace(/\s/g, '')}.com`} 
                  className="btn btn-primary flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  Contact Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-8">
        {/* Shop Description */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-secondary-900 mb-3">About {shop.name}</h2>
          <p className="text-secondary-700">{shop.description}</p>
          
          {/* Shop Categories */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-secondary-900 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {shop.categories.map((category, idx) => (
                <Link 
                  key={idx} 
                  to={`/category/${category}`}
                  className="bg-secondary-100 hover:bg-secondary-200 text-secondary-800 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Shop Products */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-secondary-900">Products</h2>
            <button className="btn btn-secondary flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
            </button>
          </div>
          
          {shopProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {shopProducts.map((product) => (
                <div key={product.id} className="card group">
                  <Link to={`/product/${product.id}`} className="block h-64 overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-medium text-secondary-900 hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="mt-2 flex items-center">
                      <div className="flex text-yellow-400">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" className="text-secondary-300" />
                      </div>
                      <span className="ml-1 text-xs text-secondary-600">(12)</span>
                    </div>
                    <p className="mt-2 font-semibold text-secondary-900">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-secondary-50 rounded-lg">
              <p className="text-secondary-600">No products available currently.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;