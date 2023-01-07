// TODO: need to refactor import
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Join from "./pages/Join";
import joinAction from "./pages/Join/action";
import Login from "./pages/Login";
import loginAction from "./pages/Login/action";
import Todo from "./pages/Todo";
import todoAction from "./pages/Todo/action";
import todoLoader from "./pages/Todo/loader";
import tokenLoader from "./utils/tokenLoader";
import TodoDetail from "./components/Todo/TodoDetail";
import todoDetailLoader from "./components/Todo/TodoDetail/loader";
import todoDetailAction from "./components/Todo/TodoDetail/action";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

// FIXME: Need exporting router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "join", element: <Join />, action: joinAction },
      {
        path: "login",
        element: <Login />,
        loader: tokenLoader,
        action: loginAction,
      },
      {
        path: "todo",
        element: <Todo />,
        loader: todoLoader(queryClient),
        action: todoAction(queryClient),
        children: [
          {
            path: ":id",
            element: <TodoDetail />,
            loader: todoDetailLoader(queryClient),
            action: todoDetailAction(queryClient),
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
);
