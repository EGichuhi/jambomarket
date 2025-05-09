import { Link } from 'react-router-dom';
import { categories } from '../../data/categoryData';

const Categories = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-900">Browse Categories</h2>
          <p className="mt-2 text-secondary-600 max-w-2xl mx-auto">
            Explore our wide range of authentic Kenyan products and services across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
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
    </section>
  );
};

export default Categories;