import { Paper, Typography } from "@mui/material";
import React from "react";

const Roadmap = ({ title, description }) => {
  return (
    <Paper
      sx={{
        background: "text.secondary",
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body">{description}</Typography>
    </Paper>
  );
};

export default Roadmap;
