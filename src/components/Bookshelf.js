// src/components/Bookshelf.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';
import Navbar from './NavBar';
import BookList from './BookList';
import './Bookshelf.css';
import { generateShortId } from '../utils/common';

const Bookshelf = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [editBook, setEditBook] = useState(null);

  const handleAddBook = (formData) => {
    // Check if the book already exists by comparing IDs
    const existingBook = books.find((book) => book.id === formData.id);

    if (existingBook) {
      // If the book with the same ID exists, it's an update
      dispatch({ type: 'EDIT_BOOK', payload: { id: editBook.id, editedBook: formData } });
    } else {
      formData.id = generateShortId();
      dispatch({ type: 'ADD_BOOK', payload: { ...formData } });
    }

    // Reset form data and editBook state after submission
    setEditBook(null);
  };

  const handleRemoveBook = (id) => {
    dispatch({ type: 'REMOVE_BOOK', payload: { id } });
    setEditBook(null);
  };

  const handleEditBook = (id) => {
    // Find the book with the given id and set it as the editBook state
    const bookToEdit = books.find((book) => book.id === id);
    setEditBook(bookToEdit);
  };

  return (
    <div className="bookshelf-container">
      <Navbar />
      <div className="bookshelf-menu">
        <BookForm onSubmit={handleAddBook} editBook={editBook} />
        <div className="book-list-row">
        
            <BookList
              books={books}
              onEdit={handleEditBook}
              onDelete={handleRemoveBook}
            />
       
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
