import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Page/Home/Home/Home";
import ProductPage from "../Page/ProductPage/ProductPage";
import AuthLayout from "../Layouts/AuthLayouts";
import Login from "../Page/Auth/Login/Login";
import Register from "../Page/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "product/1",
        Component: ProductPage,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
