import React, { useState } from "react";

const AddCategory = ({ addCategory }) => {
  const [categories, setCategories] = useState([]);
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...categories, [name]: value };
    setCategories(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addCategory(categories);
  };
  return (
    <div>
      <div style={{fontSize:"14pt",fontWeight:"bolder"}}>Add Category</div>
      <form className="custom-form" onSubmit={onHandleSubmit}>
        <label htmlFor="name">Category Name:</label>
        <input type="text" id="name" name="name" onChange={onHandleChange} />
        <button type="submit" className="custom-button">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
