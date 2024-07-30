// PageNotFound.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../assets/css/PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="return-home-link">Return Home</Link>
    </div>
  );
}

export default PageNotFound;
