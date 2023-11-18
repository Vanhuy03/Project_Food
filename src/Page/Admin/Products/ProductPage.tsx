import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductPage = ({ products, removeProduct }) => {
  const onHandleRemove = (id) => {
    removeProduct(id);
  };
  return (
    <div>
      <div style={{fontSize:"14pt",fontWeight:"bolder"}}>Product Page</div>
      <Link to={`/admin/product/add`}>
        <button>Add New Product</button>
      </Link>
      <table className="custom-table">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Description</th>
              <th>Category ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <img style={{width:"200px"}} src={item.image} alt="" />
                   
                  </td>
                  <td>{item.description}</td>
                  <td>{item.categoryId}</td>
                  <td>
                    <button onClick={() => onHandleRemove(item.id)}>
                      Delete
                    </button>
                    <Link to={`/admin/product/${item.id}/update`}>
                      <button>Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </table>
    </div>
  );
};

export default ProductPage;
