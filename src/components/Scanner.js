import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import './Scanner.css'; // Import the CSS file
import Navbar from './NavBar';

const Scanner = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      // Navigate to the book details page based on the scanned QR code data
      // You can use React Router for navigation
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="scanner-container">
        <Navbar />
      <h1 className="scanner-title">Book QR Scanner</h1>
      <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
      <p className="scanned-result">Scanned Result: {result}</p>
    </div>
  );
};

export default Scanner;