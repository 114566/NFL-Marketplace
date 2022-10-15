/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Typography,
  Snackbar,
  path,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useStyles } from "./Styles";
import NFTHeaderCard from "../../images/PickEm/NFT-Header-Card.svg";
import { useNavigate } from "react-router-dom";
// import Subtract from "../../images/PickEm/Subtract.svg";
import Subtract from "../../images/PickEm/Subtract.svg";
import Countdown from "components/common/Countdown";
import BackGroundImage from "../../images/PickEm/BackgroundImage.png";
import Dropdown from "./Dropdown";
import PickItems from "./PickItems";
import Footer from "components/common/Footer";
// import { BackIcon } from "assets/Icons";
import MobileScreen from "./MobileScreen";
import { useMediaQuery, Stack } from "@mui/material";
import { BackIcon, RightLogo } from "assets/Icons";
import PickemScrolFreezTime from "./PickItems/PickemScrolFreezTime";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useAuth } from "../../hooks/auth";
const NFT_PICKEM_DATA = gql`
  query getNftPickEmData($tokenId: Int!) {
    gamesByTokenId(tokenId: $tokenId) {
      name
      description
      thumbnail
      mediaURL
      tokenId
      rarity
      week
      currentPicked
      status
      streak
      myNftList {
        name
        tokenId
      }
      games {
        name
        id
        roundName
        startDate
        seasonId
        seasonName
        isGameLocked
        homeTeamId {
          name
          id
          isTeamLocked
          status
          pickedPercentage
        }
        awayTeamId {
          name
          id
          isTeamLocked
          status
          pickedPercentage
        }
        venueName
        venueCity
        isDeleted
        matchStats {
          id
          fixtureId
          matchStatus
          score {
            home
            away
            isConfirmed
          }
        }
      }
    }
  }
`;

/**
 * GraphQL Mutation for Team selection on current week
 */
const PICK_TEAM = gql`
  mutation selectTeamToPick($tokenId: Int!, $teamId: Int!) {
    pickTeam(tokenId: $tokenId, teamId: $teamId) {
      success
      error
      type
    }
  }
`;

const makeLogoPath = (id, status) => {
  return require(`../../images/pickItems/NflTeamLogo/${id}_${status}.svg`);
};

const PickEm = () => {
  const { tokenId } = useParams();

  const [getNftPickEmData, { loading, error, data, refetch }] = useLazyQuery(
    NFT_PICKEM_DATA,
    { fetchPolicy: "no-cache" }
  );
  const { user, signIn, isSignedIn, signOut } = useAuth();

  const navigate = useNavigate();

  const styles = useStyles();
  const matches900px = useMediaQuery("(max-width: 900px)");
  const [imgurl, setImage] = React.useState("");
  const [showSection, setShowSection] = React.useState(false);
  const [clearSection, setClearSection] = React.useState(false);
  const [loadingMutation, setLoadingMutation] = React.useState(false);
  const [confirmSnackbar, setConfirmSnackbar] = React.useState(false);
  const [Stateview, setStateview] = React.useState('1')
  // const [teams, setTeams] = React.useState([]);
  // const { response, loading } = useAxios(Apis.match);

  // calling GQL mutation
  const [
    selectTeamToPick,
    { loading: pickTeamLoading, error: pickTeamError, data: pickTeamData },
  ] = useMutation(PICK_TEAM, {
    onCompleted: (res) => {
      if (res) {
        setConfirmSnackbar(true);
      }
    },
  });

  useEffect(() => {
    if (loadingMutation) {

      if (pickTeamData) {
        if (pickTeamData.pickTeam)
          if (pickTeamData.pickTeam.error) {
            navigate("/collection");
          }
      }

      refetch({ variables: { tokenId: parseInt(tokenId) } });
    }
  }, [pickTeamData]);

  useEffect(() => {
    if (isSignedIn() && tokenId) {
      if (!data) {
        console.log("Trying Fetch: ", tokenId);
        getNftPickEmData({ variables: { tokenId: parseInt(tokenId) } });
      } else {
        console.log("Trying Refetch: ", tokenId);
        refetch({ variables: { tokenId: parseInt(tokenId) } });
      }
    }
  }, [tokenId, isSignedIn()]);

  useEffect(() => {
    if (data) {
      console.log("Data of Nft: ", data);

      data.gamesByTokenId.games.find((game) => {
        if (
          (game.awayTeamId.id === data.gamesByTokenId.currentPicked &&
            game.awayTeamId.isTeamLocked) ||
          (game.homeTeamId.id === data.gamesByTokenId.currentPicked &&
            game.homeTeamId.isTeamLocked)
        ) {
          // if( || ) {
          //     console.log('Current Picked is Locked')
          // }
          navigate("/collection");
          console.log("Current Picked is Locked");
        }
      });

      if (
        data.gamesByTokenId.status != "Active" ||
        data.gamesByTokenId.games.every((game) => game.isGameLocked === true)
      ) {
        navigate("/collection");
      }
      setLoadingMutation(false);
      setStateview('2');
    }
  }, [data]);

  const callback = (teamId) => {
    console.log("selectTeamToPick: ");
    if (!pickTeamLoading) {
      setLoadingMutation(true);
      setStateview('1');
      selectTeamToPick({
        variables: { tokenId: parseInt(tokenId), teamId: parseInt(teamId) },
      });
    }
  };

  const removeImage = () => {
    setImage("");
    setClearSection(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 130) {
        setShowSection(true);
      } else {
        setShowSection(false);
      }
    });
  });

  const renderheaderCard = (nftData, loadingMutationData) => {
    return (
      <Box
        id="62666"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: 1,
          minWidth: "200px",
        }}
      >
        <Box width={0.05} display="flex" justifyContent="center">
          <Link
            to="/collection"
            style={{ cursor: "pointer", zIndex: "99999999" }}
          >
            <BackIcon />
          </Link>
        </Box>
        <Box
          display="flex"
          width={0.8}
          sx={{ justifyContent: "space-between" }}
        >
          <Box
            className={styles.card}
            display={["none", "none", "flex"]}
            sx={{ minWidth: "700px" }}
          >
            <div className={styles.firstCol}>
              <Box style={{ width: "100%" }}></Box>
            </div>
            <div className={styles.secondCol} style={{ minWidth: "160px" }}>
              <video
                className={styles.nftCardImg}
                /* style={{ width: "100%", height:'100%' }} */ autoPlay
                muted
                loop
                playsInline
              >
                <source src={nftData.mediaURL} type="video/mp4"></source>
              </video>
              {/* <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <Typography variant="h7"> */}
              {/* <img
                                        src={NFTHeaderCard}
                                        alt=""
                                        className={styles.nftCardImg}
                                        style={{ width: "100%", height: "100%" }}
                                    /> */}
              {/* </Typography>
                            </Box> */}
            </div>
            <div className={styles.secondCol} style={{ minWidth: "135px" }}>
              <Box
                borderRight={0.6}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Typography
                  variant="h7"
                  pt={1}
                  sx={{ fontSize: "20px", lineHeight: "32px" }}
                >
                  Week
                </Typography>
                <Typography
                  variant="h1"
                  sx={{ fontSize: "192px", lineHeight: "192px" }}
                >
                  {nftData?.week?.split(" ")[1]}
                </Typography>
              </Box>
            </div>
            <div
              className={styles.thirdCol}
              style={{ minWidth: "335px", width: "100%" }}
            >
              <div>
                <div
                  style={{
                    borderBottom: "1px solid #dfe5f5",
                    height: "100px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: "20px",
                  }}
                >
                  <Box>
                    <Typography
                      variant="headerTitle"
                      sx={{
                        fontSize: "12px",
                        lineHeight: "18px",
                        color: "#bfcef1",
                      }}
                    >
                      PICKING FOR:
                    </Typography>
                  </Box>
                  <Box>
                    {nftData?.myNftList && (
                      <Dropdown
                        myNftList={nftData.myNftList}
                        tokenId={data.gamesByTokenId.tokenId}
                        disable={loadingMutationData}
                      />
                    )}
                  </Box>
                </div>
                <div>
                  <div style={{ padding: "10px" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Titling Gothic FB Narrow",
                          fontSize: "12px",
                          lineHeight: "18px",
                          color: "#bfcef1",
                          marginLeft: "20px",
                        }}
                      >
                        PICK FREEZES IN:
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Countdown manageWidth={true} />
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </Box>
          <div className={styles.card2}>
            <div className="text-center displayNone ">
              <Box
                display="flex"
                flexDirection="column"
                borderRadius={2}
                gap={2}
                sx={{
                  alignItems: "center",
                  border: "1px double #dfe5f5",
                  width: "185px",
                  height: "185px",
                  justifyContent: "center",
                }}
              >
                {/*{*/}
                {/*    nftData.currentPicked ?*/}
                {/*        <img src={makeLogoPath(nftData.currentPicked, 'active')} />*/}
                {/*        : 'Your Pick'*/}
                {/*}*/}
                {loadingMutationData ? (
                  <CircularProgress size={60} thickness={5} color="info" />
                ) : !nftData.currentPicked ? (
                  <Typography variant="h9">
                    <img src={Subtract} alt="img" />
                  </Typography>
                ) : (
                  <Typography variant="h9">
                    <img
                      src={makeLogoPath(nftData.currentPicked, "active")}
                      alt="img"
                      width="160"
                      height="160"
                    />
                    {/*<svg*/}
                    {/*    width="36"*/}
                    {/*    onClick={removeImage}*/}
                    {/*    style={{*/}
                    {/*        right: "-18px",*/}
                    {/*        position: "absolute",*/}
                    {/*        top: "-18px",*/}
                    {/*        cursor: "pointer",*/}
                    {/*    }}*/}
                    {/*    height="36"*/}
                    {/*    viewBox="0 0 36 36"*/}
                    {/*    fill="none"*/}
                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                    {/*>*/}
                    {/*    <rect width="36" height="36" rx="18" fill="white" />*/}
                    {/*    <path*/}
                    {/*        d="M23 13L13 23M13 13L23 23"*/}
                    {/*        stroke="#0035A5"*/}
                    {/*        strokeWidth="1.5"*/}
                    {/*        strokeLinecap="round"*/}
                    {/*        strokeLinejoin="round"*/}
                    {/*    />*/}
                    {/*    <rect*/}
                    {/*        x="0.5"*/}
                    {/*        y="0.5"*/}
                    {/*        width="35"*/}
                    {/*        height="35"*/}
                    {/*        rx="17.5"*/}
                    {/*        stroke="white"*/}
                    {/*        strokeOpacity="0.3"*/}
                    {/*    />*/}
                    {/*</svg>*/}
                  </Typography>
                )}
              </Box>
              <Box className="mt-4 responsive-hide">
                <Typography variant="h9" sx={{ fontSize: "20px" }}>
                  Your Pick
                </Typography>
              </Box>
            </div>
          </div>
        </Box>
        <Box width={0.05} />
      </Box>
    );
  };

  return (
    <div>
      {!loading && !error && data?.gamesByTokenId ? (
        <div>
          {matches900px ? (
            <>
              <Box display={["flex", "flex", "none"]}>
                <MobileScreen
                  mediaURL={data.gamesByTokenId.mediaURL}
                  myNftList={data.gamesByTokenId.myNftList}
                  tokenId={data.gamesByTokenId.tokenId}
                  disable={loadingMutation}
                  week={data.gamesByTokenId.week}
                />
              </Box>
              <Box className="mt-4 responsive-show pt-4">
                <div className="text-center ">
                  Pick one team you think will win this week.
                  <br />
                  Please be patient after selecting your pick. It may take up to
                  60 seconds to finalize!{" "}
                </div>
              </Box>
              <Box
                className={styles.container}
                display={["flex", "flex", "flex"]}
                style={{ paddingBottom: "0px" }}
              >
                <div className={styles.cardContainer}>
                  <PickItems
                    parentCallback={callback}
                    clearSelection={clearSection}
                    teams={data.gamesByTokenId.games}
                    isLoading={loadingMutation}
                    currentWeek={data.gamesByTokenId.week}
                  />
                </div>
              </Box>
            </>
          ) : (
            <Box
              className={styles.container}
              display={["flex", "flex", "flex"]}
            >
              <div
                className={styles.headerContainer}
                style={{ display: "flex" }}
              >
                <Box
                  style={{ position: "absolute", right: "6%" }}
                  display={["none", "none", "flex"]}
                >
                  <img src={BackGroundImage} />
                </Box>
                <Box
                  width={1}
                  justifyContent="space-between"
                  display={["none", "none", "flex"]}
                  gap={2}
                >
                  {renderheaderCard(data.gamesByTokenId, loadingMutation)}
                </Box>
              </div>
              <div className={styles.cardContainer}>
                <div className="text-center mb-3" style={{ fontSize: "20px" }}>
                  Pick one team you think will win this week.
                  <br />
                  Please be patient after selecting your pick. It may take up to
                  60 seconds to finalize!{" "}
                </div>

                {
                  <PickItems
                    parentCallback={callback}
                    clearSelection={clearSection}
                    teams={data.gamesByTokenId.games}
                    isLoading={loadingMutation}
                    currentWeek={data.gamesByTokenId.week}
                  />
                }
              </div>
            </Box>
          )}
          {showSection !== true ? (
            ""
          ) : (
            <div className="topsection">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <Box>
                      {data.gamesByTokenId?.myNftList && (
                        <Dropdown
                          myNftList={data.gamesByTokenId.myNftList}
                          tokenId={data.gamesByTokenId.tokenId}
                          disable={loadingMutation}
                        />
                      )}
                    </Box>
                  </div>
                  <div className="col-lg-2"></div>
                  <div
                    className="col-lg-6 responsive-hide"
                    style={{ margin: "auto", textAlign: "right" }}
                  >
                    {/* <span>PICK FREEZES IN: 02D 17H 54M 28S</span> */}
                    <Box>
                      <PickemScrolFreezTime />
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Footer />
        </div>
      ) : loading ? (
        <div style={{ position: "absolute", left: "50%", top: "45%" }}>
          <CircularProgress
            color="info"
            style={{
              alignContent: "center",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
        </div>
      ) : error ? (
        navigate("/collection")
      ) : (
        ""
      )}
      {confirmSnackbar && Stateview == 2 ?
        <Stack sx={{ width: "100%", zIndex: 2 }} spacing={2} >
          <Snackbar
            style={{ 'position': 'fixed', 'top': '100px' }}
            anchorOrigin={{
              vertical: "middle",
              horizontal: "center",
            }}
            open={confirmSnackbar}
            autoHideDuration={5000}
            onClose={() => setConfirmSnackbar(false)}
          >
            <Box
              sx={{
                background: "#061148",
                display: "flex",
                opacity: 1,
                width: "328px",
                height: "66px",
                visibility: 'visible',
                zIndex: 99999,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography variant="para2" sx={{ color: "#c1c3d0" }}>
                Your pick has been confirmed!
              </Typography>
              <Box onClick={() => setConfirmSnackbar(false)} >
                <RightLogo />
              </Box>
            </Box>
          </Snackbar>
        </Stack> : ''
      }
    </div>
  );
};

export default PickEm;
