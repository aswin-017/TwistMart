// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('userId'));

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('userId', userId || '');
    localStorage.setItem('firstName', firstName || '');
    localStorage.setItem('lastName', lastName || '');
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [userId, firstName, lastName, isAuthenticated]);

  const login = (userId, firstName, lastName) => {
    setUserId(userId);
    setFirstName(firstName);
    setLastName(lastName);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUserId(null);
    setFirstName('');
    setLastName('');
    setIsAuthenticated(false);
    localStorage.removeItem('userId');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ userId, firstName, lastName, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
