import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PasswordReset from "../Pages/PasswordReset";
import Challenges from "../Pages/Challenges";
import MyActivities from "../Pages/MyActivities";
import Profile from "../Pages/Profile";
import PrivateRoute from "../Private/PrivateRoute";
import ChallengeDetails from "../Components/ChallengeCard/ChallengeDetails";
import AddChallenge from "../Pages/AddChallenge";
import UpdateChallenge from "../Pages/UpdateChallenge/UpdateChallenge";
import Tips from "../Pages/Tips/Tips";
import Events from "../Pages/Events/Events";

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
      {
        path: "/challenges",
        element: <Challenges></Challenges>,
      },
      {
        path: "/challenges/:id",
        element: <ChallengeDetails></ChallengeDetails>,
      },
      {
        path: "/challenge/add",
        element: (
          <PrivateRoute>
            <AddChallenge></AddChallenge>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateChallenge></UpdateChallenge>
          </PrivateRoute>
        ),
      },
      {
        path: "/myActivities",
        element: (
          <PrivateRoute>
            <MyActivities></MyActivities>
          </PrivateRoute>
        ),
      },
      {
        path: "/tips",
        element: <Tips></Tips>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
