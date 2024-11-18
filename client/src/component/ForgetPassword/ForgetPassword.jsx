import React, { useState } from "react";
import backgroundwhite from "../../assets/background_white.png";
import rectangle from "../../assets/Rectangle3.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4000/auth/forget-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setEmail("");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="-mt-[50px] w-[350px]">
      <div className="relative">
        <img
          src={backgroundwhite}
          alt="backgroundwhite"
          className="h-[450px] w-full rounded-t-3xl"
        />

        <img
          src={rectangle}
          alt="rectangle"
          className="absolute top-[240px] left-0 w-full rounded-2xl h-[315px] object-cover"
        />
        <h1 className="absolute top-[275px] ml-8 font-semibold font-sora text-xl">
          FORGOT PASSWORD
        </h1>
        <p className="absolute top-[305px] text-sm ml-8 mr-12 text-gray-950 font-sora">
          Provide your account's email for which you want to reset your password
        </p>
        <div className="flex flex-col relative ml-8 mt-[-70px]">
          <label className="text-[12px] mb-2">Email ID</label>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-[280px] h-8 pl-4 rounded border focus:border-[1.8px] border-gray-400 focus:border-indigo-800 focus:outline-none"
              onFocus={() => setShowHint(true)}
              onBlur={() => setShowHint(false)}
            />
            {showHint && (
              <p className="text-xs text-gray-600 mt-1">
                Please enter your registered email
              </p>
            )}
            <Link to={"/emailreceive"}>
              <button
                type="submit"
                className="rounded-lg text-white font-sora font-bold bg-indigo-900 w-[280px] h-11"
              >
                Request reset password link
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
