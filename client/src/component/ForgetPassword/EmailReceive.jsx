import React from "react";
import backgroundwhite from "../../assets/background_white.png";
import rectangle from "../../assets/Rectangle3.png";

const EmailReceive = () => {
  return (
    <div className="-mt-[150px] w-[350px]">
      <div className="relative">
        <img
          src={backgroundwhite}
          alt="backgroundwhite"
          className="h-[450px] w-full rounded-t-3xl"
        />

        <img
          src={rectangle}
          alt="rectangle"
          className="absolute top-[380px] left-0 w-full rounded-2xl h-[215px] object-cover"
        />
        <h1 className="absolute top-[435px] ml-10 font-semibold font-sora text-xl">
          FORGOT PASSWORD
        </h1>
        <p className="absolute top-[470px] text-sm ml-10 mr-12 text-gray-950 font-sora">
          Provide your account's email for which you want to reset your password
        </p>
        <button className="absolute top-[550px] text-indigo-900 text-lg font-sora ml-10 cursor-pointer hover:underline hover:underline-offset-4">
          Resend verification code
        </button>
      </div>
    </div>
  );
};

export default EmailReceive;
