import React, { useEffect } from "react";
import LoginPage from "../screens/LoginPage";
import {
  RouterProvider,
  createBrowserRouter,
  
} from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

const MainBody = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <LandingPage />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser);
      }
    });
  }, []);
  return <RouterProvider router={appRouter} />;
};

export default MainBody;
