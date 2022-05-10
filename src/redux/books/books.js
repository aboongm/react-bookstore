import axios from 'axios';

const ADD_BOOK = '/bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rHDO6tM9rSslDiRZWYoP/books';

const initialState = [];

export const addBookAction = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBookAction = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const fetchBookApiAction = () => async (dispatch) => {
  const books = await axios.get(url);
  const booksFetched = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return { id: item[0], title, author };
  });
  dispatch(fetchBook(booksFetched));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
