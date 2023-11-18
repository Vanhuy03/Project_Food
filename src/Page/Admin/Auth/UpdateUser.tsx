import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = ({ users, onUpdateUser }) => {
  const { id } = useParams();
  const currentUser = users.find((item) => item.id == id);
  const [inputValues, setInputValues] = useState([]);
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...inputValues, [name]: value };
    setInputValues(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const dataUpdate = { ...inputValues, id: id };
    onUpdateUser(dataUpdate);
  };
  return (
    <div>
      <h1 style={{fontSize:"14pt",fontWeight:"bolder"}}>Update User</h1>
      <form className="custom-form" onSubmit={onHandleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={currentUser?.name}
          onChange={onHandleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue={currentUser?.password}
          onChange={onHandleChange}
        />

        <label htmlFor="roleId">Role ID:</label>
        <input
          type="number"
          name="roleId"
          defaultValue={currentUser?.roleId}
          onChange={onHandleChange}
        />
        <button type="submit" className="custom-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
