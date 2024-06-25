import React, { useState } from "react";
import LoginHeader from "./components/Header";
import { BACKGROUND_IMAGE_URL } from "../../utils/constants";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  console.log(emailAddress, "email");
  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
      }}
    >
      <LoginHeader />
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/4 bg-black bg-opacity-80 rounded ">
          <h1 className="font-bold text-white text-4xl px-9 pb-3 my-3 pt-7">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>

          {/* if login screen then sign in form else sign up form */}

          {isLogin ? (
            <form className="flex flex-col items-center mx-10 my-5 mt-8">
              <input
                type="text"
                placeholder="Email Address"
                value={emailAddress}
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
                className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
              />

              <button className="p-2 m-2 rounded bg-red-600 w-full text-white font-semibold">
                Sign In
              </button>
              <button className="text-white my-2 ">Forgot Password?</button>
            </form>
          ) : (
            <form className="flex flex-col items-center mx-10 my-5">
              <input
                type="text"
                placeholder="Name"
                className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
              />

              <button className="p-2 m-2 rounded bg-red-600 w-full text-white font-semibold mt-7 mb-9">
                Sign Up
              </button>
            </form>
          )}

          {/* toggle text depending on the current page */}

          {isLogin ? (
            <div className="text-gray-400 text-base px-10 pb-9 pt-5">
              New to Netflix?{" "}
              <button
                className="text-white"
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                Sign up now
              </button>
            </div>
          ) : (
            <div className="text-gray-400 text-base px-10 pb-9">
              Already registered?{" "}
              <button
                className="text-white"
                onClick={() => {
                  setIsLogin(true);
                }}
              >
                Sign in now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
