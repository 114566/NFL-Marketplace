import React, { useEffect } from "react";
import "./style.css";
import dataTwo from "./data";
import lock from "../../../assets/image/lock.svg";
import BudlightImage from "../../../images/dashboard/BudlightImage.png";
import BudlightImageDesktop from "../../../images/dashboard/desktop-dashboard-top.png";
import BudlightImageMobile from "../../../images/dashboard/mobile-dashboard-top.png";
import { LongerStreakLogo } from "../../../assets/Icons";
import HttpsOutlined from "@mui/icons-material/HttpsOutlined";
import { gql, useLazyQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { useAuth } from '../../../hooks/auth';
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const ACCOUNT_NFTS = gql`
    query {
        tokensByOwner {
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
`

const AccountsImage = () => {
    const navigate = useNavigate();
    const [getAccountNFTs, { loading, error, data, refetch }] = useLazyQuery(ACCOUNT_NFTS);
    const { user, signIn, isSignedIn, signOut, isAuthLoading } = useAuth();

    setTimeout(() => {
        document.getElementById("navbarSupportedContent").className =
            "navbar-collapse mobile-nav collapse";
    }, [100]);

    useEffect(() => {
        if (isSignedIn()) {
            getAccountNFTs()
            // refetch()
            console.log('Fetching NFTs of User: ', user.addr);
        }
    }, [isSignedIn()])

    useEffect(() => {
        if (data) console.log('Data of : ', data);
    }, [data])

    return (
        <div style={{ cursor: "default!important" }}>
            <Box
                sx={{
                    background:
                        "linear-gradient(248.6deg, rgba(0, 181, 226, 0.4) 0%, rgba(0, 50, 199, 0.4) 57.55%, rgba(0, 28, 113, 0.4) 100%)",
                    width: "100%",
                    cursor: "default!important",
                }}
            >
                <img src={BudlightImageDesktop} style={{ width: "100%", cursor: "default!important" }} className="responsive-hide" />
                <img src={BudlightImageMobile} style={{ width: "100%", cursor: "default!important" }} className="responsive-show" />
            </Box>

            <div className="responsive-hide">
                <Box display="flex" justifyContent="center">
                    <Box
                        sx={{ borderBottom: "1px solid #383E55" }}
                        display="flex"
                        flexDirection="column"
                        width="86%"
                        gap={4}
                        pt={7}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: { xs: "column", md: "row" },
                                paddingBottom: (!loading && !error && data?.tokensByOwner?.length > 0 ? '0px' : '20px')
                            }}
                        >
                            <div className="d-flex" style={{ 'flexDirection': 'column' }}>
                                <Typography variant="h2">My Team Cans</Typography>
                                <Typography variant='p' style={{ width: "90%" }}>Come back each week to make a pick from any matchup for each active Team Can that you own. You can only pick a team once per season per Team Can held.<br />
                                </Typography>
                            </div>
                            {!loading && !error && data?.tokensByOwner?.length > 0 && (
                                <div style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: { xs: "100%", md: "200px" } }}
                                        onClick={() => window.open(`https://ab-nfl.myshopify.com/`, "_self")}
                                    >
                                        BUY NOW
                                    </Button>&nbsp;
                                    <Button
                                        variant="outlined"
                                        className='white-button'
                                        sx={{ width: { xs: "100%", md: "200px", fontSize: "16px" } }}
                                        onClick={() => window.open(`https://pickem.mint.store`)}
                                    >
                                        Activate My Cans
                                    </Button>
                                </div>
                            )}
                        </Box>
                        {!loading && !error && data?.tokensByOwner?.length > 0 && (
                            <Box display="flex" alignItems="center" gap={0.7} sx={{ pb: 2.5 }}>
                                <LongerStreakLogo />
                                <Typography variant="headerTitle" >Longest Streak</Typography>
                            </Box>
                        )}
                    </Box>
                </Box>
            </div>
            <div className='responsive-show'>
                <Box display="flex" justifyContent="center">
                    <Box
                        sx={{ borderBottom: "1px solid #383E55" }}
                        display="flex"
                        flexDirection="column"
                        width="86%"
                        gap={4}
                        pt={7}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: { xs: "column", md: "row" },
                                paddingBottom: (!loading && !error && data?.tokensByOwner?.length > 0 ? '0px' : '20px')
                            }}
                        >
                            <div className="d-flex" style={{ 'flexDirection': 'column' }}>
                                <Typography variant="h2">My Team Cans</Typography>
                                <Typography variant='p' style={{ width: "90%" }}>Use your Team Cans when gameplay begins week #6 of the NFL season (Tuesday 10/11). Come back then to pick your winner from any matchup. You can only pick a team once per season.<br />
                                </Typography>
                            </div>
                            {!loading && !error && data?.tokensByOwner?.length > 0 && (
                                <div style={{ 'display': 'flex', 'flexDirection': 'column' }} className='mt-2'>
                                    <Button
                                        variant="contained"
                                        sx={{ width: { xs: "100%", md: "200px" } }}
                                        onClick={() => window.open(`https://ab-nfl.myshopify.com/`, "_self")}
                                    >
                                        BUY NOW
                                    </Button>&nbsp;
                                    <Button
                                        variant="outlined"
                                        className='white-button'
                                        style={{ 'minWidth': '250px' }}
                                        sx={{ width: { xs: "100%", md: "200px", fontSize: "16px" } }}
                                        onClick={() => window.open(`https://pickem.mint.store`)}
                                    >
                                        Activate My Cans
                                    </Button>
                                </div>
                            )}
                        </Box>
                        {!loading && !error && data?.tokensByOwner?.length > 0 && (
                            <Box display="flex" alignItems="center" gap={0.7} sx={{ pb: 2.5 }}>
                                <LongerStreakLogo />
                                <Typography variant="headerTitle">Longest Streak</Typography>
                            </Box>
                        )}
                    </Box>
                </Box>
            </div>
            {!loading && !error && data?.tokensByOwner?.length > 0 ?
                <div className="contents">
                    {(data.tokensByOwner.map((item, index) => {
                        return (
                            <div
                                className={item.teams.status == "BURNED" || item.teams.status == "REDEEMED"
                                    ? "card-container1 card-container"
                                    : "card-container"}
                                key={index}
                            >
                                <div className="status">{item.teams.status}</div>
                                <a href={`/collection/${item.tokenId}`}>
                                    <video className="card-image" poster={item.thumbnail} autoPlay muted loop playsInline>
                                        <source src={item.mediaURL} type="video/mp4"></source>
                                    </video>
                                </a>
                                <div className="sub-content">
                                    {item.status.toUpperCase()}
                                </div>
                                <div className="card-bottom mt-2">

                                    <div className="heading-content mt-1">{item.name} {String(item.tokenId).padStart(5, '0')}</div>
                                   <div className="sub-content mt-1">
                                        {item.streak} Game Streak
                                    </div>
                                    <div className="sub-content d-flex">
                                        <Box className={item.currentPicked == null ? 'mt-1' : ''}>Current pick: {item.currentPicked != null ? <img src={require(`../../../images/pickItems/NflTeamLogo/${item.currentPicked}_active.svg`)} alt="" style={{ width: '30px' }} /> : <span>select before Sun @ 1pm ET</span>}</Box>
                                    </div>
                                    {
                                        item.status != 'Active'  ?  (
                                        <div className="sub-content text-center mt-3 mb-4 d-flex text-center" style={{ 'justifyContent': 'center' }}>
                                            <Link to={`/collection/${item.tokenId}`} style={{ 'textDecoration': 'none' }}>
                                                <button className="buttonfit ms-1 px-0 " style={{ 'background': 'transparent', 'color': 'white', 'border': '1px solid #383e55', 'minWidth': '120px', 'fontSize': '120%' }}>
                                                    NFT DETAILS
                                                </button>
                                            </Link>
                                        </div>
                                        ) :
                                        (item.teams.every((team) => team.isTeamLocked === true)) || item.teams.find((team) => team.id === item.currentPicked)?.isTeamLocked ?
                                            <div className="sub-content text-center mt-3 mb-4 d-flex text-center" style={{ 'justifyContent': 'center' }}>
                                                <Link to='#' aria-disabled style={{ 'textDecoration': 'none' }}>
                                                    <button className="buttonfit1 ms-1 pb-1 text-center px-0 " style={{ 'minWidth': '120px', 'fontSize': '120%', 'textAlign': 'center G', 'background': '#202624', 'border': '1px solid #202624', 'color': ' white' }}>
                                                        LOCKED <HttpsOutlined className='m-auto pb-1' style={{ fontSize: '22px', fontFamily: 'Titling Gothic FB Narrow' }} />
                                                    </button>
                                                </Link>
                                                <Link to={`/collection/${item.tokenId}`} style={{ 'textDecoration': 'none' }}>
                                                    <button className="buttonfit ms-1 px-0 " style={{ 'background': 'transparent', 'color': 'white', 'border': '1px solid #383e55', 'minWidth': '120px', 'fontSize': '120%' }}>
                                                        NFT DETAILS
                                                    </button>
                                                </Link>
                                            </div>
                                            : item.currentPicked ?
                                                <div className="sub-content text-center mt-3 mb-4 d-flex text-center" style={{ 'justifyContent': 'center' }}>
                                                    <Link to={`/collection/pickem/${item.tokenId}`} style={{ 'textDecoration': 'none' }}>
                                                        <button className="buttonfit ms-1 px-0 " style={{ 'background': 'transparent', 'color': 'white', 'border': '1px solid #383e55', 'minWidth': '120px', 'fontSize': '120%' }}>
                                                            EDIT PICK
                                                        </button>
                                                    </Link>
                                                    <Link to={`/collection/${item.tokenId}`} style={{ 'textDecoration': 'none' }}>
                                                        <button className="buttonfit ms-1 px-0 " style={{ 'background': 'transparent', 'color': 'white', 'border': '1px solid #383e55', 'minWidth': '120px', 'fontSize': '120%' }}>
                                                            NFT DETAILS
                                                        </button>
                                                    </Link>
                                                </div>
                                                :
                                                <div className="sub-content text-center mt-3 mb-4 d-flex text-center" style={{ 'justifyContent': 'center' }}>
                                                    <Link to={`/collection/pickem/${item.tokenId}`} style={{ 'textDecoration': 'none' }}>
                                                        <Button variant="contained" className="me-1" style={{ 'minWidth': '120px', 'fontSize': '120%', 'fontFamily': 'Titling Gothic FB Narrow' }}>
                                                            PICK &apos;EM
                                                        </Button>
                                                    </Link>
                                                    <Link to={`/collection/${item.tokenId}`} style={{ 'textDecoration': 'none' }}>
                                                        <button className="buttonfit ms-1 px-0 " style={{ 'background': 'transparent', 'color': 'white', 'border': '1px solid #383e55', 'minWidth': '120px', 'fontSize': '120%' }}>
                                                            NFT DETAILS
                                                        </button>
                                                    </Link>
                                                </div>
                                    }
                                </div>
                            </div>);
                    }))} </div>
                : // Data not found
                <Box display="flex" alignItems="center">
                    {!isSignedIn() ?

                        <Box display="flex" className="" justifyContent="center" sx={{ flexDirection: 'column' }} style={{ width: "100%" }} >

                            <Box
                                display="flex"
                                flexDirection="column"
                                width="86%"
                                gap={4}
                                pt={7}
                                className='m-auto'
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexDirection: { xs: "column", md: "column" },
                                        width: "100%"
                                    }}
                                >
                                    <Typography variant="h5">Sign in to access your Team Cans</Typography>
                                    {/*<Typography variant="p" className='col-lg-6 offset-lg-3 text-center mt-2'><small>Sign in to your Dapper wallet to access your Team Cans.</small><br />&nbsp;</Typography>*/}

                                    {isAuthLoading ?
                                        <div>
                                            <br/><CircularProgress color="secondary" /><br /><br/>
                                        </div>

                                        :
                                        <div>
                                            <div className='responsive-hide'>
                                                <Button
                                                    variant="contained"
                                                    className="mt-4 mb-5 mx-2"
                                                    sx={{ width: { xs: "100%", md: "200px", paddingTop: '20px', paddingBottom: '20px' } }}
                                                    onClick={signIn}
                                                >
                                                    SIGN IN
                                                </Button>


                                                <Button
                                                    variant="outlined"
                                                    className="mt-4 mb-5 mx-2"
                                                    sx={{ width: { xs: "100%", md: "200px", paddingTop: '20px', paddingBottom: '20px', backgroundColor: 'white', fontSize: "16px" } }}
                                                    onClick={() => window.open(`https://pickem.mint.store`)}
                                                    style={{ 'background': 'white', "border": "0px" }}
                                                >
                                                    Activate My Cans
                                                </Button><br/><br/>
                                            </div>
                                            <div className='responsive-show'>
                                                <Button
                                                    variant="contained"
                                                    className="mt-4 mb-3 mx-2"
                                                    sx={{ width: { xs: "100%", md: "200px", paddingTop: '20px', paddingBottom: '20px' } }}
                                                    onClick={signIn}
                                                >
                                                    SIGN IN
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    className="mb-3 mx-2 btn-white-default"
                                                    sx={{ width: { xs: "100%", md: "200px", paddingTop: '20px', paddingBottom: '20px', fontSize: "16px" } }}
                                                    onClick={() => window.open(`https://pickem.mint.store`)}
                                                    style={{ 'background': 'white', "border": "0px" }}
                                                >
                                                    Activate My Cans
                                                </Button><br/><br/>
                                            </div>
                                        </div>
                                    }
                                </Box>

                            </Box>
                        </Box>
                        : loading ?
                        <CircularProgress style={{ alignContent: 'center', marginRight: 'auto', marginLeft: 'auto', marginTop: '40px', marginBottom: '40px' }} color="secondary" />
                        :





                        <Box display="flex" className="" justifyContent="center" sx={{ flexDirection: 'column' }} style={{ width: "100%" }} >

                            <Box
                                display="flex"
                                flexDirection="column"
                                width="86%"
                                gap={4}
                                pt={7}
                                className='m-auto'
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexDirection: { xs: "column", md: "column" },
                                        width: "100%"
                                    }}
                                >
                                    <Typography variant="h5">Your Fridge is Empty. Time to Stock Up.</Typography>
                                    <Typography variant="p" className='col-lg-6 offset-lg-3 text-center mt-2'><small>Purchase a Bud Light Team Can collectible to get in the game for a chance to win prizes like official NFL jerseys & regular season tickets for your favorite team. </small><br />&nbsp;</Typography>

                                    <div className='responsive-hide'>
                                        <Button
                                            variant="contained"
                                            className="mt-4 mb-5 mx-2"
                                            sx={{ width: { xs: "100%", md: "200px", paddingTop: '20px', paddingBottom: '20px' } }}
                                            onClick={() => window.open('https://ab-nfl.myshopify.com/', "_self")}
                                        >
                                            BUY NEW CAN
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            className="mt-4 mb-5 mx-2"
                                            sx={{ width: { xs: "100%", md: "200px", paddingTop: '20px', paddingBottom: '20px', backgroundColor: 'white' } }}
                                            onClick={() => window.open(`https://pickem.mint.store`)}
style={{ 'background': 'white', "border": "0px" }}
                                        >
                                            Activate My Cans
                                        </Button>
                                    </div>
                                    <div className='responsive-show'>
                                        <Button
                                            variant="contained"
                                            className="mt-4 mb-3 mx-2"
                                            sx={{ width: { xs: "100%", md: "200px", paddingTop: '20px', paddingBottom: '20px' } }}
                                            onClick={() => window.open(`https://ab-nfl.myshopify.com/`)}
                                        >
                                            BUY NEW CAN
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            className="mb-3 mx-2 btn-white-default"
                                            sx={{ width: { xs: "100%", md: "200px", paddingTop: '20px', paddingBottom: '20px' } }}
                                            onClick={() => window.open(`https://pickem.mint.store`)}
                                        >
                                            Activate My Cans
                                        </Button>
                                    </div>
                                </Box>

                            </Box>
                        </Box>

                    }
                </Box>
            }
        </div>
    );
};
export default AccountsImage;
