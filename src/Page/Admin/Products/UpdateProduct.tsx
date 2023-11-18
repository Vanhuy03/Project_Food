import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = ({ products, onUpdate }) => {
  const { id } = useParams();
  const currentProduct = products.find((item) => item.id == id);
  const [inputValues, setInputValues] = useState([]);
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...inputValues, [name]: value };
    setInputValues(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const dataUpdate = { ...inputValues, id: id };
    onUpdate(dataUpdate);
  };
  
  return (
    <div>
      <div style={{fontSize:"14pt",fontWeight:"bolder"}}>Update Product</div>
      <form style={{marginBottom:"30px"}} onSubmit={onHandleSubmit}>
        <label htmlFor="name">Name:</label><br/>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={currentProduct?.name}
          onChange={onHandleChange}
          required
        /><br/>

        <label htmlFor="Price">Price:</label><br/>
        <input
          type="text"
          id="price"
          name="price"
          defaultValue={currentProduct?.price}
          onChange={onHandleChange}
        /><br/>

        <label htmlFor="Image">Image:</label><br/>
        <input
          type="text"
          name="image"
          defaultValue={currentProduct?.image}
          onChange={onHandleChange}
        /><br/>

        <label htmlFor="Description">Description:</label><br/>
        <input
          type="text"
          name="description"
          defaultValue={currentProduct?.description}
          onChange={onHandleChange}
        /><br/>
        <label htmlFor="categoryId">Categpry ID:</label><br/>
        <input
          type="text"
          name="categoryId"
          defaultValue={currentProduct?.categoryId}
          onChange={onHandleChange}
        /><br/>
        <button type="submit" className="custom-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
