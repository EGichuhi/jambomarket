import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { shops } from '../../data/shopData';

const FeaturedShops = () => {
  const featuredShops = shops.filter(shop => shop.featured).slice(0, 3);
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-baseline mb-10">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900">Featured Shops</h2>
            <p className="mt-2 text-secondary-600">Discover unique Kenyan businesses in Canada</p>
          </div>
          <Link to="/shops" className="text-primary-600 hover:text-primary-700 font-medium hidden sm:block">
            View All Shops
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredShops.map((shop) => (
            <div key={shop.id} className="card group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={shop.coverImage} 
                  alt={shop.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" className={shop.rating >= 4.8 ? 'text-yellow-400' : 'text-gray-300'} />
                    </div>
                    <span className="text-sm text-white">({shop.reviewCount})</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center -mt-8 mb-3">
                  <Link to={`/shop/${shop.id}`} className="block">
                    <img 
                      src={shop.logo} 
                      alt={`${shop.name} logo`} 
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </Link>
                </div>
                
                <Link to={`/shop/${shop.id}`}>
                  <h3 className="text-xl font-semibold text-secondary-900 hover:text-primary-600 transition-colors">
                    {shop.name}
                  </h3>
                </Link>
                
                <p className="mt-2 text-secondary-600 text-sm flex items-center">
                  <MapPin size={14} className="mr-1 text-primary-500" />
                  {shop.location}
                </p>
                
                <p className="mt-3 text-secondary-600 text-sm line-clamp-2">
                  {shop.description}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {shop.categories.slice(0, 3).map((category, idx) => (
                    <Link 
                      key={idx} 
                      to={`/category/${category}`}
                      className="text-xs bg-secondary-100 hover:bg-secondary-200 text-secondary-800 px-2 py-1 rounded-full transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-secondary-100">
                  <Link 
                    to={`/shop/${shop.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                  >
                    Visit Shop
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link 
            to="/shops" 
            className="btn btn-primary inline-block"
          >
            View All Shops
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShops;