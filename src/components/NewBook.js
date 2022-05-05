import React from 'react';
import PropTypes from 'prop-types';

const NewBook = ({
  title, author, status, chapter,
}) => (
  <>
    <div className="row container mx-auto mb-3 px-3 py-3 bg-white d-flex align-items-between justify-content-between">
      <div className="col-5 m-0 p-0">
        <div className="mx-0 mb-2 p-0">
          <h4 className="m-0 p-0 text-2">{title}</h4>
          <p className="m-0 p-0 text-3">{author}</p>
        </div>
        <div className="d-flex align-items-center justify-content-start m-0 p-0">
          <p className="border-end pe-3 py-0 m-0 text-3">Comments</p>
          <p className="border-end px-3 py-0 m-0 text-3">Remove</p>
          <p className="border-start px-3 py-0 m-0 text-3">Edit</p>
        </div>
      </div>
      <div className="row col-7 m-0  p-0 d-flex align-items-center justify-content-between">
        <div className="border-end col-6 m-0 pe-4 d-flex align-items-center justify-content-start">
          <p className="border circle-bar m-0 p-0" />
          <div className="m-0 ps-3">
            <p className="p-0 m-0 fs-4">{status}</p>
            <p className="p-0 m-0 text-1">completed</p>
          </div>
        </div>
        <div className="col-6 m-0 ps-4">
          <p className="m-0 p-0 text-4">CURRENT CHAPTER</p>
          <p className="m-0 p-0 text-1">{chapter}</p>
          <button type="button" className="btn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  </>
);

NewBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default NewBook;
