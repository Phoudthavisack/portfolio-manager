// router
import { useRoutes, Navigate } from "react-router-dom";
// layouts
import MainLayout from "./layouts/MainLayout";
// pages
import HomePage from "./pages/HomePage";
// ------------------------------ //
const Route = () =>
  useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <p>Download</p>,
        },
      ],
    },
  ]);

export default Route;
