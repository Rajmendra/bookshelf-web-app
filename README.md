# Bookshelf Management App

This is a simple React-based web application for managing a bookshelf. It allows users to add, search, edit, and remove books from the bookshelf. The app also includes a QR code scanner for viewing book details.

## Features

- Add new books with details like Book Name, ISBN, Category, Row No, Count, Cost, and Availability.
- Search books by ISBN or book name.
- Edit or remove books from the record.
- Generate a unique QR code for each book on the bookshelf.
- Scan QR codes to view individual book details.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bookshelf-app.git

    Navigate to the project directory:

    bash

cd bookshelf-app

Install dependencies:

bash

    npm install

Running the App

Start the development server:

bash

npm start

The app will be accessible at http://localhost:3000 in your web browser.
Project Structure

    /src: Contains the source code of the React application.
        /components: React components used in the app.
        /actions: Redux action creators.
        /reducers: Redux reducers.
        /css: Stylesheets for the components.
        ...

Technologies Used

    React.js
    Redux
    React Router
    react-qr-scanner (for QR code scanning)

Contributing

Contributions are welcome! If you have suggestions, bug reports, or new features to propose, please open an issue or create a pull request.
License

This project is licensed under the MIT License - see the LICENSE.md file for details.
