import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppViewLayout = () => {
  return (
    <Box>
      <Box height="75px">
        <Header />
      </Box>
      <Box
        height="100%"
        sx={{ overflow: "auto" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppViewLayout;
