import React from "react";
import Header from "../../conponent/Admin/Header";
import Sidebar from "../../conponent/Admin/Sidebar";
import { Outlet } from "react-router-dom";

type Props = {};

const WebsiteLayout = (props: Props) => {
  return 
    <>
        <Sidebar />
        <Outlet/>
    </>
  
};

export default WebsiteLayout;
