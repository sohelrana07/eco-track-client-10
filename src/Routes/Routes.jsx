import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PasswordReset from "../Pages/PasswordReset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/password/reset",
        element: <PasswordReset></PasswordReset>,
      },
    ],
  },
]);

export default router;
