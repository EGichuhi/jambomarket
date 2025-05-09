import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedShops from '../components/home/FeaturedShops';
import Categories from '../components/home/Categories';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <FeaturedShops />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;