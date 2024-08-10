import React from "react";
import '../../assets/css/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <p>Welcome to your dashboard. Here’s an overview of your current statistics and activities.</p>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-statistics">
                    <div className="stat-item">
                        <h2>Total Sales</h2>
                        <p>$12,345</p>
                    </div>
                    <div className="stat-item">
                        <h2>Total Orders</h2>
                        <p>567</p>
                    </div>
                    <div className="stat-item">
                        <h2>New Customers</h2>
                        <p>89</p>
                    </div>
                    <div className="stat-item">
                        <h2>Total Products</h2>
                        <p>1,234</p>
                    </div>
                </div>
                <div className="dashboard-charts">
                    <div className="chart-item">
                        <h2>Sales Overview</h2>
                        <div className="chart-placeholder">[Sales Chart Placeholder]</div>
                    </div>
                    <div className="chart-item">
                        <h2>Order Trends</h2>
                        <div className="chart-placeholder">[Order Trends Placeholder]</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
