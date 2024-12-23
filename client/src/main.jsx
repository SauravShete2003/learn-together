import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "*",
    element: <div>Page not found</div>
  }
]);

root.render(
  <>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </>
);
