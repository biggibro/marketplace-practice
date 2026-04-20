import React from 'react';

import './Home.css';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { ProductCard } from '../components/productCard/ProductCard';
import { ProductSort } from '../components/productSort/ProductSort';

export const Home = () => {
  return (
    <div className="containerHome">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <ProductSort />
      </div>
      <div className="content">
        <ProductCard />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
