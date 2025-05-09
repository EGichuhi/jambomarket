import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import SearchBar from '../common/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shops', path: '/shops' },
    { name: 'Categories', path: '/category/all' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-primary-700">Jambo<span className="text-accent-600">Market</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  isActive 
                    ? 'text-primary-600 font-medium' 
                    : 'text-secondary-700 hover:text-primary-600 transition-colors'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              onClick={toggleSearch}
              className="text-secondary-700 hover:text-primary-600 transition-colors p-1"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Cart */}
            <Link 
              to="/cart" 
              className="text-secondary-700 hover:text-primary-600 transition-colors p-1 relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* User - placeholder for authentication */}
            <Link 
              to="/login" 
              className="text-secondary-700 hover:text-primary-600 transition-colors p-1 hidden sm:block"
              aria-label="User account"
            >
              <User size={20} />
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-secondary-700 hover:text-primary-600 transition-colors p-1"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[60px] bg-white shadow-md z-40 animate-slide-down">
            <nav className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    isActive 
                      ? 'text-primary-600 font-medium text-lg' 
                      : 'text-secondary-700 hover:text-primary-600 transition-colors text-lg'
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/login"
                className="text-secondary-700 hover:text-primary-600 transition-colors text-lg flex items-center"
              >
                <User size={18} className="mr-2" />
                <span>Login / Register</span>
              </Link>
            </nav>
          </div>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4 animate-fade-in">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Search Products</h2>
                <button 
                  onClick={toggleSearch}
                  className="text-secondary-500 hover:text-secondary-700"
                  aria-label="Close search"
                >
                  <X size={24} />
                </button>
              </div>
              <SearchBar onSearch={() => setIsSearchOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;