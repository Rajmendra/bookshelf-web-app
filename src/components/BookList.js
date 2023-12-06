// src/components/BookCard.js
import React, { useState } from 'react';
import './BookList.css'; // Import the CSS file for styling
import ShowDetail from './ShowDetail';

const BookCard = ({ books, onEdit, onDelete, showDetail= false }) => {
  const columnHeaders = ['ID', 'ISBN', 'Category', 'Title', 'Row No', 'Count', 'Cost', 'Availability'];
  const [selectedBook, setSelectedBook] = useState(null);

  const handleShowDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };
  return (
    <div className="book-card">
      {books.length > 0 ? (
        <table className="book-table">
          <thead>
            <tr>
              {columnHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((bookItem) => (
              <tr key={bookItem.id}>
                <td>{bookItem.id}</td>
                <td>{bookItem.isbn}</td>
                <td>{bookItem.category}</td>
                <td>{bookItem.title}</td>
                <td>{bookItem.row}</td>
                <td>{bookItem.count}</td>
                <td>{bookItem.cost}</td>
                <td>{bookItem.availability ? 'Available' : 'Not Available'}</td>
                <td>
                  <button onClick={() => onEdit(bookItem.id)}>Edit</button>
                  <button onClick={() => onDelete(bookItem.id)}>Delete</button>
                  {showDetail &&
                  <button onClick={() => handleShowDetails(bookItem)}>Show Details</button>}
         
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books available. Add books to the shelf.</p>
      )}
         {selectedBook && <ShowDetail book={selectedBook} onClose={handleCloseDetails} />}
 
    </div>
  );
};

export default BookCard;
