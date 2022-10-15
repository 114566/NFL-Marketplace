import React, { useEffect } from "react";
import { useStyles } from "./Styles";
import { imagesList } from "./const.js";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CheckboxActive from "../../../images/pickItems/Checkbox_active.svg";
import checkboxInactive from "../../../images/pickItems/Checkbox_inActive.svg";
import CheckboxActiveSelected from "../../../images/pickItems/Checkbox_active_selected.svg";
// import likeCircle from "../../../images/pickItems/LikeCircle_logo.svg"
import { useNavigate } from "react-router-dom";
import { LikeIcon } from "assets/Icons";

import moment from "moment/moment";

// import CheckboxActiveSelected from "../../../images/pickItems/Checkbox_active_selected.svg";
// import CheckboxInActiveSelected from "../../../images/pickItems/CircleButton.svg";
// import active_86237 from "../../../images/pickItems/nfl_team_logos_active_inactive_svg/86237_active.svg";
// import { weekSaleInterval } from "components/common/Countdown/const";

const makeLogoPath = (id, status) => {
  return require(`../../../images/pickItems/NflTeamLogo/${id}_${status}.svg`);
};

const PickItems = ({
  parentCallback,
  clearSelection,
  teams,
  isLoading,
  currentWeek,
}) => {
  const [imageUrl, setImageURL] = React.useState("");
  const navigate = useNavigate();

  const clickTeam = (id, status, isGameLocked) => {
    if (status === "available" && !isGameLocked) {
      parentCallback(id);
    }
  };
  useEffect(() => {
    clearSelection && setImageURL("");
  }, [clearSelection]);

  useEffect(() => {
    console.log("teams : ", teams);
  }, [teams]);

  const styles = useStyles();
  const matches900px = useMediaQuery("(max-width: 900px)");
  const matches450px = useMediaQuery("(max-height: 450px)");
  // const renderCard = (item) => {
  //   // console.log("weekSaleInterval===>", weekSaleInterval);
  //   return (
  //     <>
  //       {imageUrl == item.activeLogo ? (
  //         <div
  //           onClick={() => clickTeam(item.activeLogo)}
  //           className={
  //             item.isSelected && item.isActive
  //               ? styles.cardContainerSelectedActive
  //               : styles.cardContainer
  //           }
  //           style={{
  //             boxShadow:
  //               "0px 0px 20px rgba(40, 212, 255, 0.45), 0px 0px 4px #01B6E2",
  //             border:
  //               // eslint-disable-next-line no-constant-condition
  //               "9px solid linear-gradient(248.6deg, #07CEFF 0%, #003FFC 100%), background: item.isActive"
  //                 ? ""
  //                 : "#202640",
  //           }}
  //         >
  //           <div
  //             className={!item.isActive ? styles.firstContainer : ""}
  //             style={{
  //               background:
  //                 item.isSelected && item.isActive
  //                   ? "linear-gradient(248.6deg, #00B5E2 0%, #0032C7 57.55%, #001C71 100%)"
  //                   : "linear-gradient(248.6deg, #00B5E2 0%, #0032C7 57.55%, #001C71 100%)",
  //             }}
  //           >
  //             <div className={styles.imgContainer}>
  //               <img
  //                 src={item.isActive ? item.activeLogo : item.inActiveLogo}
  //                 alt=""
  //                 width="150vw"
  //                 height="150vw"
  //               />
  //             </div>
  //           </div>
  //           <div
  //             className={styles.secondContainer}
  //             style={{
  //               background: item.isSelected && item.isActive ? "#030A2B" : "",
  //               borderLeft: item.isActive
  //                 ? "1px solid #202640"
  //                 : "1px solid #383E55",
  //             }}
  //           >
  //             <div className={styles.teamDetailsContainer}>
  //               <div className={styles.textContainer}>
  //                 <p
  //                   className={styles.title}
  //                   style={{
  //                     color: item.isActive
  //                       ? "#FFFFFF"
  //                       : "rgba(255, 255, 255, 0.75)",
  //                   }}
  //                 >
  //                   {item.teamName1}
  //                 </p>
  //                 <p
  //                   className={styles.score}
  //                   style={{
  //                     color: item.isActive
  //                       ? "rgba(255, 255, 255, 0.75)"
  //                       : "rgba(255, 255, 255, 0.45)",
  //                   }}
  //                 >{`${item.teamName2} ${item.score}`}</p>
  //               </div>
  //               <div className={styles.checkBoxContainer}>
  //                 {imageUrl == item.activeLogo ? (
  //                   <svg
  //                     width="33"
  //                     height="32"
  //                     viewBox="0 0 33 32"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <rect
  //                       x="0.5"
  //                       width="32"
  //                       height="32"
  //                       rx="16"
  //                       fill="url(#paint0_linear_4364_3390)"
  //                     />
  //                     <path
  //                       d="M11.834 16L15.1673 19.3333L21.834 12.6667"
  //                       stroke="white"
  //                       strokeWidth="1.25"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                     <defs>
  //                       <linearGradient
  //                         id="paint0_linear_4364_3390"
  //                         x1="32.5"
  //                         y1="0"
  //                         x2="-6.11087"
  //                         y2="15.1349"
  //                         gradientUnits="userSpaceOnUse"
  //                       >
  //                         <stop stopColor="#3DAAF2" />
  //                         <stop offset="0.575521" stopColor="#0032C7" />
  //                         <stop offset="1" stopColor="#001C71" />
  //                       </linearGradient>
  //                     </defs>
  //                   </svg>
  //                 ) : (
  //                   <img
  //                     src={
  //                       item.isActive
  //                         ? item.isSelected
  //                           ? item.activeCheckboxSelected
  //                           : item.activeCheckbox
  //                         : item.isSelected
  //                         ? item.inActiveCheckboxSelected
  //                         : item.inActiveCheckbox
  //                     }
  //                     alt=""
  //                   />
  //                 )}

  //                 {item.week.length > 0 && (
  //                   <p
  //                     className={styles.pickedText}
  //                     style={{ margin: "10px 0 0 0" }}
  //                   >
  //                     {item.week}
  //                   </p>
  //                 )}
  //               </div>
  //             </div>
  //             <div
  //               className={styles.cardDetailsContainer}
  //               style={{
  //                 borderTop: item.isActive
  //                   ? "1px solid #202640"
  //                   : "1px solid #383E55",
  //               }}
  //             >
  //               <p
  //                 className={styles.pickedText}
  //                 style={{
  //                   color: item.isActive
  //                     ? "rgba(255, 255, 255, 0.75)"
  //                     : "rgba(255, 255, 255, 0.45)",
  //                 }}
  //               >
  //                 {item.pickedText}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       ) : (
  //         <div
  //           onClick={() => clickTeam(item.activeLogo)}
  //           className={
  //             item.isSelected && item.isActive
  //               ? styles.cardContainerSelectedActive
  //               : styles.cardContainer
  //           }
  //           style={{
  //             background: item.isActive ? "" : "#202640",
  //             border: !item.isSelected
  //               ? item.isActive
  //                 ? "1px solid #202640"
  //                 : "1px solid #383E55"
  //               : "",
  //           }}
  //         >
  //           <div
  //             className={!item.isActive ? styles.firstContainer : ""}
  //             style={{
  //               background:
  //                 item.isSelected && item.isActive
  //                   ? "linear-gradient(248.6deg, #00B5E2 0%, #0032C7 57.55%, #001C71 100%)"
  //                   : "",
  //             }}
  //           >
  //             <div className={styles.imgContainer}>
  //               <img
  //                 src={item.isActive ? item.activeLogo : item.inActiveLogo}
  //                 alt=""
  //                 width="150vw"
  //                 height="150vw"
  //               />
  //             </div>
  //           </div>
  //           <div
  //             className={styles.secondContainer}
  //             style={{
  //               background: item.isSelected && item.isActive ? "#030A2B" : "",
  //               borderLeft: item.isActive
  //                 ? "1px solid #202640"
  //                 : "1px solid #383E55",
  //             }}
  //           >
  //             <div className={styles.teamDetailsContainer}>
  //               <div className={styles.textContainer}>
  //                 <p
  //                   className={styles.title}
  //                   style={{
  //                     color: item.isActive
  //                       ? "#FFFFFF"
  //                       : "rgba(255, 255, 255, 0.75)",
  //                   }}
  //                 >
  //                   {item.teamName1}
  //                 </p>
  //                 <p
  //                   className={styles.score}
  //                   style={{
  //                     color: item.isActive
  //                       ? "rgba(255, 255, 255, 0.75)"
  //                       : "rgba(255, 255, 255, 0.45)",
  //                   }}
  //                 >{`${item.teamName2} ${item.score}`}</p>
  //               </div>
  //               <div className={styles.checkBoxContainer}>
  //                 {imageUrl == item.activeLogo ? (
  //                   <svg
  //                     width="33"
  //                     height="32"
  //                     viewBox="0 0 33 32"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <rect
  //                       x="0.5"
  //                       width="32"
  //                       height="32"
  //                       rx="16"
  //                       fill="url(#paint0_linear_4364_3390)"
  //                     />
  //                     <path
  //                       d="M11.834 16L15.1673 19.3333L21.834 12.6667"
  //                       stroke="white"
  //                       strokeWidth="1.25"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                     <defs>
  //                       <linearGradient
  //                         id="paint0_linear_4364_3390"
  //                         x1="32.5"
  //                         y1="0"
  //                         x2="-6.11087"
  //                         y2="15.1349"
  //                         gradientUnits="userSpaceOnUse"
  //                       >
  //                         <stop stopColor="#3DAAF2" />
  //                         <stop offset="0.575521" stopColor="#0032C7" />
  //                         <stop offset="1" stopColor="#001C71" />
  //                       </linearGradient>
  //                     </defs>
  //                   </svg>
  //                 ) : (
  //                   <img
  //                     src={
  //                       item.isActive
  //                         ? item.isSelected
  //                           ? item.activeCheckboxSelected
  //                           : item.activeCheckbox
  //                         : item.isSelected
  //                         ? item.inActiveCheckboxSelected
  //                         : item.inActiveCheckbox
  //                     }
  //                     alt=""
  //                   />
  //                 )}

  //                 {item.week.length > 0 && (
  //                   <p
  //                     className={styles.pickedText}
  //                     style={{ margin: "10px 0 0 0" }}
  //                   >
  //                     {item.week}
  //                   </p>
  //                 )}
  //               </div>
  //             </div>
  //             <div
  //               className={styles.cardDetailsContainer}
  //               style={{
  //                 borderTop: item.isActive
  //                   ? "1px solid #202640"
  //                   : "1px solid #383E55",
  //               }}
  //             >
  //               <p
  //                 className={styles.pickedText}
  //                 style={{
  //                   color: item.isActive
  //                     ? "rgba(255, 255, 255, 0.75)"
  //                     : "rgba(255, 255, 255, 0.45)",
  //                 }}
  //               >
  //                 {item.pickedText}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   );
  // };

  const customRenderCard = (
    item,
    teamSide,
    logoPath,
    currentWeek,
    isGameLocked
  ) => {
    // const showTeamName=(teamSide)=>{

    //   if(teamSide==="homeTeam")
    //   {
    //     const newTeamArr=teamSide.split(" ");
    //     if(newTeamArr.length > 2){
    //    return(
    //     newTeamArr.map((item,index)=>{
    //       if(index < 2)
    //       {
    //         return(<p>{item}</p>)
    //       }
    //      })
    //    )
    //   }
    //   else{

    //   }

    // }

    return (
      <div
        className={
          item?.status === currentWeek
            ? styles.cardContainerSelectedActive
            : styles.cardContainer
        }
        style={{
          background:
            item.status === "available" && !isGameLocked ? "" : "#202640",
          border:
            item.status !== "available"
              ? ""
              : item.status === "available" && !isGameLocked
              ? "1px solid #202640"
              : "1px solid #383E55",
        }}
      >
        <div
          style={{
            height: matches900px
              ? item.name.substring(0, item.name.lastIndexOf(" ")).length >
                  11 && !matches450px
                ? "175px"
                : "141px"
              : "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              item?.status === currentWeek
                ? "linear-gradient(248.6deg, #00B5E2 0%, #0032C7 57.55%, #001C71 100%)"
                : "",
          }}
        >
          <div className={styles.imgContainer}>
            <img src={logoPath} alt="" width="150vw" height="120vw" />
          </div>
        </div>
        <div
          className={styles.secondContainer}
          style={{
            background:
              !isGameLocked &&
              item?.status !== currentWeek &&
              item?.status !== "available"
                ? "#202640"
                : !isGameLocked && item?.status !== "available"
                ? "#030A2B"
                : isGameLocked || item?.status !== "available"
                ? "#202640"
                : "",
            borderLeft:
              !isGameLocked && item?.status === "available"
                ? "1px solid #202640"
                : "1px solid #383E55",
          }}
        >
          <div className={styles.teamDetailsContainer}>
            <div className={styles.textContainer}>
              <p
                className={styles.title}
                style={{
                  color:
                    !isGameLocked && item?.status === "available"
                      ? "#FFFFFF"
                      : "rgba(255, 255, 255, 0.75)",
                }}
              >
                {/* {item.name.split(" ")[0]} */}
                {item.name.substring(0, item.name.lastIndexOf(" "))}
              </p>
              <p
                className={styles.score}
                style={{
                  color:
                    !isGameLocked && item?.status === "available"
                      ? "rgba(255, 255, 255, 0.75)"
                      : "rgba(255, 255, 255, 0.45)",
                }}
              >
                {/* {item.name.split(" ")[1]} */}
                {item.name.substring(item.name.lastIndexOf(" ") + 1)}
              </p>
            </div>
            <div className={styles.checkBoxContainer}>
              {(item?.status !== "available" && isGameLocked) ||
              (!isGameLocked && item?.status === currentWeek) ? (
                // <LikeIcon />
                <img src={CheckboxActiveSelected} alt="" />
              ) : !isGameLocked && item?.status === "available" ? (
                <img
                  src={
                    item?.status !== "available" || isGameLocked
                      ? checkboxInactive
                      : CheckboxActive
                  }
                  alt=""
                />
              ) : (
                !isGameLocked &&
                item?.status !== currentWeek &&
                item?.status !== "available" && <LikeIcon />
              )}
              {(isGameLocked && item?.status !== "available") ||
              !isGameLocked ? (
                <p
                  className={styles.pickedText}
                  style={{ margin: "10px 0 0 0" }}
                >
                  {item.status.split(" ")[0] === "Week"
                    ? item.status
                    : currentWeek}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className={styles.cardDetailsContainer}
            style={{
              borderTop:
                item?.status === "available" && !isGameLocked
                  ? "1px solid #202640"
                  : "1px solid #383E55",
            }}
          >
            <p
              className={styles.pickedText}
              style={{
                color:
                  item?.status === "available" && !isGameLocked
                    ? "rgba(255, 255, 255, 0.75)"
                    : "rgba(255, 255, 255, 0.45)",
              }}
            >
              {/*{`${item.pickedPercentage}% picked`}*/}
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderScore = (obj) => {
    const datevalue = obj.startDate - 0;
    const changedvalue = new Date(
      new Date(datevalue).toLocaleString("en", { timeZone: "America/New_York" })
    );
    const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    const Months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const formatAMPM = (date) => {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes.toString().padStart(2, "0");
      let strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    };

    return (
      <>
        {obj?.matchStats?.matchStatus !== "NotStarted" ? (
          <p className={styles.scoreBoard}>
            {" "}
            {`${obj.matchStats.score.away} - ${obj.matchStats.score.home}`}
          </p>
        ) : (
          <Box className={styles.scoreContainer}>
            <p className={styles.symbol}>@</p>
            <p className={styles.timing}>
              {days[changedvalue.getDay()]} {Months[changedvalue.getMonth()]}{" "}
              {changedvalue.getDate()}
            </p>
            <p className={styles.timing}>
              {formatAMPM(
                new Date(
                  new Date(datevalue).toLocaleString("en", {
                    timeZone: "America/New_York",
                  })
                )
              )}{" "}
              ET
            </p>
          </Box>
        )}
      </>
    );
  };

  const renderFinalScore = (obj) => {
    return (
      <div className={styles.scoreContainer}>
        <p
          className={styles.scoreBoard}
        >{`${obj.matchStats.score.away} - ${obj.matchStats.score.home}`}</p>
        <p className={styles.text}>Final</p>
      </div>
    );
  };

  const renderMobileScore = (obj, index) => {
    const datevalue = obj.startDate - 0;
    const changedvalue = new Date(
      new Date(datevalue).toLocaleString("en", { timeZone: "America/New_York" })
    );
    const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    const Months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formatAMPM = (date) => {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes.toString().padStart(2, "0");
      let strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    };

    console.log("obj.startDate", obj.startDate);
    const startDate = parseInt(obj.startDate);
    const abc = moment(startDate).format("ddd MMM DD H:MM A ");
    return (
      <div
        className={styles.mobileScoreContainer}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {!obj?.matchStats ||
        (obj?.matchStats?.score?.home === 0 &&
          obj?.matchStats?.score?.away === 0) ? (
          <div
            className={styles.gameIdContainer}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className={styles.gameId}>{`Game ${index}`}</p>
            <Box style={{ display: "flex", gap: 2 }}>
              <Typography
                variant="h9"
                color="#75788a"
                className={styles.timing}
              >
                {days[changedvalue.getDay()]} {Months[changedvalue.getMonth()]}
                {changedvalue.getDate()}
              </Typography>
              <Typography variant="h9" color="#75788a">
                {`${formatAMPM(
                  new Date(
                    new Date(datevalue).toLocaleString("en", {
                      timeZone: "America/New_York",
                    })
                  )
                )} ET`}
              </Typography>
            </Box>
          </div>
        ) : (
          <Box className={styles.scoreContainer}>
            <p
              className={styles.scoreBoard}
            >{`${obj.matchStats.score.away} - ${obj.matchStats.score.home}`}</p>
            {/* <p className={styles.text}>Final</p> */}
          </Box>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && (
        <div
          className={styles.loadingContainer}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#000000",
            paddingBottom: "20px",
            textAlign:"center"
          }}
        >
          <Typography color="white" sx={{ padding: "10px 10px" }}>
            Please be patient after selecting a pick. This is a blockchain
            transaction and may take up to 60 seconds to finalize!
          </Typography>
          <CircularProgress size={60} thickness={5} sx={{ color: "#00B5E2" }} />
        </div>
      )}
      {teams
        ? teams.map((obj, index) => {
            const awaysrc = imagesList.find(
              (i) => i.id.toString() === obj.awayTeamId.id
            );

            const homesrc = imagesList.find(
              (i) => i.id.toString() === obj.homeTeamId.id
            );

            return (
              <React.Fragment key={index}>
                <div
                  className={styles.renderCardContainer}
                  style={{ opacity: isLoading && "0.3" }}
                >
                  {matches900px && renderMobileScore(obj, index + 1)}
                  <div
                    style={{
                      cursor:
                        obj.awayTeamId.status === "available" &&
                        !obj.isGameLocked
                          ? "pointer"
                          : "",
                    }}
                    onClick={() =>
                      clickTeam(
                        obj.awayTeamId.id,
                        obj.awayTeamId.status,
                        obj.isGameLocked
                      )
                    }
                  >
                    {customRenderCard(
                      obj.awayTeamId,
                      "awayTeam",
                      !obj.isGameLocked
                        ? makeLogoPath(obj.awayTeamId.id, "active")
                        : makeLogoPath(obj.awayTeamId.id, "inactive"),
                      obj.roundName,
                      obj.isGameLocked
                    )}
                  </div>
                  <div className="responsive-show">
                    <p className={styles.symbol}>@</p>
                  </div>
                  {!matches900px && (
                    <div>
                      {obj.matchStats.matchStatus === "Finished"
                        ? renderFinalScore(obj)
                        : renderScore(obj)}
                    </div>
                  )}
                  <div
                    style={{
                      cursor:
                        obj.homeTeamId.status === "available" &&
                        !obj.isGameLocked
                          ? "pointer"
                          : "",
                    }}
                    onClick={() =>
                      clickTeam(
                        obj.homeTeamId.id,
                        obj.homeTeamId.status,
                        obj.isGameLocked
                      )
                    }
                  >
                    {customRenderCard(
                      obj.homeTeamId,
                      "homeTeam",
                      !obj.isGameLocked
                        ? makeLogoPath(obj.homeTeamId.id, "active")
                        : makeLogoPath(obj.homeTeamId.id, "inactive"),
                      obj.roundName,
                      obj.isGameLocked
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })
        : () => navigate("/collection")}
    </div>
  );
};

export default PickItems;
