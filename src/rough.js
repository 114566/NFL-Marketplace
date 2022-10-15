/* eslint-disable react/no-unescaped-entities */
import { Box, Typography, path } from "@mui/material";
import React from "react";
import {Link, useParams} from "react-router-dom";
import { useStyles } from "./Styles";
import NFTHeaderCard from "../../images/PickEm/NFT-Header-Card.svg";
// import Subtract from "../../images/PickEm/Subtract.svg";
import Subtract from "../../images/PickEm/Subtract.svg";
import Countdown from "components/common/Countdown";
import BackGroundImage from "../../images/PickEm/BackgroundImage.png";
import Dropdown from "./Dropdown";
import PickItems from "./PickItems";
import Footer from "components/common/Footer";
// import { BackIcon } from "assets/Icons";
import MobileScreen from "./MobileScreen";
import { useMediaQuery } from "@mui/material";
import { BackIcon } from "assets/Icons";
import PickemScrolFreezTime from "./PickItems/PickemScrolFreezTime";
import {gql, useLazyQuery} from "@apollo/client";
import {useEffect} from "@types/react";
import { useAuth } from "../../hooks/auth";
//
// const NFT_PICKEM_DATA = gql`
//     query NFT_PICKEM_DATA ($tokenId: Int!) {
//         gamesByTokenId(tokenId: $tokenId) {
//             name
//             description
//             thumbnail
//             mediaURL
//             tokenId
//             rarity
//             week
//             games {
//                 name
//                 id
//                 roundName
//                 startDate
//                 seasonId
//                 seasonName
//                 isGameLocked
//                 homeTeamId {
//                     name
//                     id
//                     isTeamLocked
//                     status
//                     pickedPercentage
//                 }
//                 awayTeamId {
//                     name
//                     id
//                     isTeamLocked
//                     status
//                     pickedPercentage
//                 }
//                 venueName
//                 venueCity
//                 isDeleted
//                 status
//             }
//         }
//     }
// `
//

const PickEm = () => {
    const { tokenId } = useParams();
    // const [getNftPickEmData, {loading, error, data, refetch}] = useLazyQuery(NFT_PICKEM_DATA);
    const {user, signIn, isSignedIn, signOut} = useAuth();

    const styles = useStyles();
    const matches900px = useMediaQuery("(max-width: 900px)");
    const [imgurl, setImage] = React.useState("");
    const [showSection, setShowSection] = React.useState(false);
    const [clearSection, setClearSection] = React.useState(false);
    // const [teams, setTeams] = React.useState([]);
    // const { response, loading } = useAxios(Apis.match);


    // useEffect(() => {
    //   if (isSignedIn()) {
    //     getNftPickEmData({ variables: { tokenId: parseInt(37) }})
    //     refetch()
    //     console.log('Fetching NFT for User: ', user.addr);
    //   }
    // }, [isSignedIn()]);
    //
    // useEffect(() => {
    //   if (data) console.log('Data of Nft: ', data);
    // }, [data])

    const callback = (imgurl) => {
        setClearSection(false);
        if (
            !(
                imgurl ==
                "/static/media/Arizona_active_logo.73040feb3e5c8cbc659e73006701374f.svg" ||
                imgurl ==
                "/static/media/Atalanta_active_logo.bb9585b2fa96da5798fcb4846d77e24c.svg" ||
                imgurl ==
                "/static/media/Baltimore_active_logo.447b1698febac1c4fe568211072dfa45.svg" ||
                imgurl ==
                "/static/media/Buffalo_active_logo.9f5f6458a106051aa612f4e849f536e8.svg"
            )
        ) {
            setImage(imgurl);
        }
    };
    const removeImage = () => {
        setImage("");
        setClearSection(true);
    };
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 130) {
                setShowSection(true);
            } else {
                setShowSection(false);
            }
        });
    });
    const renderheaderCard = () => {
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
                    <Link to="/collection" style={{ cursor: "pointer" }}>
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
                            <Box
                                borderRight={0.6}
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <Typography variant="h7">
                                    <img
                                        src={NFTHeaderCard}
                                        alt=""
                                        className={styles.nftCardImg}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </Typography>
                            </Box>
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
                                    8
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
                                        <Dropdown />
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
                                {imgurl == "" ? (
                                    <Typography variant="h9">
                                        <img src={Subtract} alt=" img" />
                                    </Typography>
                                ) : (
                                    <Typography variant="h9">
                                        <img src={imgurl} alt=" img" />
                                        <svg
                                            width="36"
                                            onClick={removeImage}
                                            style={{
                                                right: "-18px",
                                                position: "absolute",
                                                top: "-18px",
                                                cursor: "pointer",
                                            }}
                                            height="36"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="36" height="36" rx="18" fill="white" />
                                            <path
                                                d="M23 13L13 23M13 13L23 23"
                                                stroke="#0035A5"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <rect
                                                x="0.5"
                                                y="0.5"
                                                width="35"
                                                height="35"
                                                rx="17.5"
                                                stroke="white"
                                                strokeOpacity="0.3"
                                            />
                                        </svg>
                                    </Typography>
                                )}
                            </Box>
                            <Box className="mt-4 responsive-hide">
                                <Typography variant="h9" sx={{ fontSize: "20px" }}>
                                    YOUR PICK
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
            {!loading && !error && data?.gamesByTokenId ?

                <div>
                    {matches900px ? (
                        <>
                            <Box display={["flex", "flex", "none"]}>
                                <MobileScreen />
                            </Box>
                            <Box className={styles.container} display={["flex", "flex", "flex"]}>
                                <div className={styles.cardContainer}>
                                    <PickItems
                                        parentCallback={callback}
                                        clearSelection={clearSection}
                                        teams={data.gamesByTokenId.games}
                                    />
                                </div>
                            </Box>
                        </>
                    ) : (
                        <Box className={styles.container} display={["flex", "flex", "flex"]}>
                            <div className={styles.headerContainer} style={{ display: "flex" }}>
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
                                    {renderheaderCard()}
                                </Box>
                            </div>
                            <div className={styles.cardContainer}>
                                <PickItems
                                    parentCallback={callback}
                                    clearSelection={clearSection}
                                    teams={data.gamesByTokenId.games}
                                />
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
                                            <Dropdown />
                                        </Box>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div
                                        className="col-lg-6 responsive-hide"
                                        style={{ margin: "auto", textAlign: "right" }}
                                    >
                                        {/* <span>PICK FREEZES IN: 02D 17H 54M 28S</span> */}
                                        <Box >
                                            <PickemScrolFreezTime/>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <Footer />
                </div>

                : loading ? // If Loading
                    <div></div>
                    : error ?
                        <div></div>
                        : ""


            }
        </div>
    );
};

export default PickEm;
