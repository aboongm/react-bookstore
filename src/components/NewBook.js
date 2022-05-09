import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction } from '../redux/books/books';

const NewBook = ({ book }) => {
  console.log(book);
  const { id, title, author } = book;
  console.log(id);

  const dispatch = useDispatch();
  const removeBookStore = () => {
    dispatch(removeBookAction({ id }));
  };
  return (
    <>
      <div className="row container mx-auto mb-3 px-3 py-3 bg-white d-flex align-items-between justify-content-between">
        <div className="col-5 m-0 p-0">
          <div className="mx-0 mb-2 p-0">
            <h4 className="m-0 p-0 text-2">{title}</h4>
            <p className="m-0 p-0 text-3">{author}</p>
          </div>
          <div className="d-flex align-items-center justify-content-start m-0 p-0">
            <button
              type="button"
              className="btn1 border-end pe-3 py-0 m-0 text-3"
            >
              Comments
            </button>
            <button
              type="button"
              className="btn1 border-end px-3 py-0 m-0 text-3"
              onClick={removeBookStore}
            >
              Remove
            </button>
            <button
              type="button"
              className="btn1 border-start px-3 py-0 m-0 text-3"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="row col-7 m-0  p-0 d-flex align-items-center justify-content-between">
          <div className="border-end col-6 m-0 pe-4 d-flex align-items-center justify-content-start">
            <div>
              <div className="circle-bar" />
            </div>
            <div className="m-0 ps-3">
              <p className="p-0 m-0 fs-4">64%</p>
              <p className="p-0 m-0 text-1">completed</p>
            </div>
          </div>
          <div className="col-6 m-0 ps-4">
            <p className="m-0 p-0 text-4">CURRENT CHAPTER</p>
            <p className="m-0 p-0 text-1">chapter</p>
            <button type="button" className="btn">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

NewBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default NewBook;
