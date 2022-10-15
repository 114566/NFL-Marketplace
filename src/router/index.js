import Dashboard from "../page/Dashboard";
import React from "react";
import About from "../page/About";
import AppViewLayout from "../layout/AppViewLayout";
import Landing from "../page/Landing";
import Prizes from "../page/Prizes";
import MyNftDetails from "page/MyNftDetails";
import PickEm from "page/PckEm";

import Marketplace from "page/Marketplace";
const routesConfig = [
  {
    // path: "/",
    element: <AppViewLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/Prizes", element: <Prizes /> },
      {
        path: "/collection",
        element: <Dashboard />,
      },
      { path: "/about", element: <About /> },
      { path: "/collection/:tokenId", element: <MyNftDetails /> },
      { path: "/collection/pickem/:tokenId", element: <PickEm /> },
      { path: "/marketplace", element: <Marketplace /> },
    ],
  },
];

export default routesConfig;
