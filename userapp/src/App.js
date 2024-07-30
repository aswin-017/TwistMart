// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import { AuthProvider } from './components/context/AuthContext';
import { ThemeProvider } from './components/context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';
import Address from './components/Address';
import Profile from './components/profile/Profile';
import ProductList from './components/product/ProductList';
import ProductDetails from './components/product/ProductDetails';
import ShopProductDetails from './components/product/ShopProductDetails';
import AboutUs from './components/about/about';
import ContactForm from './components/contact/ContactForm';
import Home from './components/home/Home';
import PageNotFound from './components/PageNotFound'; // Import PageNotFound component
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/signup']; // Define routes where Header should be hidden

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addaddress" element={<Address />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/product/:productId/:shopId" element={<ShopProductDetails />} />
        <Route path="*" element={<PageNotFound />} /> {/* Catch all undefined routes */}
      </Routes>
      <ToastContainer />
    </>
  );
};

const App = () => (
  <AuthProvider>
    <ThemeProvider defaultTheme="light">
      <AppContent />
    </ThemeProvider>
  </AuthProvider>
);

export default App;
