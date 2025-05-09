import { MapPin, Heart, ShoppingBag, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-primary-700 py-16 md:py-24">
        <div 
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3978916/pexels-photo-3978916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundPosition: 'center' 
          }}
        ></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            About Jambo Market
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
            Connecting Kenyan entrepreneurs in Canada with customers who value authentic, handcrafted products and services
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900">Our Story</h2>
              <div className="mt-6 space-y-4 text-secondary-700">
                <p>
                  Jambo Market was founded in 2023 with a simple mission: to help Kenyan small business owners in Canada thrive by connecting them with customers who appreciate the quality and authenticity of their products and services.
                </p>
                <p>
                  The idea was born when our founder, a Kenyan immigrant to Canada, noticed that many talented artisans, chefs, and entrepreneurs from Kenya were struggling to reach customers beyond their immediate communities.
                </p>
                <p>
                  Today, Jambo Market serves as a digital marketplace that showcases the rich cultural heritage of Kenya through a diverse range of products and services, while helping Kenyan entrepreneurs build sustainable businesses in their new home.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/4350093/pexels-photo-4350093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kenyan artisan creating handcrafted products" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900">Our Values</h2>
            <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
              The principles that guide us in building a marketplace that benefits both sellers and buyers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Authenticity</h3>
              <p className="text-secondary-600">
                We celebrate and promote authentic Kenyan craftsmanship, traditions, and cultural heritage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent-100 text-accent-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Community</h3>
              <p className="text-secondary-600">
                We foster connections between Kenyan entrepreneurs and the broader Canadian community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-earth-100 text-earth-600 mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Empowerment</h3>
              <p className="text-secondary-600">
                We provide tools and resources to help Kenyan business owners succeed in the Canadian market.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Connection</h3>
              <p className="text-secondary-600">
                We bridge geographical distances to connect makers with appreciative customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900">Our Team</h2>
            <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
              The passionate individuals behind Jambo Market, dedicated to supporting Kenyan entrepreneurs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sarah Wanjiku, Founder & CEO" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900">Sarah Wanjiku</h3>
                <p className="text-primary-600">Founder & CEO</p>
                <p className="mt-3 text-secondary-600">
                  Sarah moved from Nairobi to Toronto in 2015 and founded Jambo Market to help fellow Kenyan entrepreneurs showcase their talents.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Michael Kamau, Head of Operations" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900">Michael Kamau</h3>
                <p className="text-primary-600">Head of Operations</p>
                <p className="mt-3 text-secondary-600">
                  With a background in logistics, Michael ensures smooth operations and helps sellers optimize their business processes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jennifer Oloo, Community Manager" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900">Jennifer Oloo</h3>
                <p className="text-primary-600">Community Manager</p>
                <p className="mt-3 text-secondary-600">
                  Jennifer builds and nurtures relationships with sellers and customers, organizing events to strengthen the Jambo community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Join Us */}
      <div className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">Join the Jambo Market Community</h2>
          <p className="mt-4 text-primary-100 max-w-2xl mx-auto">
            Whether you're a Kenyan entrepreneur looking to grow your business or a customer seeking authentic products, we welcome you to our community.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#" className="btn bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 font-semibold">
              Start Selling
            </a>
            <a href="#" className="btn bg-primary-600 text-white hover:bg-primary-800 border border-primary-500 px-6 py-3 font-semibold">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;