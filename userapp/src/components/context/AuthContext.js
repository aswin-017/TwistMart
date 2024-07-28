import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
    const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
    const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') || '');

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('token', token || '');
        localStorage.setItem('userId', userId || '');
        localStorage.setItem('firstName', firstName || '');
        localStorage.setItem('lastName', lastName || '');
        // setIsAuthenticated(!!token);
    }, [token, userId, firstName, lastName]);

    const login = (token, userId, firstName, lastName) => {
        setToken(token);
        setUserId(userId);
        setFirstName(firstName);
        setLastName(lastName);
        setIsAuthenticated(true);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('isAuthenticated',true);
    };

    const logout = () => {
        setToken(null);
        setUserId(null);
        setFirstName('');
        setLastName('');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ token, userId, firstName, lastName, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
