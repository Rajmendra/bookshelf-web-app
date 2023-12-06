// src/components/BookForm.js
import React, { useState, useEffect } from 'react';

const BookForm = ({ onSubmit, editBook }) => {
  const [formData, setFormData] = useState({
    id: '', // Add book ID to the form data
    title: '',
    isbn: '',
    category: '',
    row: '',
    count: 0,
    cost: 0,
    availability: true,
  });

  useEffect(() => {
    if (editBook) {
      // If editBook is provided, update the form data when editing
      setFormData(editBook);
    }
  }, [editBook]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally, you can reset the form after submission
    setFormData({
      id: '', // Reset book ID to empty string
      title: '',
      isbn: '',
      category: '',
      row: '',
      count: 0,
      cost: 0,
      availability: true,
    });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={formData.id} />
      <label>
        Book Name:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Book ISBN:
        <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} />
      </label>
      <label>
        Book Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
      </label>
      <label>
        Row Number:
        <input type="text" name="row" value={formData.row} onChange={handleChange} />
      </label>
      <label>
        Book Count:
        <input type="number" name="count" value={formData.count} onChange={handleChange} />
      </label>
      <label>
        Book Cost:
        <input type="number" name="cost" value={formData.cost} onChange={handleChange} />
      </label>
      <label>
        Availability:
        <input
          type="checkbox"
          name="availability"
          checked={formData.availability}
          onChange={() => setFormData({ ...formData, availability: !formData.availability })}
        />
      </label>
      <button type="submit">{editBook ? 'Save Changes' : 'Add Book'}</button>
    </form>
  );
};

export default BookForm;
