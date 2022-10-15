import { Typography } from "@mui/material";
import React from "react";
import "./playindex.scss";

const Play = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="sub-main">
          <div className="col-md-6 how">
            <Typography variant="h3">
              <div>How to Play</div>
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
              auctor sit morbi ultrices. Orci justo varius amet nisi, vel et non
              semper donec. Dignissim egestas magna amet
            </Typography>
            <button type="submit">LEARN MORE</button>
          </div>
          <div className="col-md-6 how">
            <Typography variant="h3">
              <div>Read the Rules</div>
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
              auctor sit morbi ultrices. Orci justo varius amet nisi, vel et non
              semper donec. Dignissim egestas magna amet
            </Typography>
            <button type="submit">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Play;
