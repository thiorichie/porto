import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPages from "./pages/LandingPages";
import Login from "./pages/Login"
import Register from "./pages/Register";
import {Provider} from 'react-redux'
import store from './redux/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPages/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
