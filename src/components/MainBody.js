import React from "react";
import LoginPage from "../screens/LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import GPTSearchPage from "../screens/GPTSearchPage/GPTSearchPage";

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
    {
      path: "/search",
      element: <GPTSearchPage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default MainBody;
