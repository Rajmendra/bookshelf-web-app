const initialState = {
    books: [],
  };
  
  const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return {
          ...state,
          books: [
            ...state.books,
            {
              id: action.payload.id,
              title: action.payload.title,
              isbn: action.payload.isbn,
              category: action.payload.category,
              row: action.payload.row,
              count: action.payload.count,
              cost: action.payload.cost,
              availability: action.payload.availability,
            },
          ],
        };
        case 'EDIT_BOOK':
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...book, ...action.payload.editedBook } : book
        ),
      };
      case 'REMOVE_BOOK':
        return {
          ...state,
          books: state.books.filter((book) => book.id !== action.payload.id),
        };
        case 'SEARCH_BOOKS':
          // Search book logic...
          const searchTerm = action.payload.searchTerm.toLowerCase();
          const filteredBooks = state.books.filter(
            (book) =>
              book.title.toLowerCase().includes(searchTerm) ||
              book.isbn.toLowerCase().includes(searchTerm) ||
              book.category.toLowerCase().includes(searchTerm)
            // Add more fields as needed for your search
          );
          return { ...state, searchedBooks: filteredBooks };
      default:
        return state;
    }
  };
  
  export default booksReducer;
  