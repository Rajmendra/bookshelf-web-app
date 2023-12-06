// src/components/Admin.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './NavBar';
import './Admin.css';
import BookList from './BookList';

const Admin = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const books = useSelector((state) => state.books); // Assuming books are stored in Redux state

  const handleSearch = () => {
   
      const filteredBooks = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredBooks);
  };

  const handleEditBook = (id) => {
    // Placeholder logic to find the book in the Redux state and update its information
    const editedBook = /* Your logic to edit the book */ { id, title: 'Edited Book Title' };
    dispatch({ type: 'EDIT_BOOK', payload: editedBook });
  };

  const handleRemoveBook = (id) => {
    // Placeholder logic to filter out the book from the Redux state and dispatch the updated state
    const updatedBooks = books.filter((book) => book.id !== id);
    dispatch({ type: 'SET_BOOKS', payload: updatedBooks });
  };

  return (
    <div className="admin-container">
      <Navbar />
      <h1 className="admin-title">Admin Dashboard</h1>

      {/* Search Bar */}
      <div className="admin-search">
        <input
          type="text"
          placeholder="Search books by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display Search Results */}
      <div className="admin-search-results">
      <BookList
              books={searchResults || books}
              showDetail={true}
              onEdit={() => handleEditBook}
              onDelete={handleRemoveBook}
            />
      </div>

      {/* ... rest of the admin content */}
    </div>
  );
};

export default Admin;
