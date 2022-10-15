import { Box, Container } from "@mui/system";
import React from "react";
import { Button } from "@mui/material";

import "./prizes.css";
// import NFTicon from "./../../images/prizes/icons/NFT.svg";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Footer from "../../components/common/Footer";
import Pricebg from "../../images/prizes/icons/prizes1.png";
import badata from "../../images/time.png";
import svgimgs from "../../images/svgs/Football Lines (1).svg";
import "./prizes2.css";
import topsvg from "../../images/prizes/Grand Prize.svg";
import topmobilesvg from "../../images/prizes/Card.svg";
import desktopcardsvg1 from "../../images/prizes/desktop_svg/Prize Row.svg";
import desktopcardsvg2 from "../../images/prizes/desktop_svg/Prize Row (1).svg";
import desktopcardsvg3 from "../../images/prizes/desktop_svg/Prize Row (2).svg";
import desktopcardsvg4 from "../../images/prizes/desktop_svg/Prize Row (3).svg";
import desktopcardsvg5 from "../../images/prizes/desktop_svg/Prize Row (4).svg";
import desktopcardsvg6 from "../../images/prizes/desktop_svg/Prize Row (5).svg";
import desktopcardsvg7 from "../../images/prizes/desktop_svg/Prize Row (6).svg";
import mobilesvg13 from "../../images/prizes/svg/Prize Card (1).svg";
import mobilesvg12 from "../../images/prizes/svg/Prize Card (2).svg";
import mobilesvg11 from "../../images/prizes/svg/Prize Card (3).svg";
import mobilesvg10 from "../../images/prizes/svg/Prize Card (4).svg";
import mobilesvg9 from "../../images/prizes/svg/Prize Card (5).svg";
import mobilesvg8 from "../../images/prizes/svg/Prize Card (6).svg";
import mobilesvg7 from "../../images/prizes/svg/Prize Card (7).svg";
import mobilesvg6 from "../../images/prizes/svg/Prize Card (8).svg";
import mobilesvg5 from "../../images/prizes/svg/Prize Card (9).svg";
import mobilesvg4 from "../../images/prizes/svg/Prize Card (10).svg";
import mobilesvg3 from "../../images/prizes/svg/Prize Card (11).svg";
import mobilesvg2 from "../../images/prizes/svg/Prize Card (12).svg";
import mobilesvg14 from "../../images/prizes/svg/Prize Card.svg";
{/*import { tickets } from "./data";*/ }

const Prizes = () => {
  return (
    <>
      <div className="svgdivintop" id='top'>
        <img src={svgimgs} style={{ width: "197px", height: "303px" }}></img>
      </div>
      <div className="svgdivinbottom">
        <img src={svgimgs} style={{ width: "210px", height: "284px" }}></img>
      </div>
      <div className="section-tickets mt-0" style={{ overflow: "hidden" }}>
        <div className="container mt-0">
          <Grid className="section-about mt-0" container spacing={10}>

            <Grid item xs={12} md={12}>
              <Box className="about-heading m-20-2">
                <Typography
                  className="title-about"
                  display={"block"}
                  variant="h1"
                >
                  Survive Each Week For a Chance to Win Big
                </Typography>
                <Typography display={"block"} variant="p">
                  Pick a winning team each week to build your streak.<br /><br />Your streak will make you eligible for epic prizes—from official NFL jerseys, to a year’s worth of beer, to tickets to and more! The higher the streak, the higher your chance of winning.<br /><br />
                  You could win multiple prizes. You’ll be entered for a chance to win each prize up to your maximum streak. For example, if you have a 6 point streak, you’ll be entered to win the individual prizes associated with streak 1, 2, 3, 4, 5, and 6.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography
                className="text-left letterpad line-one overfill watermark"
                display={"d-block"}
                variant="h1"
                style={{ width: "3000px", overflow: "hidden", marginLeft: '-540px' }}
              >
                PRIZES PRIZES PRIZES PRIZES PRIZES PRIZES PRIZES PRIZES PRIZES
                PRIZES PRIZES PRIZES
              </Typography>
              <Typography><br />&nbsp;</Typography>
            </Grid>
          </Grid>
        </Container>

        <div style={{ 'width': '100%' }}>
          <div className="container responsive-hide">
            <div className="row">
              <div className="col-lg-10 .superBowls2 offset-lg-1">
                <img src={topsvg} alt='img' className="grand_prize_full_width" />
              </div>
              <div className="col-lg-12">
                <img src={desktopcardsvg1} alt='img' />
              </div>
              <div className="col-lg-12 mt-4">
                <img src={desktopcardsvg2} alt='img' />
              </div>
              <div className="col-lg-12 mt-4">
                <img src={desktopcardsvg3} alt='img' />
              </div>
              <div className="col-lg-12 mt-4">
                <img src={desktopcardsvg4} alt='img' />
              </div>
              <div className="col-lg-12 mt-4">
                <img src={desktopcardsvg5} alt='img' />
              </div>
              <div className="col-lg-12 mt-4">
                <img src={desktopcardsvg6} alt='img' />
              </div>
              <div className="col-lg-12 mt-4 mb-5">
                <img src={desktopcardsvg7} alt='img' />
              </div>
            </div>
          </div>
          <div className="container responsive-show">
            <div className="row">
              <div className="col-lg-6" style={{ "textAlign": "center" }}>
                <img src={topmobilesvg} alt='img' style={{ 'width': '100%' }} />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg14} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg13} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg12} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg11} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg10} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg9} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg8} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg7} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg6} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg5} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg4} alt='img' />
              </div>
              <div className="col-lg-6 mt-4">
                <img src={mobilesvg3} alt='img' />
              </div>
              <div className="col-lg-6 mt-4 mb-5">
                <img src={mobilesvg2} alt='img' />
              </div>
            </div>
          </div>
        </div>
        <Grid xs={12} md={12} item className='mt-4 mb-5'>
          <img src={Pricebg} alt="png" style={{ width: "100%" }}/>
        </Grid>
        <div className="py-5 mt-3" style={{ background: `white`, width: "100%" }}>
          <div className="">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 my-3">
                  <Typography className="howtoplay-title m-0 p-0" variant="h2">
                    How to Play
                  </Typography>
                  <Typography className="howtoplay-content mb-0 p-0">
                    Flex Your Fandom. Make your picks. Win a chance at NFL Experiences.
                  </Typography>
                  <div className="mt-3-2">
                    <a
                      href="https://www.budlight.com/ultimatefandomrules"
                      target="_blank"
                      className="blue-text-button"
                      rel="noreferrer"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <Typography
                    className="howtoplay-title m-0 p-0"
                    display={"block"}
                    variant="h2"
                  >
                    Read the Rules
                  </Typography>
                  <Typography className="howtoplay-content m-0 p-0">
                    Check out the official rules to the Bud Light x NFL Ultimate
                    Fandom - Survivor Pick ‘Em 2022
                  </Typography>
                  <div className="mt-3-2">
                    <a
                      href="https://www.budlight.com/ultimatefandomrules"
                      target="_blank"
                      className="blue-text-button"
                      rel="noreferrer"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container
          maxWidth="xl"
          style={{
            backgroundSize: "cover",
            padding: "10vw",
            background: `radial-gradient(52.7% 52.7% at 50% 47.3%, rgba(3, 10, 43, 0.175) 0%, rgba(3, 10, 43, 0.7) 100%), url(${badata})`,
          }}
          className="section-with-radu-prize"
        >
          <Grid justifyContent="center">
            <Grid textAlign={"center"} item xs={10} md={10}>
              <Typography variant="h2" className="title">
                It’s Go Time
              </Typography>
            </Grid>
            <Grid textAlign={"center"} item xs={12} md={12} className="mt-3" >
              <a href="#" style={{ 'textDecoration': 'none' }} >
                <Button
                  sx={{
                    width: [0.5, 200, 200],
                    color: "black",
                    border: '1px solid white'
                  }}
                  className='responsive-hide'
                  onClick={() => window.open("https://discord.gg/budlight")}
                  // size="large"
                  // variant="outlined"
                  variant="outlined"
                  size="large"
                  style={{ 'background': 'white' }}
                >
                  JOIN DISCORD <svg
                    style={{ 'marginLeft': '8px' }}
                    width="26"
                    height="23"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1262 11.3914C12.0478 11.2747 11.9721 11.1561 11.8992 11.0359C12.1726 10.9087 12.4397 10.7681 12.6996 10.6147L13.5497 10.1129L12.7326 9.55907C12.6388 9.49554 12.542 9.4219 12.4423 9.34052L12.1374 9.09165L11.7812 9.25916C10.5983 9.81546 9.30717 10.1039 7.99997 10.1039C6.69278 10.1039 5.40168 9.81546 4.21877 9.25916L3.87428 9.09715L3.57228 9.32892C3.46404 9.41199 3.35804 9.49292 3.25109 9.57049L2.47961 10.13L3.30025 10.6146C3.55937 10.7676 3.82569 10.9078 4.09823 11.0347C4.02528 11.1551 3.94955 11.2738 3.8711 11.3908C2.73073 11.0008 1.65149 10.4501 0.666116 9.75508C0.460139 7.05623 1.00236 4.32792 2.86004 1.51462C3.67769 1.15416 4.53087 0.881096 5.40535 0.699817C5.47106 0.833374 5.53325 0.968661 5.59186 1.10554L5.78197 1.54951L6.25954 1.47755C7.41206 1.30387 8.58411 1.30387 9.73663 1.47755L10.2143 1.54953L10.4044 1.10541C10.463 0.968391 10.5252 0.832974 10.591 0.699298C11.4652 0.879541 12.3181 1.15217 13.1352 1.51275C14.7563 3.94063 15.573 6.6477 15.3341 9.75628C14.3482 10.452 13.2679 11.0026 12.1262 11.3914ZM3.27619 6.6698C3.27619 7.83559 4.15053 8.89178 5.34212 8.89178C6.56143 8.89178 7.38875 7.82298 7.40671 6.67962C7.42517 5.50519 6.55084 4.44153 5.3396 4.44153C4.11818 4.44153 3.27619 5.51482 3.27619 6.6698ZM8.59315 6.6698C8.59315 7.83448 9.46397 8.89178 10.6578 8.89178C11.8778 8.89178 12.7032 7.82222 12.7212 6.67962C12.7396 5.50779 11.8727 4.44153 10.6578 4.44153C9.43548 4.44153 8.59315 5.51444 8.59315 6.6698Z"
                      fill="black"
                      stroke="#030A2B"
                      strokeWidth="1.25"
                    />
                  </svg>
                </Button>
                <Button
                  sx={{
                    width: '100%',
                    color: "black",
                    border: '1px solid white'
                  }}
                  className='responsive-show'
                  onClick={() => window.open("https://discord.gg/budlight")}
                  // size="large"
                  // variant="outlined"
                  variant="outlined"
                  size="large"
                  style={{ 'background': 'white' }}
                >
                  JOIN DISCORD <svg
                    style={{ 'marginLeft': '8px' }}
                    width="26"
                    height="23"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1262 11.3914C12.0478 11.2747 11.9721 11.1561 11.8992 11.0359C12.1726 10.9087 12.4397 10.7681 12.6996 10.6147L13.5497 10.1129L12.7326 9.55907C12.6388 9.49554 12.542 9.4219 12.4423 9.34052L12.1374 9.09165L11.7812 9.25916C10.5983 9.81546 9.30717 10.1039 7.99997 10.1039C6.69278 10.1039 5.40168 9.81546 4.21877 9.25916L3.87428 9.09715L3.57228 9.32892C3.46404 9.41199 3.35804 9.49292 3.25109 9.57049L2.47961 10.13L3.30025 10.6146C3.55937 10.7676 3.82569 10.9078 4.09823 11.0347C4.02528 11.1551 3.94955 11.2738 3.8711 11.3908C2.73073 11.0008 1.65149 10.4501 0.666116 9.75508C0.460139 7.05623 1.00236 4.32792 2.86004 1.51462C3.67769 1.15416 4.53087 0.881096 5.40535 0.699817C5.47106 0.833374 5.53325 0.968661 5.59186 1.10554L5.78197 1.54951L6.25954 1.47755C7.41206 1.30387 8.58411 1.30387 9.73663 1.47755L10.2143 1.54953L10.4044 1.10541C10.463 0.968391 10.5252 0.832974 10.591 0.699298C11.4652 0.879541 12.3181 1.15217 13.1352 1.51275C14.7563 3.94063 15.573 6.6477 15.3341 9.75628C14.3482 10.452 13.2679 11.0026 12.1262 11.3914ZM3.27619 6.6698C3.27619 7.83559 4.15053 8.89178 5.34212 8.89178C6.56143 8.89178 7.38875 7.82298 7.40671 6.67962C7.42517 5.50519 6.55084 4.44153 5.3396 4.44153C4.11818 4.44153 3.27619 5.51482 3.27619 6.6698ZM8.59315 6.6698C8.59315 7.83448 9.46397 8.89178 10.6578 8.89178C11.8778 8.89178 12.7032 7.82222 12.7212 6.67962C12.7396 5.50779 11.8727 4.44153 10.6578 4.44153C9.43548 4.44153 8.59315 5.51444 8.59315 6.6698Z"
                      fill="black"
                      stroke="#030A2B"
                      strokeWidth="1.25"
                    />
                  </svg>
                </Button>
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Prizes;
