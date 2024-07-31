import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner_mens from './Components/assets/banner_mens.png';
import banner_womens from './Components/assets/banner_women.png';
import banner_kids from './Components/assets/banner_kids.png';
import ShopContextProvider from './Context/ShopContext';
import SearchProductPage from './Pages/SearchProductPage';
import CartContextProvider from './Context/CartContext';


function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={banner_mens} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={banner_womens} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
            <Route path='/product/subcategory/:id' element={<ShopCategory />} />
            <Route path='/product/gender/:gender' element={<ShopCategory />} />
            <Route path='/catalogsearch/result/:result' element={<SearchProductPage />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
