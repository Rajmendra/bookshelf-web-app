import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import Admin from './Admin';
import Scanner from './Scanner';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bookshelf />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
