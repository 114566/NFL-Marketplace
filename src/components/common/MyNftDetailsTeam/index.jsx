import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RightLogo } from "../../../assets/Icons";

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const MyNftDetailsTeam = ({
  item,
  showTeams = false,
  minWidth = "300px",
  currentWeek,
  setSelectTeam,
  tokenID,
}) => {
  const navigate = useNavigate("");

  // console.log("Teams: ", item);
  //  let status = item?.status?.split(" ");
  // console.log('status', status);
  //console.log("week " + currentWeek);
  
  const checkSelect = () => {
    if (currentWeek === item?.status) {
      setSelectTeam(true);
    }
  };
  const selectRedirect = () => {
    if (currentWeek === item?.status) {
      navigate(`/collection/pickem/${tokenID}`);
    }
  };

  return (
    <Box key={item?.id} minWidth={minWidth}>
      {showTeams && <Typography>{item?.status}</Typography>}
      {checkSelect()}
      <Box
        sx={{
          border:
            currentWeek === item?.status
              ? "2px dashed #383E55"
              : showTeams
              ? "1px solid #383E55"
              : 0,
          borderRadius: 1,
          cursor: currentWeek === item?.status && "pointer"
        }}
        onClick={selectRedirect}
        p={showTeams ? 1 : ""}
        gap={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Box>
            {showTeams ? (
              <img
                src={require(`../../../images/pickItems/NflTeamLogo/${item.id}_active.svg`)}
                alt=""
              />
            ) : (
              <img
                src={require(`../../../images/pickItems/NflTeamLogo/${
                  item.id
                }_${item.status == "available" ? "active" : "inactive"}.svg`)}
                alt=""
              />
            )}
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography
              variant="headerTitle2"
              sx={{
                // color: item.status!=="available" ? "#383E55" : "#FFFFFF",
                color: showTeams
                  ? "#FFFFFF"
                  : item.status !== "available"
                  ? "#383E55"
                  : "#FFFFFF",
              }}
            >
              {item?.name}
              {item?.status?.split(" " === "week" )&& item?.status !== "available" && ( <div>{item?.status}</div>)}
            </Typography>
            {!showTeams && (
              <Typography
                variant="headerTitle2"
                sx={{
                  color: item.status == "available" ? "#383E55" : "#FFFFFF",
                }}
              >
                {item?.selectedValue}
              </Typography>
            )}
          </Box>
        </Box>
        {showTeams && item.status != "available" ? <RightLogo /> : <Box></Box>}
      </Box>
    </Box>
  );
};

export default MyNftDetailsTeam;
