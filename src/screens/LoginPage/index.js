import React, { useState } from "react";
import { BACKGROUND_IMAGE_URL } from "../../utils/constants";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { validateUserInput } from "./methods/validateUserInput";
import AppHeader from "../../components/Header/index";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleOnClickValidations = () => {
    validateUserInput(
      emailAddress,
      password,
      passwordCheck,
      isLogin,
      setEmailError,
      setPasswordError
    );
    if (!emailError || !passwordError) {
      if (isLogin) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailAddress, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("user----------->", user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setPasswordError(errorMessage);
          });
      } else {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailAddress, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: userName,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
              })
              .catch((error) => {
                setPasswordError(error.message);
              });
            console.log("user----------->", user);
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            setPasswordError(errorMessage);
            // ..
          });
      }
    }
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-10">
        <AppHeader />
        <div className="flex justify-center items-center h-screen">
          <div className="w-1/4 bg-black bg-opacity-80 rounded flex flex-col">
            <h1 className="font-bold text-white text-4xl pt-6 pl-9">
              {isLogin ? "Sign In" : "Sign Up"}
            </h1>

            {/* if login screen then sign in form else sign up form */}

            {isLogin ? (
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col items-center mx-10 my-5 mt-8"
              >
                <input
                  type="text"
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                  className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
                />
                {emailError && (
                  <p className="text-red-500 text-sm font-bold">{emailError}</p>
                )}

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm font-bold">
                    {passwordError}
                  </p>
                )}

                <button
                  onClick={() => {
                    handleOnClickValidations();
                  }}
                  className="p-2 m-2 rounded bg-red-600 w-full text-white font-semibold"
                >
                  Sign In
                </button>
                <button className="text-white my-2 ">Forgot Password?</button>
              </form>
            ) : (
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col items-center mx-10 my-5"
              >
                <input
                  type="text"
                  placeholder="Name"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                  className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
                />
                {emailError && (
                  <p className="text-red-500 text-sm font-bold">{emailError}</p>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={passwordCheck}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  className="p-2 m-2 rounded w-full my-3 bg-transparent border border-gray-500 text-white"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm font-bold">
                    {passwordError}
                  </p>
                )}

                <button
                  onClick={() => {
                    handleOnClickValidations();
                  }}
                  className="p-2 m-2 rounded bg-red-600 w-full text-white font-semibold mt-7 mb-9"
                >
                  Sign Up
                </button>
              </form>
            )}

            <div className="text-gray-400 text-base px-10 pb-9 pt-5">
              {isLogin ? "New to Netflix? " : "Already registered? "}
              <button
                className="text-white"
                onClick={() => {
                  setIsLogin(!isLogin); //toggling
                }}
              >
                {isLogin ? "Sign up now " : "Sign in now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
