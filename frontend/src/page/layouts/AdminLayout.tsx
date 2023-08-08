import React, { useEffect } from "react";
import Sidebar from "../../conponent/Admin/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import "../../assets/css/dashboard.css";
import { useAppSelector } from "../../app/hook";

type Props = {};

const AdminLayout = (props: Props) => {
  const navigate = useNavigate()
  const data = useAppSelector((state:any)=> state.user)
  console.log(data);
  
  useEffect(()=>{
    if(!data.isLogin){
      return navigate("/")
    }else{
      if(data.user.role !== "admin"){
        return navigate("/")
      }

    }
    
  },[data.isLogin])
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
