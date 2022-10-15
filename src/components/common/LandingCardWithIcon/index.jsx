/* eslint-disable no-debugger */
import { CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { TrophyLogo, DollerLogo, TouchLogo } from "assets/Icons";
import cardBG3 from "images/landing/landing-png2.png";
import cardBG3Mobile from "images/landing/earn-tab-mobile.png";
import cardBG2 from "../../../videos/Three-Cards-Falling-Featuring-SF.mp4";
import cardBG from "../../../videos/Card-Bend-Feature-Patriots.mp4";

const CARD_TYPE = {
  MINT: "Mint",
  EARN: "Earn",
  BUY: "Buy",
};

const LandingCardWithIcon = () => {
  const [changeColor, setChangeColor] = useState(CARD_TYPE.MINT);

  const changeImage = (changeBG) => {
    switch (changeBG) {
      case CARD_TYPE.MINT:
        return (
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            playsInline
            key="video1"
          >
            <source src={cardBG} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
        );
      case CARD_TYPE.BUY:
        return (
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            playsInline
            key="video2"
          >
            <source src={cardBG2} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
        );

      case CARD_TYPE.EARN:
        return (
          <div style={{padding: "0px"}}>
          <div className="responsive-show">
          <img
            height="100%"
            width="100%"
            style={{ objectFit: "contain", padding: "0px"}}
            src={cardBG3Mobile}
            key="video3"
          />
          </div><div className="responsive-hide">
          <img
            height="100%"
            width="100%"
            style={{objectFit: "contain", position: "relative", top: "100px"}}
            src={cardBG3}
            key="video3"
          />
          </div>
          </div>
        );

      default:
        break;
    }
  };

  const changeCardColor = (name) => {
    const videoToShow = name;
    setChangeColor(videoToShow);
  };

  return (
    <Box
      display="flex"
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
      justifyContent="space-between"
      width="100%"
      gap={3}
      pb={10}
    >
      <Box
        sx={{
          width: {
            xs: 1,
            md: 0.55,
          },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
        height="530px"
      >
        {changeImage(changeColor)}
      </Box>
      <Box
        sx={{
          width: {
            xs: 1,
            md: 0.45,
          },
        }}
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <Box
          sx={{
            width: 1,
            height: 250,
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          {changeImage(CARD_TYPE.MINT)}
        </Box>
        <CardActionArea
          sx={{
            p: { xs: 0.5, md: 4 },
            borderRadius: 2,
            display: "flex",
            gap: 2,
            alignItems: "flex-start",
            "&:hover": { background: "#383E55" },
          }}
          onClick={() => changeCardColor(CARD_TYPE.MINT)}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <TouchLogo />
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="h6">Purchase  & Pick ‘Em</Typography>
            <Typography variant="body2" sx={{ width: "80%" }}>
              Purchase a Bud Light Team Can to get in the game. Each week, pick the winning team of a single matchup. Each team can only be picked once per NFT, so choose wisely!
              
            </Typography>
          </Box>
        </CardActionArea>
        <Box
          sx={{
            width: 1,
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <Box style={{width: "100%"}}>{changeImage(CARD_TYPE.EARN)}</Box>
        </Box>
        <CardActionArea
          sx={{
            p: { xs: 0.5, md: 3 },
            cursor: "pointer",
            display: "flex",
            gap: 2,
            borderRadius: 2,
            alignItems: "flex-start",
            "&:hover": { background: "#383E55" },
          }}
          onClick={() => changeCardColor(CARD_TYPE.EARN)}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <TrophyLogo />
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="h6">Earn Streaks & Get Prizes</Typography>
            <Typography variant="body2" sx={{ width: "80%" }}>
              Build your streak by correctly picking winners over consecutive weeks. As your streak grows, become eligible for a chance  to win increasingly epic rewards—from jerseys to a year’s worth of beer to a chance at Super Bowl LVII tickets.
            </Typography>
          </Box>
        </CardActionArea>
        <Box
          sx={{
            width: 1,
            height: 250,
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          {changeImage(CARD_TYPE.BUY)}
        </Box>
        <CardActionArea
          sx={{
            p: { xs: 0.5, md: 3 },
            cursor: "pointer",
            display: "flex",
            gap: 2,
            borderRadius: 2,
            alignItems: "flex-start",
            justifyContent : 'flex-start',
            "&:hover": { background: "#383E55" },
          }}
          onClick={() => changeCardColor(CARD_TYPE.BUY)}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <DollerLogo />
          </Box>
          <Box display="flex" flexDirection="column" gap={1} >
            <Typography variant="h6" style={{ textAlign: "left" }}>Buy on the Marketplace</Typography>
            <Typography variant="body2" >
              Streak over? Buy another Team Can and try again. Once your streak is over, you can also list your Team Can for sale on the marketplace. But this means any remaining utility and unawarded prizes will go to the new owner.

            </Typography>
          </Box>
        </CardActionArea>
      </Box>
    </Box>
  );
};

export default LandingCardWithIcon;
