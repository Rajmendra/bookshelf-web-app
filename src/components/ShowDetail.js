import React from 'react';

const BookDetails = ({ book, onClose }) => {
  return (
    <div className="book-details">
      <h2>Book Details</h2>
      <p>ID: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Category: {book.category}</p>
      <p>Row No: {book.row}</p>
      <p>Count: {book.count}</p>
      <p>Cost: {book.cost}</p>
      <p>Availability: {book.availability ? 'Available' : 'Not Available'}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BookDetails;
