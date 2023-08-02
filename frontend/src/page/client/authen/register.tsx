import React from "react";
<<<<<<< HEAD
import Regis from "../../../conponent/Register";
import Header from "../../../conponent/Header";
import Footer from "../../../conponent/Footer";
=======
import "../../../assets/css/auth.css"
>>>>>>> efa70f1feba5064fcdae5f807cbca99118df8d27

type Props = {};

const Register = (props: any) => {
  return (
<<<<<<< HEAD
    // <div>
    //   <div id="preloader" className="preloader">
    //     <div className="inner">
    //       <div className="line1"></div>
    //       <div className="line2"></div>
    //       <div className="line3"></div>
    //     </div>
    //   </div>

    //   <section>
    //     <div className="fxt-video-background">
    //       <div className="fxt-video">
    //         <div
    //           id="fxtVideo"
    //           data-property="{
    //                 videoURL:'F_7ZoAQ3aJM', 
    //                 autoPlay:true, 
    //                 mute:true, 
    //                 loop:true, 
    //                 startAt:0, 
    //                 opacity:1, 
    //                 quality:'default', 
    //                 showControls:false, 
    //                 optimizeDisplay:true,
    //                 containment:'.fxt-video-background'
    //             }"
    //         ></div>
    //       </div>
    //     </div>
    //     <div className="container">
    //         <div className="row align-items-center justify-content-center">
    //             <div className="col-lg-3">
    //                 <div className="fxt-header">
    //                     {/* <a href="login-24.html" className="fxt-logo"><img src="img/logo-24.png" alt="Logo"></a> */}
    //                 </div>
    //             </div>
    //             <div className="col-lg-6">
    //                 <div className="fxt-content">
    //                     <h2>Login into your account</h2>
    //                     <div className="fxt-form">
    //                         <form method="POST">
    //                             <div className="form-group">
    //                                 <div className="fxt-transformY-50 fxt-transition-delay-1">
    //                                     {/* <input type="email" id="email" className="form-control" name="email" placeholder="Email" required="required"> */}
    //                                 </div>
    //                             </div>
    //                             <div className="form-group">
    //                                 <div className="fxt-transformY-50 fxt-transition-delay-2">
    //                                     {/* <input id="password" type="password" className="form-control" name="password" placeholder="********" required="required"> */}
    //                                     {/* <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon"></i> */}
    //                                 </div>
    //                             </div>
    //                             <div className="form-group">
    //                                 <div className="fxt-transformY-50 fxt-transition-delay-3">
    //                                     <div className="fxt-checkbox-area">
    //                                         <div className="checkbox">
    //                                             {/* <input id="checkbox1" type="checkbox"> */}
    //                                             {/* <label for="checkbox1">Keep me logged in</label> */}
    //                                         </div>
    //                                         <a href="forgot-password-24.html" className="switcher-text">Forgot Password</a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="form-group">
    //                                 <div className="fxt-transformY-50 fxt-transition-delay-4">
    //                                     <button type="submit" className="fxt-btn-fill">Log in</button>
    //                                 </div>
    //                             </div>
    //                         </form>
    //                     </div>
    //                     <div className="fxt-footer">
    //                         <div className="fxt-transformY-50 fxt-transition-delay-9">
    //                             <p>Don't have an account?<a href="Register-24.html" className="switcher-text2 inline-text">Register</a></p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //   </section>
    // </div>
    <div>
    <Header/>

    <div>
          
    <Regis/>
    </div>

    
    <Footer/>
=======
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
>>>>>>> efa70f1feba5064fcdae5f807cbca99118df8d27
  </div>
  );
};

export default Register;
