import React from "react";
import "./index.scss";
import data from "../data";
import { Typography } from "@mui/material";
import { TicketLogo as TicketLogo } from "../../../assets/Icons";
import { VectorLogo as VectorLogo } from "../../../assets/Icons";

const StreakPrize = () => {
  return (
    <div className="body-container container">
      <div className="card-container">
        {data.map((e) => {
          return (
            <div className="card" key={e.index}>
              <div className="left">
                <span className="one">
                  <Typography variant="h1">
                  {e.index}
                  </Typography>
                </span>
                <span className="onecon">
                  <Typography variant="body">
                  {e.indexName}
                  </Typography>
                </span>
              </div>
              <div className="right">
                <div className="right-header">
                  <span>
                    <Typography variant="body2" >
                    {e.header}
                    </Typography>
                  </span>
                  <span className="ticket-mini-logo">
                  {e.iconType}
                  </span>
                </div>
                <div className="right-body">
                  <span>
                    <Typography variant="h2">{e.body}</Typography>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="card-container1">

        <div className="card1">
            <div className="part1">
            <TicketLogo/>
                <Typography variant="h4"> <span className="game">GRAND<br/> PRIZE</span></Typography>
            </div>
            <div className="part2">

                <div className="hd">
                <Typography variant="body"> <span className="no">Your big chance to win</span></Typography>
                <VectorLogo></VectorLogo>
             
                </div>
                <Typography variant="h1"><div className="bodycnt">Super Bowl<br/> Tickets (2)</div></Typography>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StreakPrize;
