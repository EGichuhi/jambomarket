import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import ShopsPage from './pages/ShopsPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import BusinessSignupPage from './pages/BusinessSignupPage';

// Contexts
import { CartProvider } from './contexts/CartContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-medium text-secondary-700">Loading Jambo Market...</p>
        </div>
      </div>
    );
  }

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="shop/:id" element={<ShopPage />} />
          <Route path="shops" element={<ShopsPage />} />
          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="register" element={<BusinessSignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;