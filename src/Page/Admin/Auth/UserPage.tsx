import React from "react";
import { Link } from "react-router-dom";

const UserPage = ({ users, removeUser }) => {
  const onHandleChange = (id) => {
    removeUser(id);
  };
  return (
    <div>
      <div style={{fontSize:"14pt",fontWeight:"bolder"}}>User Page</div>
      <Link to={`/admin/user/add`}>
        <button>Add New User</button>
      </Link>
      <table className="custom-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Password</th>
            <th>Role ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>{item.roleId}</td>
                <td>
                  <button onClick={() => onHandleChange(item.id)}>
                    Delete
                  </button>
                  <Link to={`/admin/user/${item.id}/update`}>
                    <button>Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
