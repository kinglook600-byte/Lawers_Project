import Home from "./../pages/Home";

import { createBrowserRouter } from "react-router-dom";
import Layout from "./../components/UI/Layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      }
    ]

  }
]);

export default router