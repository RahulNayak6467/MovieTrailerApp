import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import Trending from "../Pages/Trending";
import Search from "../Pages/Search";
import Category from "../Pages/Category";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Trending />,
      },
      {
        path: "Search",
        element: <Search />,
      },
      {
        path: "Categories",
        element: <Category />,
      },
    ],
  },
]);
