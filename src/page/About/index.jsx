import { Box } from "@mui/system";
import React, { useEffect } from "react";
import "./about.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Footer from "../../components/common/Footer";
import Faq from "../../components/accodian/faq";
import Nftimge from "../../images/about/football.png";
import Bg1 from "../../images/about/about-3.png";
// import play from "../../images/about/Image.png";
import TimingBg from "../../images/about/timming-bg.png";
import Aboutbg2 from "../../images/about/about-bg-2.png";
import Aboutbg3 from "../../images/mobile.png";
// import about2 from "../../images/about/about-2.png";
// import about3 from "../../images/about/about-4.png";
import sideLines from "../../images/about/SideLines.png";
// import Vedio from "../../videos/home_page_DESKTOP.mp4";
import grabYourNftVideo from "../../videos/Cards-Fan-Out-Feature-Giants.mp4";
import nftGridWeb from "../../images/about/NFTGridWeb.png";
import { useLocation } from "react-router-dom";
// import nftGridM from "../../images/about/NFTGridMobile.png";

const About = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.isFaq) {
      setTimeout(() => {
        document.getElementById("getfaq")?.scrollIntoView();
      }, 200);
    }
  }, [state?.isFaq]);

  // isFaq
  return (
    <>
      {/* <div className="container mb-3">
        <Grid className="section-about" container spacing={2}>
          <Grid item xs={12} md={5} className="responsive-hide">
            <img src={about2} alt="img" style={{ width: "100%" }} />
            <video width="100%" height="500" autoPlay muted loop>
              <source src={Vedio} type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video>
          </Grid>
          <Grid item xs={12} md={1} className="responsive-hide"></Grid>
          <Grid item xs={12} md={6}>
            <Box className="about-heading">
              <Typography
                className="title-about"
                display={"block"}
                variant="h1" style={{"font-family" : "Titling Gothic FB Compressed", "font-size" : "80px","font-style" : "normal", "font-weight" : "500"}}
              >
                {" "}
                Welcome to Bud Light Survivor Pick ‘Em
              </Typography>
              <Typography
                display={"block"}
                variant="p"
                className="fontSize20 col-lg-9"
              >
                {" "}
               Your Bud Light x NFL Ultimate Fandom digital collectible could be your ticket to Super Bowl LVII. Simply pick a team each week to build your streak and earn a chance to win rewards along the way.{" "}
              </Typography>
            </Box>
            <div>
              <svg
                width="221"
                height="372"
                viewBox="0 0 221 372"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  top: "400px",
                  width: "180px",
                  right: "0px",
                }}
              >
                <g opacity="0.05">
                  <ellipse
                    rx="13.3736"
                    ry="13.6216"
                    transform="matrix(-0.993297 0.11559 0.134252 0.990947 153.991 25.7024)"
                    stroke="white"
                    strokeWidth="6.98696"
                  />
                  <path
                    d="M167.851 37.8005L148.302 66.4717M143.702 41.9034L172.452 62.3688"
                    stroke="white"
                    strokeWidth="6.98696"
                  />
                  <path
                    d="M184.955 154.66C147.454 147.598 116.462 134.637 71.5815 102.155"
                    stroke="white"
                    strokeWidth="4.65797"
                  />
                  <path
                    d="M51.0147 89.1377L77.5988 120.997L91.559 98.1244L51.0147 89.1377Z"
                    fill="white"
                  />
                  <path
                    d="M185.046 164.721L165.497 193.393M160.897 168.824L189.647 189.29"
                    stroke="white"
                    strokeWidth="6.98696"
                  />
                  <path
                    d="M188.567 190.708L169.018 219.379M164.418 194.811L193.167 215.276"
                    stroke="white"
                    strokeWidth="6.98696"
                  />
                  <ellipse
                    rx="13.3736"
                    ry="13.6216"
                    transform="matrix(-0.993297 0.11559 0.134252 0.990947 181.885 231.593)"
                    stroke="white"
                    strokeWidth="6.98696"
                  />
                  <path
                    d="M170.322 237.519C161.681 244.047 156.846 245.942 146.329 247.166"
                    stroke="white"
                    strokeWidth="4.65798"
                  />
                  <path
                    d="M145.551 228.972L146.324 263.731"
                    stroke="white"
                    strokeWidth="4.65798"
                  />
                  <path
                    d="M197.203 257.811L178.187 286.854M173.143 262.365L202.248 282.299"
                    stroke="white"
                    strokeWidth="6.98696"
                  />
                  <ellipse
                    rx="13.3736"
                    ry="13.6216"
                    transform="matrix(-0.993297 0.11559 0.134252 0.990947 191.026 299.071)"
                    stroke="white"
                    strokeWidth="6.98696"
                  />
                  <path
                    d="M54.9757 324.036L55.5005 361.109"
                    stroke="white"
                    strokeWidth="4.65798"
                  />
                  <path
                    d="M55.9054 343.372C80.3864 341.475 139.023 331.071 177.72 304.63"
                    stroke="white"
                    strokeWidth="4.65798"
                  />
                </g>
              </svg>
            </div>
          </Grid>
          <div className="container d-grey ms-0 responsive-hide" style={{ 'width': '100%', "paddingLeft": '16px', 'paddingRight': '0px' }}>
          <button className='btn-submit-email-landing btn-block mt-4' > BUTTON TEXT</button>
          <button className='btn-submit-email-landing1 btn-block  mt-3' > BUTTON TEXT</button>
        </div>

          <Grid item xs={12} md={6} className="responsive-show mt-4">
            <img src={about3} alt="img" style={{ width: "100%" }} />
            <video width="100%" height="200" autoPlay muted loop>
              <source src={Vedio} type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video>
          </Grid>
        </Grid>
      </div> */}
      {/* New Changes corresponding to official Figma start*/}
      <div className="responsive-hide container about-heading" id="top">
        <div className="about-subHeaders">
          <Typography
            className="title-about"
            display={"block"}
            variant="h1"
            style={{
              fontFamily: "Titling Gothic FB Compressed",
              fontSize: "80px",
              fontStyle: "normal",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Welcome to Bud Light Survivor Pick ‘Em
          </Typography>
        </div>
        <div className="about-subHeaders">
          <Typography
            display={"block"}
            variant="p"
            className="fontSize20 col-lg-9"
          >
            {" "}
            Your Bud Light x NFL Ultimate Fandom digital collectible could be
            your ticket to Super Bowl LVII. Simply pick a team each week to
            build your streak and earn a chance to win rewards along the way.{" "}
          </Typography>
        </div>
      </div>
      <div className="responsive-show container about-heading">
        <div className="about-subHeaders" style={{ textAlign: "center" }}>
          <Typography
            className="title-about"
            display={"block"}
            variant="h1"
            style={{
              fontFamily: "Titling Gothic FB Compressed",
              fontSize: "80px",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            Welcome to Bud Light Survivor Pick ‘Em
          </Typography>
        </div>
        <div className="about-subHeaders" style={{ textAlign: "center" }}>
          <Typography
            display={"block"}
            variant="p"
            className="fontSize20 col-lg-9"
          >
            {" "}
            Your Bud Light x NFL Ultimate Fandom digital collectible could be
            your ticket to Super Bowl LVII. Simply pick a team each week to
            build your streak and earn a chance to win rewards along the way.{" "}
          </Typography>
        </div>
      </div>

      <div
        /*className='responsive-hide'*/ style={{
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <img src={nftGridWeb} style={{ width: "100%" }} alt="img" />
      </div>

      {/* <div className='responsive-show' style={{ paddingTop: '5%', paddingBottom: '15%' }}>
        <img src={nftGridWeb} style={{ width: '100%' }} alt="img" />
      </div> */}

      {/* New Changes corresponding to official Figma end*/}
      <div className="overflow-hidden mb-5 d-flex ">
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography
              className="letterpad line-one watermark"
              style={{ display: "inline" }}
              display={"d-block"}
              variant="h1"
            >
              HOW IT WORKS HOW IT WORKS HOW IT WORKS HOW IT WORKS HOW IT WORKS
              HOW IT WORKS HOW IT WORKS HOW IT WORKS HOW IT WORKS HOW IT WORKS
            </Typography>
            <Typography
              className="letterpad line-two watermark"
              style={{ width: "fit-content" }}
              display={"d-block"}
              variant="h1"
            >
              HOW IT WORKS HOW IT WORKS HOW IT WORKS HOW IT WORKS HOW IT WORKS
              HOW IT WORKS HOW IT WORKS HOW IT WORKS HOW IT WORKS HOW IT WORKS
            </Typography>
          </Grid>
        </Grid>
      </div>
      <img src={sideLines} alt="png" className="responsive-hide side-line" />
      {/* NFT Section */}
      <div>
        <div className="section-about container" direction="row" spacing={2}>
          <div className="row custom-row">
            <div className="col-lg-5  mt-4">
              <Box className="about-nft">
                {/* <img
                  src={play}
                  alt="png"
                  style={{ width: "100%" }}
                  className="responsive-show"
                /> */}
                <div className="responsive-show">
                  <video
                    width="100%"
                    height="300"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={grabYourNftVideo} type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                  </video>
                </div>
                <Typography
                  display={"block"}
                  variant="h2"
                  style={{
                    fontWeight: 500,
                    fontSize: "48px",
                    lineHeight: "56px",
                  }}
                  className="mt-4 title-grab responsive-hide"
                >
                  {" "}
                  Grab Your Team Cans
                </Typography>
                <Typography
                  display={"block"}
                  variant="heading3"
                  className="mt-4 title-grab responsive-show"
                >
                  {" "}
                  Grab Your Team Cans
                </Typography>
                <Typography
                  mt={2}
                  display={"block"}
                  variant="para2"
                  className="content-grab"
                >
                  Set up your Dapper account and purchase one or multiple Bud
                  Light team cans featuring your favorite NFL team.
                </Typography>
                <Typography
                  mt={3}
                  display={"block"}
                  variant="para2"
                  className="content-grab"
                >
                  Your can is your key to the game and for a chance to win
                  prizes like official NFL jerseys & tickets to watch your
                  favorite team.
                </Typography>
              </Box>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 responsive-hide">
              {/* <img src={play} alt="png" style={{ width: "100%" }} /> */}
              <video width="100%" height="500" autoPlay muted loop playsInline>
                <source src={grabYourNftVideo} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="section-about container" direction="row" spacing={2}>
          <div className="row custom-row">
            <div className="col-lg-6">
              <img src={Bg1} alt="png" style={{ width: "100%" }} />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 mt-4">
              <Box className="about-nft">
                <Typography
                  display={"block"}
                  variant="h3"
                  className="mt-4 title-grab responsive-hide"
                >
                  {" "}
                  Get In The Game
                </Typography>
                <Typography
                  display={"block"}
                  variant="heading3"
                  className="mt-4 title-grab responsive-show"
                >
                  {" "}
                  Get In The Game
                </Typography>
                {/* <Typography mt={2} display={'block'} variant='para2' className='content-grab'>
                {`If you pick right for 13 straight weeks, you're guaranteed playoff tickets—and a chance to go to the Super Bowl!`}
              </Typography> */}
                <Typography
                  mt={3}
                  display={"block"}
                  variant="para2"
                  className="content-grab"
                >
                  With your NFT minted, come back weekly and make your pick!
                  Choose one team to win from one matchup per week. You can only
                  pick a team once, so choose wisely.{" "}
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="section-about container" direction="row" spacing={2}>
          <div className="row custom-row">
            <div className="col-lg-5 mt-4">
              <Box className="about-nft">
                <img
                  src={Nftimge}
                  alt="png"
                  style={{ width: "100%" }}
                  className="responsive-show "
                />
                <Typography
                  display={"block"}
                  variant="h3"
                  className="mt-4 title-grab responsive-hide"
                >
                  {" "}
                  Play For A Chance To Win Big
                </Typography>
                <Typography
                  display={"block"}
                  variant="heading3"
                  className="mt-4 title-grab responsive-show"
                >
                  {" "}
                  Play For A Chance To Win Big
                </Typography>

                <Typography
                  mt={2}
                  display={"block"}
                  variant="para2"
                  className="content-grab"
                >
                  {`If you make all the right calls, you’ll be eligible to win each one of the prizes, and you’ll be among the top winners who could get playoff tickets as well as a chance to go to the Super Bowl!`}
                </Typography>
                <Typography
                  mt={3}
                  display={"block"}
                  variant="para2"
                  className="content-grab"
                >
                  {" "}
                </Typography>
              </Box>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <img
                src={Nftimge}
                alt="png"
                style={{ width: "100%", cursor: 'default'  }}
                className="responsive-hide"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timing Section */}

      {/* <div className='py-5' style={{ backgroundImage: `url(${TimingBg})` }} >
      <div className='container' >
        <Grid item xs={10} md={7} className='m-0'>
          <Typography mb={1} className='timing-title responsive-hide' color={'primary.darktext'} display={'block'} variant='h2' > Timing</Typography>
          <Typography mb={1} className='timing-title responsive-show' color={'primary.darktext'} display={'block'} variant='h3' > Timing</Typography>
          <Typography color={'primary.darktext'} display={'block'} variant='para2' > Understand key moments throughout the season to stay locked in! Come back each week to make your picks. 
</Typography>
        </Grid>

      </div>
      <div className='time-grid container' spacing={8}>
        <div className='row'>
          <div className='col-lg-4 mt-3'>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="4" fill="#061148" />
              <path d="M15 22L20 27L30 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <Typography className='grid-title' display={'block'} variant='p3' >  Make your weekly picks</Typography>
            <Typography className="grid-content" color={'primary.lightGray'} display={'block'} variant='body3' > Your Bud Light Team Can is your key to making weekly picks. The pick period begins at the start of each NFL week on Tuesday.
</Typography>
          </div>
          <div className='col-lg-4 mt-3'>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="4" fill="#061148" />
              <path d="M15 22L20 27L30 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Typography className='grid-title' display={'block'} variant='p3' > A chance to win epic prizes</Typography>

            <Typography className="grid-content" color={'primary.lightGray'} display={'block'} variant='body3' >
            Build your streak and be eligible for a chance to win prizes throughout the season that any football fan would love.

            </Typography>
          </div>
          <div className='col-lg-4 mt-3' >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="4" fill="#061148" />
              <path d="M15 22L20 27L30 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Typography className='grid-title' display={'block'} variant='p3' > Buy back until end of season</Typography>

            <Typography className="grid-content" color={'primary.darktext'} display={'block'} variant='body3' >
           If you lose during the season, you can play again by buying a new Bud Light Team Can.
            </Typography>
          </div>
        </div>
      </div>
    </div> */}
      <div className="py-5" style={{ backgroundImage: `url(${TimingBg})` }}>
        <div className="container">
          <Grid item xs={10} md={7} className="m-0">
            <Typography
              mb={1}
              className="timing-title"
              color={"primary.darktext"}
              display={"block"}
              variant="h2"
            >
              {" "}
              Timing
            </Typography>
            <Typography
              color={"primary.darktext"}
              display={"block"}
              variant="p"
            >
              {" "}
              Understand key moments throughout the season to stay locked in!
              Come back each week to make your picks.
            </Typography>
          </Grid>
        </div>
        <div className="time-grid container" spacing={8}>
          <div className="row">
            <div className="col-lg-4 mt-3">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="4" fill="#061148" />
                <path
                  d="M15 22L20 27L30 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Typography
                className="grid-title"
                color={"primary.darktext"}
                display={"block"}
                variant="h6"
                style={{
                  fontFamily: "Titling Gothic FB Narrow",
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
              >
                Make your weekly picks
              </Typography>
              <Typography
                className="grid-content"
                color={"primary.darktext"}
                display={"block"}
                variant="body"
                style={{
                  fontFamily: "Neue Haas Grotesk Text Pro",
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                {" "}
                Your Bud Light Team Can is your key to making weekly picks. The pick period begins at the start of each NFL week on Tuesday.

              </Typography>
            </div>
            <div className="col-lg-4 mt-3">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="4" fill="#061148" />
                <path
                  d="M15 22L20 27L30 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Typography
                className="grid-title"
                color={"primary.darktext"}
                display={"block"}
                variant="h6"
                style={{
                  fontFamily: "Titling Gothic FB Narrow",
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
              >
                {" "}
                A chance to win epic prizes
              </Typography>

              <Typography
                className="grid-content"
                color={"primary.darktext"}
                display={"block"}
                variant="body"
                style={{
                  fontFamily: "Neue Haas Grotesk Text Pro",
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                Build your streak and be eligible for a chance to win prizes throughout the season that any football fan would love.

              </Typography>
            </div>
            <div className="col-lg-4 mt-3" >
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="4" fill="#061148" />
                <path
                  d="M15 22L20 27L30 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Typography
                className="grid-title"
                color={"primary.darktext"}
                display={"block"}
                variant="h6"
                style={{
                  fontFamily: "Titling Gothic FB Narrow",
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
              >
                {" "}
                Buy back until end of season
              </Typography>

              <Typography
                 id="getfaq"
                className="grid-content"
                color={"primary.darktext"}
                display={"block"}
                variant="body"
                style={{
                  fontFamily: "Neue Haas Grotesk Text Pro",
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                If you lose during the season, you can play again by buying a new Bud Light Team Can.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="light-bg section-faq">
        <div className="container">
          <div className="row col-lg-8 offset-lg-2">
            <Grid className="heading-faq" item xs={10} md={10}>
              <Typography
                className="title-faq mt-5 responsive-hide"
                color={"primary.lightDark"}
                display={"block"}
                variant="h2"
              >
                FAQ
              </Typography>
              <Typography
                className="title-faq mt-5 responsive-show"
                color={"primary.lightDark"}
                display={"block"}
                variant="h3"
              >
                {" "}
                FAQ{" "}
              </Typography>
            </Grid>
            <div className="faq-list container pt-5">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Aboutbg2})`,
          backgroundSize: "100% 100%",
          width: "100%",
          textAlign: "center",
        }}
        className="section-with-radu responsive-hide"
      >
        <div>
          <Grid item xs={10} md={10} className="mb-3">
            <Typography variant="h3" className="title">
              {" "}
              Get in the Game{" "}
            </Typography>
          </Grid>
          <a href="#" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: [0.5, 200, 200],
                color: "black",
                border: "1px solid white",
              }}
              className="responsive-hide  m-auto"
              onClick={() => window.open("https://discord.gg/budlight")}
              // size="large"
              // variant="outlined"
              variant="outlined"
              size="large"
              style={{ background: "white" }}
            >
              JOIN DISCORD{" "}
              <svg
                style={{ marginLeft: "8px" }}
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
          <Grid item xs={12} md={12}></Grid>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Aboutbg3})`,
          backgroundSize: "100% 100%",
          width: "100%",
          // border: "10px solid #fff",
        }}
        className="section-with-radu responsive-show"
      >
        <div>
          <Grid item xs={10} md={10} className="mb-3">
            <Typography variant="h3" className="title">
              {" "}
              Get in the Game{" "}
            </Typography>
          </Grid>
          <a
            href="#"
            onClick={() => window.open("https://discord.gg/budlight")}
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                width: [0.5, 200, 200],
                color: "black",
                border: "1px solid white",
              }}
              className="responsive-show m-auto"
              // size="large"
              // variant="outlined"
              variant="outlined"
              size="large"
              style={{ background: "white" }}
            >
              JOIN DISCORD{" "}
              <svg
                style={{ marginLeft: "8px" }}
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
          <Grid item xs={12} md={12}></Grid>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
