import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "../../assets/images/Icon.svg";
import Profile from "../../assets/images/profile.png";
import Dashboard from "../../assets/images/dashboard.svg";
import Transactions from "../../assets/images/transactions.svg";
import Performance from "../../assets/images/performance.svg";
import News from "../../assets/images/news.svg";
import Settings from "../../assets/images/settings.svg";
import Support from "../../assets/images/support.svg";
import '../../assets/css/Sidebar.css';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth(); // Get logout function from useAuth
    const [closeMenu, setCloseMenu] = useState(false);
    const [activePath, setActivePath] = useState(location.pathname);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setActivePath(path);
    };

    const handleLogout = () => {
        logout();
        navigate('/product-partner-login'); // Redirect to login page after logout
    };

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    return (
        <div className={closeMenu ? "sidebar active" : "sidebar"}>
            <div className={closeMenu ? "logoContainer active" : "logoContainer"}>
                <img src={Icon} alt="Twistmart" className="logo" />
                <h2 className="title">Twistmart</h2>
            </div>
            <div className={closeMenu ? "burgerContainer active" : "burgerContainer"}>
                <div
                    className="burgerTrigger"
                    onClick={handleCloseMenu}
                ></div>
                <div className="burgerMenu"></div>
            </div>
            <div className={closeMenu ? "profileContainer active" : "profileContainer"}>
                <img src={Profile} alt="profile" className="profile" />
                <div className={closeMenu ? "profileContents active" : "profileContents"}>
                    <p className="name">Hello, Product Partner</p>
                    <p>partner@twistmart.com</p>
                </div>
            </div>
            <div className={closeMenu ? "contentsContainer active" : "contentsContainer"}>
                <ul>
                    <li
                        className={activePath === "/dashboard" ? "active" : ""}
                        onClick={() => handleNavigation("/dashboard")}
                    >
                        <img src={Dashboard} alt="dashboard" />
                        <span>Dashboard</span>
                    </li>
                    <li
                        className={activePath === "/products" ? "active" : ""}
                        onClick={() => handleNavigation("/products")}
                    >
                        <img src={Transactions} alt="products" />
                        <span>Products</span>
                    </li>
                    <li
                        className={activePath === "/orders" ? "active" : ""}
                        onClick={() => handleNavigation("/orders")}
                    >
                        <img src={Performance} alt="orders" />
                        <span>Orders</span>
                    </li>
                    <li
                        className={activePath === "/analytics" ? "active" : ""}
                        onClick={() => handleNavigation("/analytics")}
                    >
                        <img src={News} alt="analytics" />
                        <span>Analytics</span>
                    </li>
                    <li
                        className={activePath === "/settings" ? "active" : ""}
                        onClick={() => handleNavigation("/settings")}
                    >
                        <img src={Settings} alt="settings" />
                        <span>Settings</span>
                    </li>
                    <li
                        className={activePath === "/support" ? "active" : ""}
                        onClick={() => handleNavigation("/support")}
                    >
                        <img src={Support} alt="support" />
                        <span>Support</span>
                    </li>
                    <li
                        className="logout"
                        onClick={handleLogout}
                    >
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
