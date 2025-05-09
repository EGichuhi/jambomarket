import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-secondary-900 py-16 md:py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3978916/pexels-photo-3978916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundPosition: 'center' 
        }}
      ></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            Discover <span className="text-primary-400">Authentic</span> Kenyan Products in Canada
          </h1>
          <p className="mt-6 text-lg md:text-xl text-secondary-200 md:pr-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Connect with Kenyan small business owners in Canada offering unique products, crafts, and services that bring the essence of Kenya to your doorstep.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/shops" 
              className="btn btn-primary px-6 py-3"
            >
              Explore Shops
            </Link>
            <Link 
              to="/category/all" 
              className="btn btn-secondary text-secondary-900 px-6 py-3 flex items-center"
            >
              Browse Products <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;