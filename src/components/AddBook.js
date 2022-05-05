import React from 'react';

const AddBook = () => (
  <>
    <div className="container border-top my-0 p-0 ">
      <form className="form-box m-0 p-0">
        <p className="label">ADD NEW BOOK</p>
        <div>
          <input type="text" name="title" placeholder="Book title" />
          <input type="text" name="author" placeholder="Author" />
          <input className="btn1" type="submit" value="ADD BOOK" />
        </div>
      </form>
    </div>
  </>
);

export default AddBook;
