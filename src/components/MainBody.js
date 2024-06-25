import React from "react";
import LoginPage from "../screens/LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "../screens/LandingPage";

const MainBody = () => {
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
