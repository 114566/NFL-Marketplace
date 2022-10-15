import {
  Box,
  Button,
  CircularProgress,
  Image,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";
//import useProvideAuth from "../../hooks/auth";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import blockies from "ethereum-blockies";
import { Avatar } from "@mui/material";
import SampleAvatar from "../../assets/image/profile_image.svg";
import discord_small from "../../images/landing/discord_small.svg";
import { VectorLogo } from "assets/Icons";
import { VectorLogowhite } from "assets/Icons";
import dark from "theme/palette/dark";
// Takes a long hash string and truncates it.
function truncateHash(hash, length = 38) {
  return hash.replace(hash.substring(6, length), "...");
}

const Header = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const navigate = useNavigate();
  const { user, signIn, isSignedIn, signOut, isAuthLoading } = useAuth();

  // const [popupAllowed, setPopupAllowed] = useState(false);
  //
  //
  // useEffect(() => {
  //   var test = window.open(null, "", "width=1,height=1");
  //   try {
  //     test.close();
  //     // alert("Pop-ups not blocked.");
  //     console.log('Popups are allowed.');
  //     setPopupAllowed(true);
  //   } catch (e) {
  //     alert("Enable browser popup and refresh page to login.");
  //     console.log('Popups are blocked.');
  //     setPopupAllowed(false);
  //   }
  // }, []);

  const topMove = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    return setTimeout(() => {
      document.getElementById("navbarSupportedContent").className =
        "navbar-collapse mobile-nav collapse";
    }, [100]);
  };

  let blockieImageSrc;
  if (typeof window !== "undefined") {
    blockieImageSrc = blockies
      .create({ seed: "0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359" })
      .toDataURL();
  }

  return (
    <div className="top-header">
      <nav className="navbar navbar-expand-sm container nav-1 mt-2">
        <div
          className="container-fluid large-nav header-responsive-navbar"
          // style={{ position: "relative" }}
        >
          <Link
            className="navbar-brand logo-header m-auto"
            to="/"
            onClick={topMove}
          >
            <svg
              width="132"
              height="32"
              viewBox="0 0 132 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M131.291 3.77681C131.291 1.50109 129.834 0.0262582 127.584 0.0262582H104.858L85.3173 0H84.9278H84.8271L26.779 0.0262582H3.70678C1.45733 0.0262582 0 1.50109 0 3.77681V28.2495C0 30.5252 1.45733 32 3.70678 32H84.0394H127.584C129.834 32 131.291 30.5252 131.291 28.2495V3.77681ZM127.554 29.6543H3.73742C2.84464 29.6543 2.32385 29.1554 2.32385 28.2495V3.80744C2.32385 2.90591 2.84902 2.37637 3.73742 2.37637H84.0613H127.554C128.446 2.37637 128.967 2.90591 128.967 3.80744V28.2495C128.967 29.151 128.446 29.6543 127.554 29.6543V29.6543Z"
                fill="#00B5E2"
              />
              <path
                d="M32.4597 18.582C32.4597 19.6542 31.7814 20.0875 30.9893 20.0875C30.1972 20.0875 29.5188 19.6673 29.5188 18.582V8.62577H23.9127V18.0043C23.9127 21.7374 26.0921 23.6236 31.0287 23.6236C35.6851 23.6236 37.9258 21.9956 37.9258 18.0043V8.62577H32.4597V18.582ZM47.2475 8.62577H39.6107V23.4048H46.9543C50.823 23.4048 54.4772 21.221 54.4772 15.8818C54.4772 10.5426 51.2125 8.62577 47.2475 8.62577ZM45.8252 20.1137H45.2431V11.8599H45.7989C46.8667 11.8599 48.7048 12.0218 48.7048 15.8774C48.7048 19.733 47.0899 20.1137 45.8252 20.1137ZM109.523 12.1181H113.046V23.4048H118.884V12.1181H122.416V8.63015H109.519V12.1181H109.523ZM121.361 21.3435C120.775 21.3435 120.302 21.8161 120.302 22.3982C120.302 22.9803 120.775 23.4573 121.361 23.4573C121.948 23.4573 122.416 22.9846 122.416 22.3982C122.416 21.8118 121.943 21.3435 121.361 21.3435ZM121.361 23.2603C120.884 23.2603 120.499 22.8752 120.499 22.3982C120.499 21.9212 120.884 21.5404 121.361 21.5404C121.838 21.5404 122.215 21.9212 122.215 22.3982C122.215 22.8752 121.834 23.2603 121.361 23.2603ZM121.895 22.1881C121.895 22.07 121.865 21.9606 121.76 21.8905C121.676 21.838 121.545 21.8336 121.449 21.8336H120.897V22.9803H121.121V22.4945H121.344L121.593 22.9803H121.856L121.58 22.4945C121.781 22.4813 121.891 22.3938 121.891 22.1881H121.895ZM121.458 22.3238H121.125V22.0043H121.401C121.51 22.0043 121.672 22.0043 121.672 22.1531C121.672 22.3019 121.58 22.3282 121.458 22.3282V22.3238ZM102.661 14.035H99.602V8.63015H93.9696V23.4048H99.602V17.6936H102.661V23.4048H108.298V8.63015H102.661V14.035ZM64.5735 8.63015H58.7792V23.4048H69.3175V19.7374H64.5735V8.63015ZM86.5079 11.9868C87.9783 11.9868 89.1337 12.6345 89.9915 13.4048L92.5429 10.4638C90.8711 8.98901 88.8755 8.22314 86.0921 8.22314C81.1775 8.22314 77.7551 11.0547 77.7551 16.0481C77.7551 21.4266 80.8974 23.8774 86.1709 23.8774C88.4685 23.8774 90.5473 23.4573 92.3459 22.6958V14.989H85.5319V17.9431H87.3V20.4376C87.1249 20.477 86.7705 20.5164 86.4466 20.5164C84.2409 20.5164 83.5188 18.7439 83.5188 16.0525C83.5188 13.2034 84.7004 11.9912 86.5035 11.9912L86.5079 11.9868ZM70.521 23.4091H76.3985V8.63015H70.521V23.4048V23.4091ZM20.2847 15.4223C21.6414 14.8008 22.4247 13.7417 22.4247 12.3544C22.4247 9.94306 20.6435 8.62577 17.8908 8.62577H8.87549V23.4048H17.9127C20.6085 23.4048 22.8361 22.07 22.8361 18.9759C22.8361 17.0853 21.602 15.9256 20.2847 15.4223ZM14.3416 11.663H15.9783C16.7311 11.663 17.2956 12.0875 17.2956 13.0897C17.2956 14.2713 16.7398 14.6433 15.9521 14.6433H14.3416V11.663ZM16.1359 20.3107H14.3416V17.1159H16.1359C16.8449 17.1159 17.5363 17.4485 17.5363 18.6827C17.5363 19.9999 16.8755 20.3107 16.1359 20.3107Z"
                fill="white"
              />
            </svg>
          </Link>
          {/* <div className="meta-link-mobile">
            <Link to="/" className="nav-link" href="#">
            &nbsp;BETA
            </Link>
          </div> */}
          <button
            style={{ outline: "none", border: "1px solid white" }}
            className="navbar-toggler btn btn-info hamburger  toggle-button-fixed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <i className="fa fa-bars text-white"></i>
          </button>
        </div>
        <div
          className="collapse navbar-collapse mobile-nav"
          id="collapsibleNavbar"
          style={{ marginRight: { xs: "none", sm: "100px", md: "100px" } }}
        >
          <ul className="navbar-nav">
            {/* <li className="nav-item mx-2">
                            <Link to="/prizes" className="nav-link" onClick={topMove}>
                                PRIZES
                            </Link>
                        </li> */}

            <li className="nav-item mx-2 p-0 responsive-lg-hide">
              <Link to="/about" className="nav-link px-0" onClick={topMove}>
                HOW TO PLAY
              </Link>
            </li>

            {isSignedIn() ? (
              <li className="nav-item mx-2 px-0 responsive-lg-hide">
                <Link
                  to="/collection"
                  className="nav-link"
                  onClick={topMove}
                  style={{ width: "150px" }}
                >
                  MY COLLECTION
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-2 px-0 responsive-lg-hide">
                <Box>
                  <a
                    onClick={() => {
                      signIn();
                      topMove();
                    }}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    MY COLLECTION
                  </a>
                </Box>
              </li>
            )}
            {/*<li className="nav-item mx-2">*/}
            {/*    <Link to="/pickem" className="nav-link" onClick={topMove}>*/}
            {/*        PickEm*/}
            {/*    </Link>*/}
            {/*</li>*/}
            <li
              className="nav-item mx-2 px-0 responsive-lg-hide"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <a
                href="https://ab-nfl.myshopify.com/"
                target="_self"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
                onClick={topMove}
              >
                PURCHASE
              </a>
            </li>
            {/* <li className="nav-item mx-2">
              <Link
                to="/pickem"
                className="nav-link"
                onClick={topMove}
                style={{ width: "125px" }}
              >
                PLAY
              </Link>
            </li> */}

            {/* <li
              className="nav-item mx-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <a
                href="https://pickem.mint.store"
                target="_blank"
                rel="noreferrer"
                onClick={topMove}
                style={{ textDecoration: "none", width: "135px" }}
              >
                MARKETPLACE
              </a>
            </li> */}
            <li className="nav-item mx-2 px-0 responsive-lg-hide">
              <Link to="/prizes" className="nav-link" onClick={topMove}>
                PRIZES
              </Link>
            </li>
            {/* <li className="nav-item mx-2 p-0 responsive-lg-hide">
              <a href="#" className="nav-link px-0" onClick={() => window.open("https://discord.gg/budlight")}>
                DISCORD
              </a>
            </li> */}
            <li className="nav-item mx-2 p-0 responsive-lg-hide">
              <a
                href="#"
                className="nav-link px-0"
                onClick={() => navigate("/marketplace")}
              >
                MARKETPLACE
              </a>
            </li>
            {isSignedIn() ? (
              <>
                <Box sx={{ display: ["flex", "none"] }}>
                  <li className="nav-item mx-2">
                    <Avatar src={SampleAvatar} />
                    <Box>{truncateHash(user.addr)}</Box>
                  </li>
                </Box>
                <Box sx={{ display: ["flex", "none"] }}>
                  <li className="nav-item mx-2">
                    <Link to="#" className="nav-link" onClick={signOut}>
                      LOG OUT
                    </Link>
                  </li>
                </Box>
              </>
            ) : (
              <Box sx={{ display: ["flex", "none"] }}>
                <li className="nav-item mx-2 px-0">
                  {isAuthLoading ? (
                    <CircularProgress color="secondary" />
                  ) : (
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Box>
                        <a
                          onClick={() =>
                            window.open("https://discord.gg/budlight")
                          }
                          className="mobile-discord-btn"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            className="px-0"
                            style={{
                              textDecoration: "none",
                              textTransform: "uppercase",
                              fontWeight: "700",
                            }}
                          >
                            <img src={discord_small} alt="discord" />
                          </Button>
                        </a>
                      </Box>
                      <Box>
                        <a onClick={signIn}>SIGN IN</a>
                      </Box>
                    </Box>
                  )}
                </li>
              </Box>
            )}
          </ul>
        </div>
        <div
          className="responsive-back"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            // right: "-15px",
          }}
        >
          {/* <Link to="/" className="nav-link" href="#">
          BETA
          </Link> */}

          {isSignedIn() ? (
            <>
              <Avatar
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/collection")}
                src={SampleAvatar}
              />
              {/* <img src={{uri: blockieImageSrc}} alt="blockie" /> */}
              <Box
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/collection")}
              >
                {truncateHash(user.addr)}
              </Box>
              <Button
                variant="contained"
                onClick={signOut}
                style={{ background: "white", color: "black" }}
              >
                LOG OUT
              </Button>
              <Button
                variant="contained"
                onClick={() =>
                  window.open("https://ab-nfl.myshopify.com/", "_self")
                }
              >
                Buy Now
              </Button>
              <Box
                style={{ cursor: "pointer" }}
                onClick={() => window.open("https://discord.gg/budlight")}
              >
                <img src={discord_small} />
              </Box>
            </>
          ) : (
            <Box
              sx={{
                display: ["none", "flex"],
                width: "175px",
                marginRight: "120px",
              }}
            >
              {isAuthLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Box display="flex" gap={2}>
                  <Button
                    variant="contained"
                    onClick={signIn}
                    style={{
                      width: "100px",
                      color: "black",
                      background: "white",
                    }}
                    sx={{ width: 0.5 }}
                  >
                    SIGN IN
                  </Button>
                  <Button
                    className="bg-white"
                    variant="contained"
                    onClick={() =>
                      window.open("https://ab-nfl.myshopify.com/", "_self")
                    }
                    style={{ width: "120px" }}
                    sx={{ width: 0.5 }}
                  >
                    Buy Now
                  </Button>
                  <Box
                    style={{ cursor: "pointer" }}
                    onClick={() => window.open("https://discord.gg/budlight")}
                  >
                    <img src={discord_small} />
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-xl nav-2"
        style={{ background: "#061148 " }}
      >
        <div
          className="container mt-2 "
          style={{ justifyContent: "space-between" }}
        >
          <Button
            className="bg-white"
            variant="contained"
            onClick={() =>
              window.open("https://ab-nfl.myshopify.com/", "_self")
            }
            style={{ width: "4px", fontSize: "10px" }}
            sx={{ width: 0.4 }}
          >
            Buy Now
          </Button>
          <Link className="navbar-brand logo-header" to="/" onClick={topMove}>
            <svg
              width="122"
              height="32"
              className="ms-1"
              viewBox="0 0 132 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M131.291 3.77681C131.291 1.50109 129.834 0.0262582 127.584 0.0262582H104.858L85.3173 0H84.9278H84.8271L26.779 0.0262582H3.70678C1.45733 0.0262582 0 1.50109 0 3.77681V28.2495C0 30.5252 1.45733 32 3.70678 32H84.0394H127.584C129.834 32 131.291 30.5252 131.291 28.2495V3.77681ZM127.554 29.6543H3.73742C2.84464 29.6543 2.32385 29.1554 2.32385 28.2495V3.80744C2.32385 2.90591 2.84902 2.37637 3.73742 2.37637H84.0613H127.554C128.446 2.37637 128.967 2.90591 128.967 3.80744V28.2495C128.967 29.151 128.446 29.6543 127.554 29.6543V29.6543Z"
                fill="#00B5E2"
              />
              <path
                d="M32.4597 18.582C32.4597 19.6542 31.7814 20.0875 30.9893 20.0875C30.1972 20.0875 29.5188 19.6673 29.5188 18.582V8.62577H23.9127V18.0043C23.9127 21.7374 26.0921 23.6236 31.0287 23.6236C35.6851 23.6236 37.9258 21.9956 37.9258 18.0043V8.62577H32.4597V18.582ZM47.2475 8.62577H39.6107V23.4048H46.9543C50.823 23.4048 54.4772 21.221 54.4772 15.8818C54.4772 10.5426 51.2125 8.62577 47.2475 8.62577ZM45.8252 20.1137H45.2431V11.8599H45.7989C46.8667 11.8599 48.7048 12.0218 48.7048 15.8774C48.7048 19.733 47.0899 20.1137 45.8252 20.1137ZM109.523 12.1181H113.046V23.4048H118.884V12.1181H122.416V8.63015H109.519V12.1181H109.523ZM121.361 21.3435C120.775 21.3435 120.302 21.8161 120.302 22.3982C120.302 22.9803 120.775 23.4573 121.361 23.4573C121.948 23.4573 122.416 22.9846 122.416 22.3982C122.416 21.8118 121.943 21.3435 121.361 21.3435ZM121.361 23.2603C120.884 23.2603 120.499 22.8752 120.499 22.3982C120.499 21.9212 120.884 21.5404 121.361 21.5404C121.838 21.5404 122.215 21.9212 122.215 22.3982C122.215 22.8752 121.834 23.2603 121.361 23.2603ZM121.895 22.1881C121.895 22.07 121.865 21.9606 121.76 21.8905C121.676 21.838 121.545 21.8336 121.449 21.8336H120.897V22.9803H121.121V22.4945H121.344L121.593 22.9803H121.856L121.58 22.4945C121.781 22.4813 121.891 22.3938 121.891 22.1881H121.895ZM121.458 22.3238H121.125V22.0043H121.401C121.51 22.0043 121.672 22.0043 121.672 22.1531C121.672 22.3019 121.58 22.3282 121.458 22.3282V22.3238ZM102.661 14.035H99.602V8.63015H93.9696V23.4048H99.602V17.6936H102.661V23.4048H108.298V8.63015H102.661V14.035ZM64.5735 8.63015H58.7792V23.4048H69.3175V19.7374H64.5735V8.63015ZM86.5079 11.9868C87.9783 11.9868 89.1337 12.6345 89.9915 13.4048L92.5429 10.4638C90.8711 8.98901 88.8755 8.22314 86.0921 8.22314C81.1775 8.22314 77.7551 11.0547 77.7551 16.0481C77.7551 21.4266 80.8974 23.8774 86.1709 23.8774C88.4685 23.8774 90.5473 23.4573 92.3459 22.6958V14.989H85.5319V17.9431H87.3V20.4376C87.1249 20.477 86.7705 20.5164 86.4466 20.5164C84.2409 20.5164 83.5188 18.7439 83.5188 16.0525C83.5188 13.2034 84.7004 11.9912 86.5035 11.9912L86.5079 11.9868ZM70.521 23.4091H76.3985V8.63015H70.521V23.4048V23.4091ZM20.2847 15.4223C21.6414 14.8008 22.4247 13.7417 22.4247 12.3544C22.4247 9.94306 20.6435 8.62577 17.8908 8.62577H8.87549V23.4048H17.9127C20.6085 23.4048 22.8361 22.07 22.8361 18.9759C22.8361 17.0853 21.602 15.9256 20.2847 15.4223ZM14.3416 11.663H15.9783C16.7311 11.663 17.2956 12.0875 17.2956 13.0897C17.2956 14.2713 16.7398 14.6433 15.9521 14.6433H14.3416V11.663ZM16.1359 20.3107H14.3416V17.1159H16.1359C16.8449 17.1159 17.5363 17.4485 17.5363 18.6827C17.5363 19.9999 16.8755 20.3107 16.1359 20.3107Z"
                fill="white"
              />
            </svg>
          </Link>
          <button
            className="navbar-toggler btn-info toggle-button-fixed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <i className="fa fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2 px-0 responsive-lg-hide">
                {isSignedIn() ? (
                  <Link
                    to="/about"
                    className="nav-link"
                    onClick={topMove}
                    style={{
                      width: "125px",
                      paddingBottom: "0px",
                      cursor: "pointer",
                    }}
                  >
                    HOW TO PLAY
                  </Link>
                ) : (
                  <Link
                    to="/about"
                    className="nav-link"
                    onClick={topMove}
                    style={{
                      width: "125px",
                      paddingBottom: "0px",
                      cursor: "pointer",
                    }}
                  >
                    HOW TO PLAY
                  </Link>
                )}
              </li>

              {isSignedIn() ? (
                <li className="nav-item mx-2 px-0 responsive-lg-hide">
                  <Link
                    to="/collection"
                    className="nav-link"
                    onClick={topMove}
                    style={{ cursor: "pointer" }}
                  >
                    MY COLLECTION
                  </Link>
                </li>
              ) : (
                <li className="nav-item mx-2 px-0 responsive-lg-hide">
                  <Box>
                    <a
                      onClick={() => {
                        signIn();
                      }}
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                    >
                      MY COLLECTION
                    </a>
                  </Box>
                </li>
              )}
              {/*<li className="nav-item mx-2">*/}
              {/*    <Link to="/pickem" className="nav-link" onClick={topMove}>*/}
              {/*        PickEm*/}
              {/*    </Link>*/}
              {/*</li>*/}
              <li
                className="nav-item mx-2 px-0 responsive-lg-hide"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://ab-nfl.myshopify.com/"
                  target="_self"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  rel="noreferrer"
                  onClick={topMove}
                >
                  PURCHASE
                </a>
              </li>
              {/* <li className="nav-item mx-2">
              <Link
                to="/pickem"
                className="nav-link"
                onClick={topMove}
                style={{ width: "125px" }}
              >
                PLAY
              </Link>
            </li> */}

              {/* <li
              className="nav-item mx-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <a
                href="https://pickem.mint.store"
                target="_blank"
                rel="noreferrer"
                onClick={topMove}
                style={{ textDecoration: "none", width: "135px" }}
              >
                MARKETPLACE
              </a>
            </li> */}
              <li className="nav-item mx-2 px-0 responsive-lg-hide">
                <Link to="/prizes" className="nav-link" onClick={topMove}>
                  PRIZES
                </Link>
              </li>
              {/* <a
                onClick={() => window.open("https://discord.gg/budlight")}
                className="nav-item mx-2 px-0 responsive-lg-hide"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="px-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  style={{
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: "400",
                    cursor: "pointer",
                    paddingBottom: "5px",
                  }}
                >
                  Discord
                </div>
              </a> */}
               <a
                onClick={() =>Navigate("/marketplace")}
                className="nav-item mx-2 px-0 responsive-lg-hide"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="px-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  style={{
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: "400",
                    cursor: "pointer",
                    paddingBottom: "5px",
                  }}
                >
                  MARKETPLACE
                </div>
              </a>

              {isSignedIn() ? (
                <>
                  <Box sx={{ display: ["flex", "none"] }}>
                    <li className="nav-item mx-2" style={{ cursor: "pointer" }}>
                      <Avatar
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/collection")}
                        src={SampleAvatar}
                      />
                      <Box
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/collection")}
                      >
                        {truncateHash(user.addr)}
                      </Box>
                    </li>
                  </Box>
                  <Box sx={{ display: ["flex", "none"] }}>
                    <li className="nav-item mx-2" style={{ cursor: "pointer" }}>
                      <Link
                        to="#"
                        className="nav-link"
                        onClick={signOut}
                        style={{ cursor: "pointer" }}
                      >
                        LOG OUT
                      </Link>
                    </li>
                  </Box>
                </>
              ) : (
                <Box sx={{ display: ["flex", "none"] }}>
                  <li className="nav-item mx-2 px-0">
                    {isAuthLoading ? (
                      <CircularProgress color="secondary" />
                    ) : (
                      <Box display="flex" flexDirection="column" gap={1}>
                        <Box>
                          <a onClick={signIn} style={{ cursor: "pointer" }}>
                            SIGN IN
                          </a>
                        </Box>
                      </Box>
                    )}
                  </li>
                </Box>
              )}
              <a
                onClick={() =>window.open("https:/discord.gg/budlight")}
                className="nav-item mx-2 px-0 responsive-lg-hide"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="px-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  style={{
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: "400",
                    cursor: "pointer",
                    paddingBottom: "5px",
                  }}
                >
                  DISCORD
                </div>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
