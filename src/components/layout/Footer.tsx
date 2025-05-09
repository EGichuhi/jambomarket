import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-secondary-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">Jambo Market</h3>
            <p className="mb-4 text-secondary-300">
              A marketplace connecting Kenyan small business owners in Canada with customers looking for authentic products and services.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shops" className="text-secondary-300 hover:text-primary-500 transition-colors">Browse Shops</Link>
              </li>
              <li>
                <Link to="/category/all" className="text-secondary-300 hover:text-primary-500 transition-colors">All Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-300 hover:text-primary-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/clothing" className="text-secondary-300 hover:text-primary-500 transition-colors">Clothing & Textiles</Link>
              </li>
              <li>
                <Link to="/category/art" className="text-secondary-300 hover:text-primary-500 transition-colors">Art & Crafts</Link>
              </li>
              <li>
                <Link to="/category/food" className="text-secondary-300 hover:text-primary-500 transition-colors">Food & Spices</Link>
              </li>
              <li>
                <Link to="/category/jewelry" className="text-secondary-300 hover:text-primary-500 transition-colors">Jewelry</Link>
              </li>
              <li>
                <Link to="/category/services" className="text-secondary-300 hover:text-primary-500 transition-colors">Services</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic space-y-3">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-primary-500" />
                <span className="text-secondary-300">123 Market Street, Toronto, ON M5V 2T6, Canada</span>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-primary-500" />
                <a href="tel:+14161234567" className="text-secondary-300 hover:text-primary-500 transition-colors">+1 (416) 123-4567</a>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-primary-500" />
                <a href="mailto:hello@jambomarket.com" className="text-secondary-300 hover:text-primary-500 transition-colors">hello@jambomarket.com</a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-6 border-t border-secondary-800 text-center sm:flex sm:justify-between">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} Jambo Market. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm">
              <li>
                <Link to="/privacy" className="text-secondary-400 hover:text-primary-500 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-secondary-400 hover:text-primary-500 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/sellers" className="text-secondary-400 hover:text-primary-500 transition-colors">Sell on Jambo</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;