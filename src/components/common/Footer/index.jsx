import { Box, Typography } from "@mui/material";
import React from "react";
// import FacebookIcon from '../../../images/footer/social-icons/Vector.png'
import DiscordIcon from "../../../images/footer/social-icons/Discord.svg";
import InstagramIcon from "../../../images/footer/social-icons/Instagram.svg";
// import TikTokIcon from '../../../images/footer/social-icons/TikTok.png'
import TwitterIcon from "../../../images/footer/social-icons/Twitter.svg";
// import FlowImage from '../../../images/footer/social-icons/Flow.png'
import NFLImage from "../../../images/footer/social-icons/NFL.png";
import FlowLogo_Green_White from "../../../images/footer/social-icons/FlowLogo_Green_White.svg";

//import footer icons
import BuffaloBills from "../../../images/footer/icons/Buffalo Bills.svg";
import ArizonaCardinals from "../../../images/footer/icons/Arizona Cardinals.svg";
import AtlantaFalcons from "../../../images/footer/icons/Atlanta Falcons.svg";
import BaltimoreRavens from "../../../images/footer/icons/Baltimore Ravens.svg";
import CarolinaPanthers from "../../../images/footer/icons/Carolina Panthers.svg";
import ChicagoBear from "../../../images/footer/icons/Chicago Bears.svg";
import CincinnatiBengals from "../../../images/footer/icons/Cincinnati Bengals.svg";
import ClevelandBrowns from "../../../images/footer/icons/Cleveland Browns.svg";
import DallasCowboys from "../../../images/footer/icons/Dallas Cowboys.svg";
import DenverBroncos from "../../../images/footer/icons/Denver Broncos.svg";
import DetroitLions from "../../../images/footer/icons/Detroit Lions.svg";
import GreenBayPackers from "../../../images/footer/icons/Green Bay Packers.svg";
import HoustonTexans from "../../../images/footer/icons/Houston Texans.svg";
import IndianapolisColts from "../../../images/footer/icons/Indianapolis Colts.svg";
import JacksonvilleJaguars from "../../../images/footer/icons/Jacksonville Jaguars.svg";
import KansasCityChiefs from "../../../images/footer/icons/Kansas City Chiefs.svg";
import LasVegasRaiders from "../../../images/footer/icons/Las Vegas Raiders.svg";
import LosAngelesChargers from "../../../images/footer/icons/Los Angeles Chargers.svg";
import LosAngelesRams from "../../../images/footer/icons/Los Angeles Rams.svg";
import MiamiDolphins from "../../../images/footer/icons/Miami Dolphins.svg";
import MinnesotaVikings from "../../../images/footer/icons/Minnesota Vikings.svg";
import NewEnglandPatriots from "../../../images/footer/icons/New England Patriots.svg";
import NewOrleansSaints from "../../../images/footer/icons/New Orleans Saints.svg";
import NewYorkGiants from "../../../images/footer/icons/New York Giants.svg";
import NewYorkJets from "../../../images/footer/icons/New York Jets.svg";
import PhiladelphiaEagles from "../../../images/footer/icons/Philadelphia Eagles.svg";
import PittsburghSteelers from "../../../images/footer/icons/Pittsburgh Steelers.svg";
import SanFrancisco49ers from "../../../images/footer/icons/San Francisco 49ers.svg";
import SeattleSeahawks from "../../../images/footer/icons/Seattle Seahawks.svg";
import TampaBayBuccaneers from "../../../images/footer/icons/Tampa Bay Buccaneers.svg";
import TennesseeTitans from "../../../images/footer/icons/Tennessee Titans.svg";
import WashingtonCommanders from "../../../images/footer/icons/Washington Commanders.svg";

import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <Box
      justifyContent="space-evenly"
      display="block"
      sx={{
        backgroundColor: "primary.main",
        height: "264px",
        alignSelf: "center",
      }}
    >
      <Box display="block" m="auto" textAlign={"center"}>
        <div className="footer-links"></div>
      </Box>
      <div
        className="container pb-3"
        display="block"
        style={{ textAlign: "center" }}
      >
        <div className="row" style={{ padding: "16px" }}>
          <div className="col-5 text-start mx-0 responsive-show">
            <Box
              display="block"
              m="auto"
              className="p-0 "
              textAlign={"left"}
              style={{ width: "250%" }}
            >
              <div className=" responsive-footer-link">
                <div className="mx-0 ">
                  <Link to="/about" state={{isFaq:true}} className="other-link footer-link link "  >
                    FAQ
                  </Link>

                  <br />
                  <a
                    href="https://www.ab-inbev.com/nftterms/"
                    target="_blank"
                    rel="noreferrer"
                    className="other-link footer-link link"
                  >
                    Terms and Conditions
                  </a>
                </div>

                {/*}<div className='mx-0'>
                  <a href="https://www.budlight.com/terms-and-conditions/" target='_blank' className='other-link footer-link link' >Terms and Conditions </a>
                </div>
                */}
              </div>
            </Box>
            <Box
              display="block"
              m="auto"
              textAlign={"left"}
              style={{ width: "250%" }}
            >
              <div className=" responsive-footer-link">
                <div className="mx-0">
                  <a
                    href="https://www.budlight.com/contact-us/"
                    target="_blank"
                    rel="noreferrer"
                    className="other-link footer-link link"
                  >
                    Contact Us
                  </a>
                  <br />
                  <a
                    href="https://www.budlight.com/privacy-policy/"
                    target="_blank"
                    rel="noreferrer"
                    className="other-link footer-link link"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </Box>
            <Box
              display="block"
              m="auto"
              textAlign={"left"}
              style={{ width: "250%" }}
            >
              <div className=" responsive-footer-link">
                <div className="mx-0">
                  <a
                    href="https://www.budlight.com/california-residents-privacy-rights/"
                    target="_blank"
                    rel="noreferrer"
                    className="other-link footer-link link"
                  >
                    Do not sell my personal information
                  </a>
                  <br />
                  <a
                    href="https://www.tapintoyourbeer.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="other-link footer-link link"
                  >
                    Consumer information
                  </a>
                </div>
                {/*}<div className='mx-0'>
                  <a href="https://www.tapintoyourbeer.com/" target='_blank' className='other-link footer-link link' >Consumer information</a>
                </div>*/}
              </div>
            </Box>
          </div>
          <div className="col-7 responsive-show">
            <Box display="block" m="auto" textAlign={"right"}>
              <a
                className="footer-link "
                target={"_blank"}
                rel="noreferrer"
                display="inline"
                href="https://twitter.com/budlight"
              >
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  className="mx-1"
                  style={{ height: "18px" }}
                />
              </a>
              <a
                className="footer-link "
                target={"_blank"}
                rel="noreferrer"
                display="inline"
                href="https://www.instagram.com/budlight"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="mx-1"
                  style={{ height: "18px" }}
                />
              </a>
              <a
                className="footer-link me-0"
                target={"_blank"}
                rel="noreferrer"
                display="inline"
                href="https://discord.gg/budlight"
              >
                <img
                  src={DiscordIcon}
                  alt="Discord"
                  className="ms-1 me-0"
                  style={{ height: "22px", marginTop: "5px" }}
                />
              </a>
            </Box>
          </div>
        </div>
        <div className="responsive-hide container-fluid">
          <div className="row">
            <ul
              className="col-9 p-0 text-start nav-left"
              style={{ listStyleType: "none" }}
            >
              <li style={{ float: "left" }}>
                <Link
                  to="/about"
                  state={{ isFaq: true }}
                  className="other-link footer-link"
                >
                  FAQ
                </Link>
              </li>
              <li style={{ float: "left", paddingLeft: "10px" }}>
                <a
                  href="https://www.ab-inbev.com/nftterms/"
                  target="_blank"
                  rel="noreferrer"
                  className="other-link footer-link px-2"
                >
                  Terms and Conditions
                </a>
              </li>
              <li style={{ float: "left", paddingLeft: "10px" }}>
                <a
                  href="https://www.budlight.com/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                  className="other-link footer-link "
                >
                  Contact Us
                </a>
              </li>
              <li style={{ float: "left", paddingLeft: "10px" }}>
                <a
                  href="https://www.budlight.com/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="other-link footer-link px-2"
                >
                  Privacy Policy
                </a>
              </li>
              <li style={{ float: "left", paddingLeft: "10px" }}>
                <a
                  href="https://www.budlight.com/california-residents-privacy-rights/"
                  target="_blank"
                  rel="noreferrer"
                  className="other-link footer-link"
                  style={{ paddingRight: "10px" }}
                >
                  Do not sell my personal information
                </a>
              </li>
              <li style={{ float: "left", paddingLeft: "10px" }}>
                <a
                  href="https://www.tapintoyourbeer.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="other-link footer-link "
                >
                  Consumer information
                </a>
              </li>
            </ul>
            <div className="col-3 p-0">
              <Box display="block" m="auto" textAlign={"right"}>
                <a
                  className="footer-link"
                  target={"_blank"}
                  rel="noreferrer"
                  display="inline"
                  href="https://twitter.com/budlight"
                >
                  <img src={TwitterIcon} alt="Twitter" />
                </a>
                <a
                  className="footer-link"
                  target={"_blank"}
                  rel="noreferrer"
                  display="inline"
                  href="https://www.instagram.com/budlight"
                >
                  <img src={InstagramIcon} alt="Instagram" />
                </a>
                <a
                  className="footer-link me-0"
                  target={"_blank"}
                  rel="noreferrer"
                  display="inline"
                  href="https://discord.gg/budlight"
                >
                  <img
                    src={DiscordIcon}
                    alt="Discord"
                    style={{ width: "30px", height: "30px", marginTop: "5px" }}
                  />
                </a>
              </Box>
            </div>
          </div>
        </div>

        <hr className="responsive-m" />
        <div className="desktop-footer-responsive">
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={BuffaloBills} alt="png" />
            <img src={MiamiDolphins} alt="png" />
            <img src={NewEnglandPatriots} alt="png" />
            <img src={NewYorkJets} alt="png" />
            <img src={BaltimoreRavens} alt="png" />
            <img src={ClevelandBrowns} alt="png" />
            <img src={CincinnatiBengals} alt="png" />
            <img src={PittsburghSteelers} alt="png" />
            <img src={HoustonTexans} alt="png" />
            <img src={IndianapolisColts} alt="png" />
            <img src={JacksonvilleJaguars} alt="png" />
            <img src={TennesseeTitans} alt="png" />
            <img src={DenverBroncos} alt="png" />
            <img src={KansasCityChiefs} alt="png" />
            <img src={LasVegasRaiders} alt="png" />
            <img src={LosAngelesChargers} alt="png" />
          </div>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <img src={DallasCowboys} alt="png" />
            <img src={NewYorkGiants} alt="png" />
            <img src={PhiladelphiaEagles} alt="png" />
            <img src={WashingtonCommanders} alt="png" />
            <img src={ChicagoBear} alt="png" />
            <img src={DetroitLions} alt="png" />
            <img src={GreenBayPackers} alt="png" />
            <img src={MinnesotaVikings} alt="png" />
            <img src={AtlantaFalcons} alt="png" />
            <img src={NewOrleansSaints} alt="png" />
            <img src={CarolinaPanthers} alt="png" />
            <img src={TampaBayBuccaneers} alt="png" />
            <img src={ArizonaCardinals} alt="png" />
            <img src={LosAngelesRams} alt="png" />
            <img src={SanFrancisco49ers} alt="png" />
            <img src={SeattleSeahawks} alt="png" />
          </div>
        </div>
        <div className="pad-footer-responsive">
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={BuffaloBills} alt="png" />
            <img src={MiamiDolphins} alt="png" />
            <img src={NewEnglandPatriots} alt="png" />
            <img src={NewYorkJets} alt="png" />
            <img src={BaltimoreRavens} alt="png" />
            <img src={ClevelandBrowns} alt="png" />
            <img src={CincinnatiBengals} alt="png" />
            <img src={PittsburghSteelers} alt="png" />
          </div>
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={HoustonTexans} alt="png" />
            <img src={IndianapolisColts} alt="png" />
            <img src={JacksonvilleJaguars} alt="png" />
            <img src={TennesseeTitans} alt="png" />
            <img src={DenverBroncos} alt="png" />
            <img src={KansasCityChiefs} alt="png" />
            <img src={LasVegasRaiders} alt="png" />
            <img src={LosAngelesChargers} alt="png" />
          </div>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <img src={DallasCowboys} alt="png" />
            <img src={NewYorkGiants} alt="png" />
            <img src={PhiladelphiaEagles} alt="png" />
            <img src={WashingtonCommanders} alt="png" />
            <img src={ChicagoBear} alt="png" />
            <img src={DetroitLions} alt="png" />
            <img src={GreenBayPackers} alt="png" />
            <img src={MinnesotaVikings} alt="png" />
          </div>
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={AtlantaFalcons} alt="png" />
            <img src={NewOrleansSaints} alt="png" />
            <img src={CarolinaPanthers} alt="png" />
            <img src={TampaBayBuccaneers} alt="png" />
            <img src={ArizonaCardinals} alt="png" />
            <img src={LosAngelesRams} alt="png" />
            <img src={SanFrancisco49ers} alt="png" />
            <img src={SeattleSeahawks} alt="png" />
          </div>
        </div>
        <div className="iphone-footer-responsive">
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={BuffaloBills} alt="png" />
            <img src={MiamiDolphins} alt="png" />
            <img src={NewEnglandPatriots} alt="png" />
            <img src={NewYorkJets} alt="png" />
          </div>
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={BaltimoreRavens} alt="png" />
            <img src={ClevelandBrowns} alt="png" />
            <img src={CincinnatiBengals} alt="png" />
            <img src={PittsburghSteelers} alt="png" />
          </div>
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={HoustonTexans} alt="png" />
            <img src={IndianapolisColts} alt="png" />
            <img src={JacksonvilleJaguars} alt="png" />
            <img src={TennesseeTitans} alt="png" />
          </div>
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={DenverBroncos} alt="png" />
            <img src={KansasCityChiefs} alt="png" />
            <img src={LasVegasRaiders} alt="png" />
            <img src={LosAngelesChargers} alt="png" />
          </div>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <img src={DallasCowboys} alt="png" />
            <img src={NewYorkGiants} alt="png" />
            <img src={PhiladelphiaEagles} alt="png" />
            <img src={WashingtonCommanders} alt="png" />
          </div>
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={ChicagoBear} alt="png" />
            <img src={DetroitLions} alt="png" />
            <img src={GreenBayPackers} alt="png" />
            <img src={MinnesotaVikings} alt="png" />
          </div>
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={AtlantaFalcons} alt="png" />
            <img src={NewOrleansSaints} alt="png" />
            <img src={CarolinaPanthers} alt="png" />
            <img src={TampaBayBuccaneers} alt="png" />
          </div>
          <div className="d-flex " style={{ justifyContent: "space-between" }}>
            <img src={ArizonaCardinals} alt="png" />
            <img src={LosAngelesRams} alt="png" />
            <img src={SanFrancisco49ers} alt="png" />
            <img src={SeattleSeahawks} alt="png" />
          </div>
        </div>
        <div className="row col-lg-9 p-16">
          <Typography
            className="footer-copyright text-start py-0 my-3"
            style={{ fontSize: "80%" }}
          >
            Always Enjoy Responsibly. © 2022 Anheuser-Busch InBev BUD LIGHT ®
            BEER, St. Louis, MO. Do not share this content with minors.
          </Typography>
          <Typography
            className="footer-copyright text-start py-0 "
            style={{ fontSize: "80%" }}
          >
            ANHEUSER-BUSCH IS COMMITTED TO IMPROVING THE ACCESSIBILITY OF OUR
            WEBSITES FOR ALL USERS, INCLUDING THOSE WITH DISABILITIES. IF YOU
            EXPERIENCE ISSUES OR DIFFICULTIES ACCESSING ANY INFORMATION ON OUR
            SITE AS A RESULT OF A DISABILITY, WE WANT TO HEAR FROM YOU. PLEASE
            CONTACT US AT CRG@ANHEUSER-BUSCH.COM WITH YOUR CONTACT INFORMATION,
            THE WEB ADDRESS WHERE YOU EXPERIENCED THE ISSUE, AND A BRIEF
            DESCRIPTION OF THE PROBLEM. THIS EMAIL ADDRESS IS INTENDED FOR
            ACCESSIBILITY-RELATED INQUIRIES ONLY. IF YOU HAVE AN UNRELATED
            COMPLAINT OR FEEDBACK, PLEASE VISIT OUR SUPPORT PAGE.
          </Typography>
          <Typography
            className="footer-copyright text-start py-0 my-3"
            style={{ fontSize: "80%" }}
          >
            ©2022 NFL Properties, LLC. All Rights Reserved. <br />
            <br />
            Officially Licensed Partner of the National Football League Players
            Association © [2022]
          </Typography>

          <Typography
            className="footer-copyright text-start pt-0"
            style={{ fontSize: "80%" }}
          >
            No purchase necessary. Open to legal residents of the 50 United
            States and District of Columbia age 21 and older. Void where
            prohibited. Internet access is required. Enrollment begins on
            10/3/22 at 12:00 a.m. ET and ends on 1/5/23 at 11:59 p.m. ET, with
            intervening weekly deadlines for making team “picks.” Subject to
            Official Rules, which include non-purchase entry detail and other
            important details and dates, available at
            http://budlight.com/ultimatefandomrules. The NFL Entities (as
            defined in the Official Rules) have not offered or sponsored this
            promotion in any way.
            <br />
            <br />
          </Typography>
          <Typography
            className="footer-copyright text-start pt-0"
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "10px",
              alignItems: "center",
            }}
          >
            <img
              src={NFLImage}
              alt="NFL"
              style={{ width: "15%", paddingTop: "0px" }}
            />
            <br />
            <br />
            <img
              src={FlowLogo_Green_White}
              alt="Flow"
              style={{ width: "20%", height: "50%" }}
            />
            <br />
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
