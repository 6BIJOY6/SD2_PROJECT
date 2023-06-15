import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group">
        <h4 className="mb-4">Admin Panel</h4>
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          All orders
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          Create Product
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
