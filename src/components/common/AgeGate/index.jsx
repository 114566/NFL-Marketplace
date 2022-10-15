import React, { useState } from "react";
import { useStyles } from "./Styles";
import BudLightLogo from "../../../assets/image/ageGate/BLCoreLogo.svg";
import { Typography, Button, useMediaQuery } from "@mui/material";
import axios from "axios";

const AgeGate = (props) => {
  const styles = useStyles();
  const matches900px = useMediaQuery("(min-width:900px)");
  const isLandscape = useMediaQuery("(max-height:450px)");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [passwordvaluechange, setPasswordChange] = useState('');
  const [year, setYear] = useState("");
  const [errorText, setErrorText] = useState("");
  const [password, SetPasswordStatus] = useState(false);
  const checkFormValidations = () => {
    if (Number(month) > 12 || Number(month) < 1) {
      setErrorText("Month must be between 1 and 12");
      setMonth("");
      document.getElementById("month").focus();
    } else if (Number(date) > 31 || Number(date) < 1) {
      setErrorText("Date must be between 1 and 31");
      setDate("");
      document.getElementById("day").focus();
    } else if (Number(year) > 2022 || Number(year) < 1900) {
      setErrorText("Year must be between 1900 and 2022");
      setYear("");
      document.getElementById("year").focus();
    } else {
      setErrorText("");
      fetchAgeGateResult();
    }
  };
  const SetPassword = (e) => {
    setPasswordChange(e.target.value);
  }
  const Checkpassword = () => {
    if (passwordvaluechange == 'success') {
      SetPasswordStatus(true);
    }
  }

  const fetchAgeGateResult = () => {
    let formSelector = document.getElementById("form");
    // let btnSelector = document.getElementById("submit");

    // get form action
    let url = formSelector.getAttribute("action");
    const countryCode = document.getElementById("countryCode").value;
    // attempts
    let agAttempts = Number(localStorage.getItem("agAttempts")) || 0;
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("agAttempts", 0);
    });
    axios
      .get(
        `${url}?T=2CECF070-1B17-4514-BE3B-2E6EE9E2ADF9&D=${date}&M=${month}&Y=${year}&C=${countryCode}&R=JSON`
      )
      .then((res) => {
        if (
          res.data.IsOfLegalDrinkingAge === true &&
          res.data.IsCountryRestricted === false
        ) {
          // set cookie
          setCookie("agegate", "valid");
        } else {
          setErrorText("Your are not eligible to access this site");
          setDate("");
          setMonth("");
          setYear("");
          if (agAttempts < 2) {
            // add to agAttempts
            localStorage.setItem("agAttempts", agAttempts + 1);
          } else {
            window.location = "https://www.tapintoyourbeer.com/";
          }
        }
      })
      .catch((error) => {
        console.log("error : ", error);
      });

    function setCookie(cname, cvalue) {
      // const d = new Date();
      // d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      // let expires = "expires=" + d.toUTCString();
      let cookieString = `${cname}=${cvalue};path=/`;
      document.cookie = cookieString;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      props.isValid(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {
        password == false ? <div> <div className={styles.bgImageContainer}>
          <div className="container offset-lg-4 col-lg-4 d-flex">
            <input type='password' name='password' className="form-control" onChange={SetPassword} style={{ "width": '100%', "maxWidth" : "400px"}} placeholder="Password" />
            <button className="btn btn-primary" type="button" onClick={Checkpassword}> OK </button>
          </div>
        </div></div> :
            <div className={styles.bgImageContainer}>
              <div className={styles.pageContent}>
                <div className={styles.logoContainer}>
                  <img
                    src={BudLightLogo}
                    className={styles.logo + ' responsive-flex-show-element'}
                    alt="Bud Light Logo"
                  />
                </div>
                <div className={styles.headerContainer}>
                  <Typography
                    className={styles.textContainer + " responsive-hide"}
                    variant="h2"
                    style={{
                      fontFamily: "Titling Gothic FB Compressed",
                      fontStyle: "normal",
                      fontWeight: "500",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    We Need to Check <br /> Your ID
                  </Typography>
                  <Typography
                    className={styles.textContainer + " responsive-show" + " responsive-flex-show-element"}
                    variant="h3"
                    style={{
                      marginTop: '13px',
                      fontFamily: "Titling Gothic FB Compressed",
                      fontStyle: "normal",
                      fontWeight: "300",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    We Need to Check Your ID
                  </Typography>
                </div>

                <div className={styles.description + " responsive-flex-show-element"}>
                  <Typography
                    style={{
                      fontFamily: "Neue Haas Grotesk Text Pro",
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    You must be of legal drinking age to enter this site
                  </Typography>
                </div>
                <div className={styles.errorText + " responsive-flex-show-element"}>
                  <Typography
                    style={{
                      fontFamily: "Neue Haas Grotesk Text Pro",
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      textAlign: "center",
                      color: "red",
                    }}
                  >
                    {errorText}
                  </Typography>
                </div>

                <div className={styles.formContainer}>
                  <form
                    action="https://webshop.anheuser-busch.com/lda/AgeCheck.aspx"
                    id="form"
                    method="GET"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: 'center',
                      height: "60",
                    }}
                    className="form-inline first agegateform px-4 responsive-flex-show"
                  >
                    <input
                      id="countryCode"
                      type="hidden"
                      value="US"
                      name="countryCode"
                    />
                    <div
                      className="form-group me-3"
                      style={{ width: (matches900px || isLandscape) ? "7%" : "14%", margin: "5px" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="month"
                        placeholder="MM"
                        min={1}
                        max={12}
                        maxLength={2}
                        value={month}
                        onChange={(e) => {
                          if (
                            /^\d+$/.test(e.target.value) ||
                            !e.target.value.length
                          ) {
                            setMonth(e.target.value);
                            month.length == 1 &&
                              document.getElementById("day").focus();
                          }
                        }}
                        required
                        autoFocus="autofocus"
                        style={{
                          textAlign: "center",
                          minWidth: '60px'
                        }}
                      />
                    </div>
                    <div
                      className="form-group mx-2"
                      style={{ width: (matches900px || isLandscape) ? "7%" : "14%", margin: "5px" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="day"
                        placeholder="DD"
                        min="1"
                        max="31"
                        maxLength="2"
                        value={date}
                        onChange={(e) => {
                          if (
                            /^\d+$/.test(e.target.value) ||
                            !e.target.value.length
                          ) {
                            setDate(e.target.value);
                            date.length == 1 &&
                              document.getElementById("year").focus();
                          }
                        }}
                        required
                        style={{
                          textAlign: "center",
                          minWidth: '60px'
                        }}
                      />
                    </div>
                    <div
                      className="form-group ms-3"
                      style={{ width: (matches900px || isLandscape) ? "8%" : "16%", margin: "5px" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="year"
                        placeholder="YYYY"
                        min="1900"
                        max="2500"
                        maxLength="4"
                        value={year}
                        onChange={(e) => {
                          if (
                            /^\d+$/.test(e.target.value) ||
                            !e.target.value.length
                          ) {
                            setYear(e.target.value);
                          }
                        }}
                        required
                        style={{
                          textAlign: "center",
                          minWidth: '60px'
                        }}
                      />
                    </div>

                    <Button
                      id="submit"
                      variant="contained"
                      sx={{
                        width: { xs: "100px", md: "100px" },
                        background:
                          "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)",
                        borderRadius: "48px",
                        color: "#FFFFFF",
                        "&.Mui-disabled": {
                          color: "#040825",
                        },
                        fontFamily: "Titling Gothic FB Narrow",
                        fontSize: "16px",
                        marginLeft: "15px",
                      }}
                      onClick={checkFormValidations}
                    >
                      ENTER
                    </Button>

                  </form>
                  <form
                    action="https://webshop.anheuser-busch.com/lda/AgeCheck.aspx"
                    id="form"
                    method="GET"
                    className="form-inline first agegateform px-2 responsive-hide"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: 'center',
                      height: "50",
                    }}
                  >
                    <input
                      id="countryCode"
                      type="hidden"
                      value="US"
                      name="countryCode"
                    />
                    <div
                      className="form-group"
                      style={{ width: (matches900px || isLandscape) ? "7%" : "14%", margin: "5px" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="month"
                        placeholder="MM"
                        min={1}
                        max={12}
                        maxLength={2}
                        value={month}
                        onChange={(e) => {
                          if (
                            /^\d+$/.test(e.target.value) ||
                            !e.target.value.length
                          ) {
                            setMonth(e.target.value);
                            month.length == 1 &&
                              document.getElementById("day").focus();
                          }
                        }}
                        required
                        autoFocus="autofocus"
                        style={{
                          textAlign: "center",
                          minWidth: '60px'
                        }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ width: (matches900px || isLandscape) ? "7%" : "14%", margin: "5px" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="day"
                        placeholder="DD"
                        min="1"
                        max="31"
                        maxLength="2"
                        value={date}
                        onChange={(e) => {
                          if (
                            /^\d+$/.test(e.target.value) ||
                            !e.target.value.length
                          ) {
                            setDate(e.target.value);
                            date.length == 1 &&
                              document.getElementById("year").focus();
                          }
                        }}
                        required
                        style={{
                          textAlign: "center",
                          minWidth: '60px'
                        }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ width: (matches900px || isLandscape) ? "8%" : "16%", margin: "5px" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="year"
                        placeholder="YYYY"
                        min="1900"
                        max="2500"
                        maxLength="4"
                        value={year}
                        onChange={(e) => {
                          if (
                            /^\d+$/.test(e.target.value) ||
                            !e.target.value.length
                          ) {
                            setYear(e.target.value);
                          }
                        }}
                        required
                        style={{
                          textAlign: "center",
                          minWidth: '60px'
                        }}
                      />
                    </div>
                    <Button
                      id="submit"
                      variant="contained"
                      sx={{
                        width: { xs: "200px", md: "100px" },
                        background:
                          "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)",
                        borderRadius: "48px",
                        color: "#FFFFFF",
                        "&.Mui-disabled": {
                          color: "#040825",
                        },
                        fontFamily: "Titling Gothic FB Narrow",
                        fontSize: "16px",
                        marginTop: "2px",
                      }}
                      onClick={checkFormValidations}
                    >
                      ENTER
                    </Button>
                  </form>
                </div>

                <div className={styles.description2 + ' responsive-flex-show-element'}>
                  <Typography
                    style={{
                      fontFamily: "Titling Gothic FB Compressed",
                      fontSize: isLandscape ? "20px" : "24px",
                      lineHeight: isLandscape ? "20px" : "28px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.75)",
                    }}
                  >
                    Enjoy Responsibly
                  </Typography>
                </div>

                <div className={styles.description3 + ' responsive-flex-show-element'}>
                  <Typography
                    style={{
                      fontFamily: "Neue Haas Grotesk Text Pro",
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.75)",
                    }}
                  >
                    © 2022 A-B, BUD LIGHT ® BEER, ST. LOUIS, MO.
                    By submitting this form, you agree to be bound by the
                    <a
                      href="https://www.budlight.com/terms-and-conditions/"
                      target="_blank"
                      rel="noreferrer"
                      className="other-link footer-link px-2"
                    >
                      Terms
                      of Service
                    </a>
                    and
                    <a
                      href="https://www.budlight.com/privacy-policy/"
                      target="_blank"
                      rel="noreferrer"
                      className="other-link footer-link px-2"
                    >
                      Privacy Policy.
                    </a>
                    <a
                      href="https://www.ab-inbev.com/nftterms/#fandom"
                      target="_blank"
                      rel="noreferrer"
                      className="other-link footer-link"
                      style={{ paddingRight: "10px" }}
                    >
                      Do Not Sell My Personal Information
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
        }
      </div>
    </>
  );
};

export default AgeGate;
