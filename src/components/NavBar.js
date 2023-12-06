import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Bookshelf
      </Link>
      <Link to="/admin" className="nav-link">
        Admin Dashboard
      </Link>
      <Link to="/scanner" className="nav-link">
        Book QR Scanner
      </Link>
    </nav>
  );
};

export default Navbar;
