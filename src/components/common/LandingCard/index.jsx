import { Box, Typography, Button } from "@mui/material";
import roboat from "../../../images/landing/Roboat.png";
import "./landing.css";

import React from "react";

const LandingCard = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      gap={1}
      alignItems="center"
      p={10}
    >
      <Box>
        <Typography classname="leading-title" variant="h1">
          Bud Light x NFL Ultimate Fandom— Survivor Pick ‘Em 2022
        </Typography>
        <Typography variant="body">
          Unlock entry into our Survivor Pick ‘Em game where you can compete for
          a chance to win epic prizes, including official NFL jerseys, a year’s
          worth of beer, and tickets to Super Bowl LVII.
        </Typography>
        <div className="button-container">
          <Button className="blue-button btn">Notifiy Me</Button>
          <Button className="plain-button  btn "> Button Text</Button>
        </div>
      </Box>
      <br />
      <Box className="first-image">
        <img
          className="img-responsive"
          height="240px"
          src={roboat}
          alt="Hype Video"
        />
      </Box>
    </Box>
  );
};

export default LandingCard;
