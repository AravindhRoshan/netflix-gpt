import React from "react";
import LoginPage from "../screens/LoginPage";
import {
  RouterProvider,
  createBrowserRouter,
  
} from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import { useDispatch } from "react-redux";

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

  
  return <RouterProvider router={appRouter} />;
};

export default MainBody;
