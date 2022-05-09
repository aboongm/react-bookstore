import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBookAction } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const newBook = {
    id: v4(),
    title,
    author,
  };

  const addBookStore = (e) => {
    e.preventDefault();
    dispatch(addBookAction(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div className="container border-top my-0 p-0 ">
        <form className="form-box m-0 p-0">
          <p className="label">ADD NEW BOOK</p>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Book title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              onClick={addBookStore}
              className="btn1"
              type="submit"
              value="ADD BOOK"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBook;
