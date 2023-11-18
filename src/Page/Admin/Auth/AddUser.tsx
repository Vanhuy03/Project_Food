import React, { useState } from "react";

const AddUser = ({ addUser }) => {
  const [users, setUsers] = useState([]);
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...users, [name]: value };
    setUsers(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addUser(users);
  };
  return (
    <div>
      <div style={{fontSize:"14pt",fontWeight:"bolder"}}>Add User</div>
      <form className="custom-form" onSubmit={onHandleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={onHandleChange} />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={onHandleChange}
        />

        <label htmlFor="roleId">Role ID:</label>
        <input type="number" name="roleId" onChange={onHandleChange} />

        <button type="submit" className="custom-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AddUser;
