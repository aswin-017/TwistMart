// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import { AuthProvider } from './components/context/AuthContext';
import { ThemeProvider } from './components/context/ThemeContext'; // Import ThemeProvider
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
        <Route path="/" element={<AboutUs />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/product/:productId/:shopId" element={<ShopProductDetails />} />
        {/* Uncomment and add other routes as needed */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      <ToastContainer />
    </>
  );
};

const App = () => (
  <AuthProvider>
    <ThemeProvider defaultTheme="light"> {/* Wrap everything with ThemeProvider */}
      <AppContent />
    </ThemeProvider>
  </AuthProvider>
);

export default App;
