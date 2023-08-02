import React from "react";
import "../../../assets/css/auth.css"

type Props = {};

const Register = (props: any) => {
  return (
    <div className="main-site main-childs">
    <div className="user-wrapper">
      <div className="user-nav">
        <a href="/signin">Sign In</a>
        <a href="/signup" className="active">
          Sign Up
        </a>
      </div>
      <form
        acceptCharset="UTF-8"
        id="formAcount"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="What's your name?"
            autoComplete="off"
            // {...register("name")}
          />
          {/* <Text type="danger">{errors.name?.message}</Text> */}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter email or username"
            // {...register("email")}
            autoComplete="off"
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
        <div className="form-group">
          <input
            type="password"
            id="rePassword"
            placeholder="Password"
            // {...register("confirmPassword")}
          />
          {/* <Text type="danger">{errors.confirmPassword?.message}</Text> */}
        </div>
        <button className="btn btn-signup" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  </div>
  );
};

export default Register;
