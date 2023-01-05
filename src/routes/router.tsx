import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Auth from "../pages/Auth";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Join from "../pages/Join";
import joinAction from "../pages/Join/action";
import Login from "../pages/Login";
import loginAction from "../pages/Login/action";
import tokenLoader from "../utils/tokenLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth", element: <Auth /> },
      { path: "join", element: <Join />, action: joinAction },
      {
        path: "login",
        element: <Login />,
        loader: tokenLoader,
        action: loginAction,
      },
    ],
  },
]);

export default router;
