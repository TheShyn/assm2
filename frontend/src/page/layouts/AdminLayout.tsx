import React from "react";
import Sidebar from "../../conponent/Admin/Sidebar";
import { Outlet } from "react-router-dom";
import "../../assets/css/dashboard.css";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
