import { Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import "./landing.css";
import landingImage2 from "../../images/landing/desktop.png";
import landingImage3 from "../../images/landing/mobile_landing.png";
import Footer from "../../components/common/Footer";
import LandingCardWithIcon from "../../components/common/LandingCardWithIcon";
import Subheading from "components/common/SubHeadings";
import Vedio from "../../videos/home_page_DESKTOP.mp4";
import Countdown from "components/common/Countdown";
import kickOffBackground from "../../../src/images/landing/CTA-Banners.png";
const Landing = () => {
  return (
    <>
      <div className="container m-10" id="top">
        <div className="section-landing-heading">
          <Grid item xs={12} md={10}>
            <Box className="landing-heading">
              <Typography
                className="title col-lg-10"
                display={"block"}
                variant="h1"
                style={{ paddingBottom: "15px" }}
              >
                Bud Light x NFL Ultimate Fandom<br />Survivor Pick ‘Em 2022
              </Typography>
            </Box>
          </Grid>
          <div className="row responsive-hide">
            <Box display="flex" gap={1} style={{ flexDirection: 'column' }}>
              {/*} <Button
                sx={{ width: [0.5, 200, 200] }}
                // onClick={signOut}
                size="large"
                variant="contained"
              >
                SIGN IN
              </Button>*/}

              <Button
                sx={{
                  width: [0.5, 200, 200],
                  color: "white"
                }}
                onClick={() => window.open("https://ab-nfl.myshopify.com/","_self")}
                // size="large"
                // variant="outlined"
                variant="outlined"
                size="large"
                style={{ 'background': 'linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)', 'border': '1px solid #181853' }}
              >
                BUY NOW
              </Button>            <Typography display={"block"} className="col-lg-9" variant="body" style={{paddingTop:"0px" }}>
              <a href="https://youtu.be/sYKHHbQkCuo" target="_blank" rel="noreferrer" style={{"textUnderlineOffset" : "5px", "fontSize" : "18px"}}>How to Buy</a>
            </Typography>
            </Box>
          </div>

          <div className="row responsive-show">
            <Box display="flex" gap={1} className="responsiveipadbutton text-center">
              {/* <Button
                sx={{ width: [1, 200, 200] }}
                onClick={() => window.open("https://www.budlight.com/nfl-nft/")}
                size="large"
                style={{ fontSize: "16px" }}
                variant="contained"
              >
                SIGN IN
              </Button>*/}

              <Button
                sx={{
                  width: [1, 200, 200],
                  color: "white",
                }}
                style={{ 'background': 'linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)', 'border': '1px solid #181853' }}
                onClick={() => window.open("https://ab-nfl.myshopify.com/","_self")}
                // size="large"
                // variant="outlined"
                variant="outlined"
                size="large"
              >
                BUY NOW
              </Button>
            </Box>
            <Typography display={"block"} className="col-lg-9" variant="body" style={{paddingTop:"10px" }}>
              <a href="https://youtu.be/sYKHHbQkCuo" target="_blank" rel="noreferrer" style={{"textUnderlineOffset" : "5px"}}>How to Buy</a>
            </Typography>
          </div>

          <Grid item xs={12} md={7} className="mt-4">
            <Typography display={"block"} className="col-lg-9" variant="body">
              Join the Bud Light Ultimate Fandom community. Buy a Bud Light Team Can to unlock team utility and gain entry into our Survivor Pick ‘Em game where you can compete for a chance to win epic prizes, including official NFL jerseys, a year’s worth of beer, and tickets to Super Bowl LVII.

            </Typography>
          </Grid>
          <div className="container-fluid mt-4"> 
            <div className="svg-hide" id="svg-hide">
              <svg
                width="320"
                height="251"
                viewBox="0 0 320 251"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  right: "40px",
                  top: "250px",
                  width: "250px",
                }}
              >
                <g opacity="0.05">
                  <path
                    d="M197.569 129.692L224.901 102.417M196.961 103.089L225.509 129.019"
                    stroke="white"
                    strokeWidth="7.44512"
                  />
                  <path
                    d="M115.499 130.168L142.832 102.893M114.891 103.565L143.439 129.496"
                    stroke="white"
                    strokeWidth="7.44512"
                  />
                  <path
                    d="M70.7551 211.07L98.0879 183.795M70.1474 184.467L98.6956 210.398"
                    stroke="white"
                    strokeWidth="7.44512"
                  />
                  <path
                    d="M250.879 30.9293L278.733 4.13595M250.786 4.31864L278.826 30.7466"
                    stroke="white"
                    strokeWidth="7.44512"
                  />
                  <ellipse
                    rx="14.5154"
                    ry="15.2437"
                    transform="matrix(-0.0767994 -0.997047 0.997333 -0.072981 31.432 229.875)"
                    stroke="white"
                    strokeWidth="7.44512"
                  />
                  <ellipse
                    rx="14.5154"
                    ry="15.2437"
                    transform="matrix(-0.0767994 -0.997047 0.997333 -0.072981 212.568 199.643)"
                    stroke="white"
                    strokeWidth="7.44512"
                  />
                  <path
                    d="M216.626 186.007C221.963 175.342 223.02 169.772 222.137 158.315"
                    stroke="white"
                    strokeWidth="4.96341"
                  />
                  <path
                    d="M202.001 161.607L240.317 154.558"
                    stroke="white"
                    strokeWidth="4.96341"
                  />
                  <ellipse
                    rx="14.5154"
                    ry="15.2437"
                    transform="matrix(-0.0767994 -0.997047 0.997333 -0.072981 266.06 199.368)"
                    stroke="white"
                    strokeWidth="7.44512"
                  />
                  <path
                    d="M264.67 49.0762L305.473 41.239"
                    stroke="white"
                    strokeWidth="4.96341"
                  />
                  <path
                    d="M286.088 45.6856C289.188 72.1414 290.179 136.835 269.347 183.962"
                    stroke="white"
                    strokeWidth="4.96341"
                  />
                  <path
                    d="M160.884 239.816C145.196 201.546 124.41 171.533 79.2577 131.175"
                    stroke="white"
                    strokeWidth="4.96341"
                  />
                  <path
                    d="M60.6126 112.255L101.209 133.302L79.0579 153.323L60.6126 112.255Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Grid
            className="section-landing-image mt-5 p-0"
            item
            xs={12}
            md={12}
            display="flex"
            justifyContent="center"
          >
            {/* <Paper sx={{ backgroundColor: "linear-gradient(0deg, #1C2240, #1C2240), rgba(255, 255, 255, 1)", width: "100%", height: "496px" }}></Paper> */}
            {/* <img src={Weeklyimage} alt="png" style={{ width: "100%" }} /> */}
            <div className="responsive-hide">
              <video width="1050" height="600" autoPlay muted loop playsInline>
                <source src={Vedio} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
              </video>
            </div>
            <div className="responsive-show">
              <video width="100%" height="200" autoPlay muted loop playsInline>
                <source src={Vedio} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
              </video>
            </div>
          </Grid>
        </div>
      </div>
      <div className="container m-10 text-center">
        <Grid
          justifyContent="center"
          className="section-how-heading mb-4"
        // container="true"
        >
          <Grid item xs={12} md={7}>
            <Typography className="h2-title" variant="h1">
              How It Works
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              className="col-lg-10"
              variant="body4"
            >
              Flex your fandom. Make your picks. Compete for a chance to win NFL prizes and experiences.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="container">
        <LandingCardWithIcon />
      </div>

      <Box width={1} display="flex" justifyContent="center">
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
          gap={5}
          
        >
          <Subheading
            heading="And There’s More"
            body="Whether you’re in the game or not, your Team Can will get you access to exclusive perks and utility."
          />
          <div className='img-box container ' style={{ 'cursor': 'default' }}>
            <img height="100%" width="100%" src={landingImage2} className='responsive-hide' style={{ 'cursor': 'default' }} />
            <img height="100%" width="100%" src={landingImage3} className='responsive-show' style={{ 'cursor': 'default' }} />
          </div>
        </Box>
      </Box>

      <div className="container-fluid mt-5 py-5 text-center" style={{ 'background': 'linear-gradient(248.6deg, #00B5E2 0%, #0032C7 57.55%, #001C71 100%)' }}>
        <Typography variant='h2' className='pt-2 mb-3'>Picks Lock In</Typography>
        <Typography variant='p' ><small>Last chance to pick a winner from any matchup of this week’s NFL schedule. You can only pick a team once. If you miss your pick you will be eliminated from the game.</small></Typography>
        <div className='mt-3'>
          <Countdown />
        </div>
      </div>
      <Box
        mt={7}
        display="flex"
        width="100%"
        flexDirection="column"
        gap={2}
        alignItems="center"
        sx={{
          background: `linear-gradient(rgba(3, 10, 43, 0.2), rgba(3, 10, 43, 0.2)) 0% 0% / cover, url(${kickOffBackground}) center center no-repeat`,
          backgroundPosition: "center",

          backgroundSize: "cover",
        }}
        height="408px"
        justifyContent="center"
      >
        <div className="responsive-hide text-center">
          <Subheading heading="Join the community and stay in the conversation" />
        </div>
        <div className="responsive-show text-center">
          <Subheading heading="Join the community and stay in the conversation" />
        </div>
        <Grid
          item
          md={12}
          className="my-0 px-2"
          style={{
            paddingTop: "10px",
            cursor: "pointer",
            width: "100%",
            textAlign: "center",
          }}
        >
          <a href="#" style={{ 'textDecoration': 'none' }}>
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
      </Box>

      <Footer />
    </>
  );
};

export default Landing;
