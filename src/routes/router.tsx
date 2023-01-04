import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Auth from "../pages/Auth";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth", element: <Auth /> },
      { path: "join", element: <Join /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
