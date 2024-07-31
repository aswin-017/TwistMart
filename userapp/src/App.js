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
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectIfAuthenticated from './components/RedirectIfAuthenticated';

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/signup']; // Define routes where Header should be hidden

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/login" element={<RedirectIfAuthenticated element={Login} />} />
        <Route path="/signup" element={<RedirectIfAuthenticated element={Signup} />} />
        <Route path="/addaddress" element={<ProtectedRoute element={Address} />} />
        <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cart" element={<ProtectedRoute element={Cart} />} />
        <Route path="/checkout" element={<ProtectedRoute element={Checkout} />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/product/:productId/:shopId" element={<ShopProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer/> */}
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
