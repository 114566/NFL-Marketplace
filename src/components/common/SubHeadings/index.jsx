import { Box, Typography } from "@mui/material";
import React from "react";

const Subheading = ({ heading = "", body = "" }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography
        variant="h2"
        sx={{
          fontSize: ["48px", "48px", "64px"],
          lineHeight: ["48px", "48px", "64px"],
        }}
      >
        {heading}
      </Typography>
      <Typography sx={{ width: 0.8, textAlign: "center" }} variant="body4">
        {body}
      </Typography>
    </Box>
  );
};

export default Subheading;
