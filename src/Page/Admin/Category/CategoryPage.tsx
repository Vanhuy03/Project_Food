import React from "react";
import { Link } from "react-router-dom";

const CategoryPage = ({ categories, removeCategory }) => {
  const onHandleRemove = (id) => {
    removeCategory(id);
  };
  return (
    <div>
      <div style={{fontSize:"14pt",fontWeight:"bolder"}}>Category Page</div>
      <Link to={"/admin/category/add"}>
        <button>Add New Category</button>
      </Link>
      <table className="custom-table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {categories.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={`/admin/category/${item.id}/update`}>
                    <button>Update</button>
                  </Link>
                  <button onClick={() => onHandleRemove(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryPage;
