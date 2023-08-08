import React, { useEffect } from "react";
import Regis from "../../../conponent/Register";
import Header from "../../../conponent/Header";
import Footer from "../../../conponent/Footer";
import { useAppSelector } from "../../../app/hook";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: any) => {
  const data = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (data.isLogin) {
      navigate("/")
    }
  }, [data.isLogin])
  return (

    <div>
      <Regis />

    </div>
  );
};

export default Register;
