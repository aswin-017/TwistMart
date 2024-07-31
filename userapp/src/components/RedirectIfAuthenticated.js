// src/components/RedirectIfAuthenticated.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const RedirectIfAuthenticated = ({ element: Component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/" /> : <Component />;
};


export default RedirectIfAuthenticated;
