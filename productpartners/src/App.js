import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/landing/Home';
import BusinessRegistrationForm from './components/auth/PartnerForm';
import ProductPartnerLogin from './components/auth/Login';
import Sidebar from './components/header/Sidebar'; // Ensure this path is correct
import { useAuth } from './components/context/AuthContext'; // Ensure this path is correct
import { scroller } from 'react-scroll';
import Dashboard from './components/pages/Dashboard';

// ScrollToTop component to handle smooth scrolling
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scroller.scrollTo(hash.substring(1), {
        smooth: true,
        duration: 500,
        offset: -80, // adjust this value based on your navbar height
      });
    }
  }, [pathname, hash]);

  return null;
};

// App component to manage routes and authentication
const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className={isAuthenticated ? 'app-with-sidebar' : 'app'}>
      {isAuthenticated ? (
        <>
          <Sidebar /> {/* Render Sidebar if authenticated */}
            
          <div className="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <Header />
          <ScrollToTop /> {/* Apply ScrollToTop for pre-login routes */}
          <div >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/partner-with-us" element={<BusinessRegistrationForm />} />
              <Route path="/product-partner-login" element={<ProductPartnerLogin />} />
              <Route path="*" element={<Navigate to="/product-partner-login" />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
