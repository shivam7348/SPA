import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Developers";
import Github from "./components/Pages/Servicing";
import About from "./About/About";
import HospitalManagementSystem from "./Products/HealthCare/HospitalManagementSystem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
        
      },
      {
        path: "servicing",
        element: <Github />,
      },
    ],
  },
]);

export default router;