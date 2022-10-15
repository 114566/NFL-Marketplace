import { Box, Typography } from "@mui/material";
// import Countdown from "components/common/Countdown";
import useCountdown from "components/common/Countdown/useCountdown";
import React from "react";
import NFTHeaderCard from "../../../images/PickEm/NFT-mobile-Header-Card.svg";
import Dropdown from "../Dropdown";
const MobileScreen = ({ mediaURL, myNftList, tokenId, disable, week }) => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2022-10-16T12:59:59.000-04:00")
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(248.6deg, #00B5E2 0%, #0032C7 57.55%, #001C71 100%)`,
        backgroundSize: "100%",
        height: "200px",
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: 1,
        }}
      >
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
           
            gap={1}
            sx={{ display: "flex", flexDirection: "column",width:{xs:0.75,sm:0.4,md:0.75} }}
          >
            <Typography variant="h2" sx={{ fontSize: "64px!important" }}>
              {week}
            </Typography>

            <Box display="flex" gap={0.5}>
              <Typography variant="h9" sx={{ lineHeight: "18px" }}>
                PICK FREEZES IN:
              </Typography>
              <Typography variant="h9" sx={{ lineHeight: "18px" }}>{`${
                days < 10 ? `0${days}` : days
              }D`}</Typography>
              <Typography variant="h9" sx={{ lineHeight: "18px" }}>{`${
                hours < 10 ? `0${hours}` : hours
              }H`}</Typography>
              <Typography variant="h9" sx={{ lineHeight: "18px" }}>{`${
                minutes < 10 ? `0${minutes}` : minutes
              }M`}</Typography>
              <Typography variant="h9" sx={{ lineHeight: "18px" }}>{`${
                seconds < 10 ? `0${seconds}` : seconds
              }S`}</Typography>
            </Box>
          </Box>
          {/* <img src={NFTHeaderCard} style={{ width: "62px", height: "87px" }} /> */}
          <video style={{ width: "62px", height: "87px" }} autoPlay muted loop playsInline>
            <source src={mediaURL} type="video/mp4"></source>
          </video>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: 1, sm: 0.53, md: 0.8 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Dropdown myNftList={myNftList} tokenId={tokenId} disable={disable} />
      </Box>
    </Box>
  );
};

export default MobileScreen;
