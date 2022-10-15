import { Box, Button, Typography } from "@mui/material";
// import myNftImage from "../../images/myNftDetails/NFT-Visual-Container.png";

import NFTImage from "../../images/myNftDetails/NFT.png";
import NFTBackgroundImage from "../../images/myNftDetails/NFT-Grid-Lines.png";
import { Data } from "./const";
import AvailableTeam from "./AvailableTeam";
import MyNftDetailsTeam from "components/common/MyNftDetailsTeam";
import Footer from "components/common/Footer";
import { useNavigate } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import BallLogo from "../../images/myNftDetails/Team-Container.svg";
import { useParams } from "react-router-dom";
import PencilLogo from "../../images/myNftDetails/Pencil.svg";
import { BackIcon } from "assets/Icons";
import { useState } from "react";
import HttpsOutlined from "@mui/icons-material/HttpsOutlined";
import './style.css';
import axios from 'axios';
import { CircularProgress } from "@mui/material";
const ACCOUNT_NFTS = gql`
  query ACCOUNT_NFTS($tokenId: Int!) {
    tokenById(tokenId: $tokenId) {
      name
      description
      tokenId
      thumbnail
      mediaURL
      rarity
      status
      streak
      week
      currentPicked
      teamMatchLocked
      teams {
        name
        id
        isTeamLocked
        status
      }
    }
  }
`;

const MyNftDetails = (props) => {
  const { tokenId } = useParams();

  const navigate = useNavigate();

  const [getNFTs, { loading, error, data, refetch }] =
    useLazyQuery(ACCOUNT_NFTS, { fetchPolicy: "no-cache" });
  const { user, signIn, isSignedIn, signOut } = useAuth();
  const [currentWeek, setCurrentWeek] = useState();
  const [selectTeam, setSelectTeam] = useState(false);

  const [totalState, setTotalState] = useState([]);
  useEffect(() => {
    if (isSignedIn()) {
      getNFTs({ variables: { tokenId: parseInt(tokenId) } });

      // refetch();
    }
  }, [isSignedIn()]);

  useEffect(() => {
    setCurrentWeek(data?.tokenById?.week);
    if (data?.tokenById?.status != "Active") {
      axios.get(`${process.env.REACT_APP_MY_NFTS_CHECK}` + user.addr + '&itemFID' + "=" + tokenId)
        .then(function (response) {
          if (response.data) {
            setTotalState(response.data);
          }
        })
        .catch(function (error) {
        })
    }
  }, [data]);

  return (
    <>
      <Box width={1} display="flex" justifyContent="center" mb={2}>
        {!loading && !error && data?.tokenById ? (
          <Box display="flex" gap={7} width={0.827} flexDirection="column">
            <Box
              display="flex"
              width={1}
              sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
              gap={1.5}
              pt={8}
            >
              <Box width={0.05} display="flex" justifyContent="center">
                <Link to="/collection" style={{ cursor: "pointer" }}>
                  <BackIcon />
                </Link>
              </Box>
              <Box sx={{ minWidth: [200, 400, 500] }} width={[1, 0.8]}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box display="flex" sx={{ width: 0.7, zIndex: 10 }}>
                    {/*{<img src={data.tokenById.thumbnail} style={{ width: "100%" }} />}*/}

                    <video
                      style={{ width: "100%" }}
                      poster={data.tokenById.thumbnail}
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source
                        src={data.tokenById.mediaURL}
                        type="video/mp4"
                      ></source>
                    </video>
                  </Box>
                  <Box
                    display="flex"
                    sx={{ width: 1, position: "absolute", bottom: "0px" }}
                  >
                    <img src={NFTBackgroundImage} style={{ width: "100%" }} />
                  </Box>
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" gap={3} width={[1, 1]}>
                <Box display="flex" flexDirection="column" gap={2}>
                  <Typography
                    variant="h7"
                    sx={{ textTransform: "uppercase", letterSpacing: "0.16em" }}
                  >
                    {data.tokenById.status}
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: { xs: "48px", md: "64px" } }}
                  >
                    {data.tokenById.name}{" "}
                    {String(data.tokenById.tokenId).padStart(5, "0")}
                  </Typography>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="body4"
                      style={{ color: "rgba(255, 255, 255, 0.75" }}
                    >
                      {data.tokenById.streak} &nbsp; Game Streak
                    </Typography>
                    <Typography
                      variant="body4"
                      style={{ color: "rgba(255, 255, 255, 0.75" }}
                    >
                      Current pick:{" "}
                      {data.tokenById.currentPicked == null ? (
                        "select before Sun @ 1pm ET "
                      ) : (
                        <img
                          src={require(`../../images/pickItems/NflTeamLogo/${data.tokenById.currentPicked}_active.svg`)}
                          alt=""
                        />
                      )}
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <div className="sub-content">
                      {
                        data.tokenById.status != "Active" ?
                          <>{
                            totalState.total > 0 ? <Button
                              variant="contained"
                              size="large"
                              style={{ 'minWidth': '250px' }}
                              sx={{
                                width: { xs: 1, md: 0.2, letterSpacing: "0.14em" },
                              }}
                              onClick={() =>
                                window.location.replace(`${process.env.REACT_APP_NFT_DETAIL_PAGE}` + `${data.tokenById.tokenId}`)
                              }
                            >
                              REMOVE FROM SALE
                            </Button> :
                              <Button
                                variant="contained"
                                size="large"
                                sx={{
                                  width: { xs: 1, md: 0.2, letterSpacing: "0.14em" },
                                }}
                                onClick={() =>
                                  window.location.replace(`${process.env.REACT_APP_NFT_DETAIL_PAGE}` + `${data.tokenById.tokenId}`)
                                }
                              >
                                LIST FOR SALE
                              </Button>
                          }
                            <Typography variant='p' className='mt-3 d-block'><small>Once your NFT is listed on the marketplace, it can be unlisted if now sold.</small></Typography>
                          </>
                          :
                          (data.tokenById.teams.every((team) => team.isTeamLocked === true)) ||
                            data.tokenById.teams.find(
                              (team) => team.id === data.tokenById.currentPicked
                            )?.isTeamLocked ? (
                            <button className="buttonfit1 ms-1 pb-1 text-center px-0 " style={{ 'minWidth': '160px', 'fontSize': '100%', 'textAlign': 'center G', 'background': '#202624', 'border': '1px solid #202624', 'color': ' white' }}>
                              PICKS LOCKED <HttpsOutlined className='m-auto pb-1' style={{ fontSize: '22px', fontFamily: 'Titling Gothic FB Narrow' }} />
                            </button>
                          ) : data.tokenById.currentPicked ? (
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                width: { xs: 1, md: 0.2, letterSpacing: "0.14em" },
                              }}
                              onClick={() =>
                                navigate(
                                  `/collection/pickem/${data.tokenById.tokenId}`
                                )
                              }
                            >
                              Edit Pick
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                width: { xs: 1, md: 0.2, letterSpacing: "0.14em" },
                              }}
                              onClick={() =>
                                navigate(
                                  `/collection/pickem/${data.tokenById.tokenId}`
                                )
                              }
                            >
                              make A Pick
                            </Button>
                          )}
                    </div>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" gap={2}>
                  {Data.map((item, index) => (
                    <Box
                      display="flex"
                      className="responsive-flex-row"
                      sx={{
                        border: "1px solid #383E55",
                        justifyContent: "space-between",
                        borderRadius: 1,
                        width: 1,
                        gap: { xs: 3, md: 0.1 },
                        alignItems: { xs: "flex", md: "center" },
                      }}
                      key={index}
                      p={2}
                    >
                      <Box display="flex" flexDirection="column">
                        <Typography variant="h8">{item.header}</Typography>
                        <Typography
                          sx={{
                            fontFamily: "Neue Haas Grotesk Text Pro",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "rgba(255, 255, 255, 0.75)",
                            width: 0.8,
                            minWidth: { xs: "270px", md: "339px" },
                          }}
                        >
                          {item.subHeader}
                        </Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        size="large"
                        sx={{
                          border: "1px solid grey",
                          color: "white",
                          "&:hover": { border: "1px solid grey" },
                          fontFamily: "Titling Gothic FB Narrow",
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontWeight: 450,
                        }}
                      >
                        {item.button}
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box width={1} display="flex" flexDirection="column" gap={5}>
              <Box sx={{ borderBottom: "1px solid #383E55" }} pb={2}>
                <Typography variant="heading3">Picks </Typography>
              </Box>
              <Typography variant="h6">Selected Teams</Typography>
              <Box display="flex" flexWrap="wrap" gap={2}>

                {/*{(() => {*/}
                {/*    const team = */}
                {/*    return (<div>Here it is</div>)*/}
                {/*  })*/}
                {/*}*/}
                {data.tokenById.currentPicked ?

                  <Box
                    minWidth={"300px"}
                    display="flex"
                    flexDirection="column"
                  >
                    <Typography>{`${data.tokenById.week}`}</Typography>
                    <Box
                      sx={{
                        border: "1px dashed #383E55",
                        borderRadius: 1,
                      }}
                      p={1}
                      gap={3}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box display="flex" alignItems="center" gap={1.8}>
                        <Box>
                          <img src={require(`../../images/pickItems/NflTeamLogo/${data.tokenById.currentPicked}_active.svg`)} alt="" />
                        </Box>
                        <Box display="flex" flexDirection="column">
                          <Typography
                            variant="headerTitle2"
                            sx={{
                              color: "#00B5E2",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              if (!(data.tokenById.teams.find(
                                (team) => team.id === data.tokenById.currentPicked
                              )?.isTeamLocked)) {
                                navigate(
                                  `/collection/pickem/${data.tokenById.tokenId}`
                                );
                              }
                            }}
                          >
                            {data.tokenById.teams.find((team) => team.id === data.tokenById.currentPicked)?.name}
                          </Typography>
                        </Box>
                      </Box>{(data.tokenById.teams.find(
                        (team) => team.id === data.tokenById.currentPicked
                      )?.isTeamLocked) ? <button className="buttonfit1 ms-1 pb-1 text-center px-0 " style={{ 'minWidth': '120px', 'fontSize': '100%', 'textAlign': 'center G', 'background': '#202624', 'border': '1px solid #202624', 'color': ' white' }}>
                        LOCKED <HttpsOutlined className='m-auto pb-1' style={{ fontSize: '22px', fontFamily: 'Titling Gothic FB Narrow' }} />
                      </button> : <img src={PencilLogo} style={{ paddingRight: "5px" }} alt="" />}
                    </Box>
                  </Box>

                  :

                  <Box
                    minWidth={"300px"}
                    display="flex"
                    flexDirection="column"
                  // gap={0.7}
                  >
                    <Typography>{`${data?.tokenById?.week}`}</Typography>
                    <Box
                      sx={{
                        // border: 1,
                        // borderColor: "#383E55",
                        border: "1px dashed #383E55",
                        borderRadius: 1,
                      }}
                      p={1}
                      gap={3}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box display="flex" alignItems="center" gap={1.8}>
                        <Box>
                          <img src={BallLogo} alt="" />
                        </Box>
                        <Box display="flex" flexDirection="column">
                          <Typography
                            variant="headerTitle2"
                            sx={{
                              color: "#00B5E2",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              if (data.tokenById.status === "Active" && !(data.tokenById.teams.every((team) => team.isTeamLocked === true))) {
                                navigate(
                                  `/collection/pickem/${data.tokenById.tokenId}`
                                );
                              }
                            }}
                          >
                            {data.tokenById.status != "Active" ? "Inactive" : (data.tokenById.teams.every((team) => team.isTeamLocked === true)) ? "Locked" : "Select a team"}
                          </Typography>
                        </Box>
                      </Box>{data.tokenById.status === "Active" && (data.tokenById.teams.every((team) => team.isTeamLocked === true)) ? <button className="buttonfit1 ms-1 pb-1 text-center px-0 " style={{ 'minWidth': '120px', 'fontSize': '100%', 'textAlign': 'center G', 'background': '#202624', 'border': '1px solid #202624', 'color': ' white' }}>
                        LOCKED <HttpsOutlined className='m-auto pb-1' style={{ fontSize: '22px', fontFamily: 'Titling Gothic FB Narrow' }} />
                      </button> : ""}
                    </Box>
                  </Box>
                }

                {/*{!selectTeam && (*/}
                {/*  <Box*/}
                {/*    minWidth={"300px"}*/}
                {/*    display="flex"*/}
                {/*    flexDirection="column"*/}
                {/*    // gap={0.7}*/}
                {/*  >*/}
                {/*    <Typography>{`${data?.tokenById?.week}`}</Typography>*/}
                {/*    <Box*/}
                {/*      sx={{*/}
                {/*        border: 2,*/}
                {/*        borderStyle: "dashed ",*/}
                {/*        borderColor: "#383E55",*/}
                {/*        borderRadius: 1,*/}
                {/*      }}*/}
                {/*      p={1}*/}
                {/*      gap={3}*/}
                {/*      display="flex"*/}
                {/*      alignItems="center"*/}
                {/*      justifyContent="space-between"*/}
                {/*    >*/}
                {/*      <Box display="flex" alignItems="center" gap={1.8}>*/}
                {/*        <Box>*/}
                {/*          <img src={BallLogo} alt="" />*/}
                {/*        </Box>*/}
                {/*        <Box display="flex" flexDirection="column">*/}
                {/*          <Typography*/}
                {/*            variant="headerTitle2"*/}
                {/*            sx={{*/}
                {/*              color: "#00B5E2",*/}
                {/*              cursor: "pointer",*/}
                {/*            }}*/}
                {/*            onClick={() => {*/}
                {/*              navigate(*/}
                {/*                `/collection/pickem/${data.tokenById.tokenId}`*/}
                {/*              );*/}
                {/*            }}*/}
                {/*          >*/}
                {/*            Select a team*/}
                {/*          </Typography>*/}
                {/*        </Box>*/}
                {/*      </Box>*/}
                {/*    </Box>*/}
                {/*  </Box>*/}
                {/*)}*/}
                {data.tokenById.teams
                  .map((team, index) => (
                    <div key={index} className={team.status?.split(" ")[0].toLowerCase() == "week" && team.status !== data.tokenById.week ? 'd-block' :'d-none'}>
                      {team.status?.split(" ")[0].toLowerCase() == "week" && team.status !== data.tokenById.week && (
                        <Box>
                          <MyNftDetailsTeam
                            showTeams={true}
                            item={team}
                            currentWeek={currentWeek}
                            setCurrentWeek={setCurrentWeek}
                            setSelectTeam={setSelectTeam}
                            tokenID={data.tokenById.tokenId}
                          />
                        </Box>
                      )}
                    </div>
                  )).reverse()
                }
              </Box>
              <Box width={1}>
                <AvailableTeam teams={data.tokenById.teams} />
              </Box>
            </Box>
          </Box>
        ) : (
          <Box><CircularProgress style={{ alignContent: 'center', marginRight: 'auto', marginLeft: 'auto', marginTop: '40px', marginBottom: '40px' }} color="secondary" /></Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default MyNftDetails;
