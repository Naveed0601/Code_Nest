import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../component/Login/Login";
import SignUp from "../component/SignUp/SignUp";
import ForgotPassword from "../component/ForgetPassword/ForgetPassword";
import ResetPassword from "../component/ResetPassword/ResetPassword";
import EmailReceive from "../component/ForgetPassword/EmailReceive";

const LoginAndSignUp = () => {
  return (
    <div className="bg-[#FCE2CE] bg-opacity-40 min-h-screen w-full flex items-center justify-center">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/emailreceive" element={<EmailReceive />}></Route>
      </Routes>
    </div>
  );
};

export default LoginAndSignUp;
