import React from 'react'
import Header from '../../../conponent/Header'
import Footer from '../../../conponent/Footer'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
import { useForm } from "react-hook-form";
import "../../../assets/css/auth.css"
const { Text } = Typography;

type Props = {}

const Login = (props: Props) => {
  return (
    <div className="main-site main-childs">
      <div className="user-wrapper">
        <div className="user-nav">
          <a href="/signin" className="active">
            Sign In
          </a>
          <a href="/signup">Sign Up</a>
        </div>
        <form
          acceptCharset="UTF-8"
          id="formAcount"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter email or username"
              // {...register("email")}
            />
            {/* <Text type="danger">{errors.email?.message}</Text> */}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              // {...register("password")}
            />
            {/* <Text type="danger">{errors.password?.message}</Text> */}
          </div>
          {/* <input type="hidden" value={0} {...register("role")} /> */}
          <button className="btn">Sign In</button>
        </form>
        <div className="user-foot text-center">
          <a href="../forgot-password/index.html" className="clearfix">
            Forgot password?
          </a>
          <p className="clearfix">Or login with</p>
          <li className="loginFb">
            <span>
              <FaFacebookF />
            </span>
            <a href="#">Login Facebook</a>
          </li>
          <li className="loginGg">
            <span>
              <FcGoogle />
            </span>
            <a href="#">Login Google</a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Login