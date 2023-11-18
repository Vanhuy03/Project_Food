import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCategory = ({ categories, onUpdateCategories }) => {
  const { id } = useParams();
  const currentCategories = categories.find((item) => item.id == id);
  const [inputValues, setInputValues] = useState({});
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...inputValues, [name]: value };
    setInputValues(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const dataUpdate = { ...inputValues, id: id };
    onUpdateCategories(dataUpdate);
  };
  return (
    <div>
      <div style={{fontSize:"14pt",fontWeight:"bolder"}}>Update Category</div>
      <form className="custom-form" onSubmit={onHandleSubmit}>
        <label htmlFor="name">Category Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={currentCategories?.name}
          onChange={onHandleChange}
        />
        <button type="submit" className="custom-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
