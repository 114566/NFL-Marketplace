import React from "react";
import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import routesConfig from "../router";

const MainView = () => {
  let element = useRoutes(routesConfig)

  return (
    <Box height="100vh">
      {/* <Box height="75px">
        <Header />
      </Box>
      <Box height="100%">
        <Home />
      </Box> */}

      {element}
    </Box>
  );
};

export default MainView;
