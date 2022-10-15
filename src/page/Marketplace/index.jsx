import * as React from 'react';
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Footer from "components/common/Footer";
import { Box, Button } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import './marketplace.css';
import Ascending from '../../images/marketplace/Ascending.svg';
import Descending from '../../images/marketplace/Descending.svg';
import Filters from '../../images/marketplace/Filters.svg';
import { LongerStreakLogo } from "../../assets/Icons";
import cardvideo from '../../videos/About_page_top.mp4'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import gridimage from '../../images/marketplace/Grid Lines.png';
import useAxios from 'api/useAxios';
import { Apis } from 'api/const';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/auth';
import dark from 'theme/palette/dark';
const sortcarddata = [
    { 'url': cardvideo, 'title': 'Arizona Cardinals', 'number': '0000', 'description': 1, "price": 10 },
    { 'url': cardvideo, 'title': 'Atlanta Falcons', 'number': '0000', 'description': 2, "price": 32 },
    { 'url': cardvideo, 'title': 'Baltimore Ravens', 'number': '0000', 'description': 15, "price": 1500 },
    { 'url': cardvideo, 'title': 'Buffalo Bills', 'number': '0000', 'description': 6, "price": 5 },
    { 'url': cardvideo, 'title': 'Carolina Panthers', 'number': '0000', 'description': 3, "price": 32 },
    { 'url': cardvideo, 'title': 'Chicago Bears', 'number': '0000', 'description': 4, "price": 100 },
    { 'url': cardvideo, 'title': 'Cincinnati Bengals', 'number': '0000', 'description': 3, "price": 0 },
    { 'url': cardvideo, 'title': 'Cleveland Browns', 'number': '0000', 'description': 7, "price": 40 },
    { 'url': cardvideo, 'title': 'Dallas Cowboys', 'number': '0000', 'description': 9, "price": 120 },
    { 'url': cardvideo, 'title': 'Denver Broncos', 'number': '0000', 'description': 13, "price": 122 },
    { 'url': cardvideo, 'title': 'Detroit Lions', 'number': '0000', 'description': 12, "price": 64 },
    { 'url': cardvideo, 'title': 'Green Bay Packers', 'number': '0000', 'description': 1, "price": 85 },
    { 'url': cardvideo, 'title': 'Houston Texans', 'number': '0000', 'description': 6, "price": 25 },
    { 'url': cardvideo, 'title': 'Indianapolis Colts', 'number': '0000', 'description': 2, "price": 30 },
    { 'url': cardvideo, 'title': 'Jacksonville Jaguars', 'number': '0000', 'description': 3, "price": 100 },
    { 'url': cardvideo, 'title': 'Kansas City Chiefs', 'number': '0000', 'description': 12, "price": 80 },
    { 'url': cardvideo, 'title': 'Las Vegas Raiders', 'number': '0000', 'description': 14, "price": 90 },
    { 'url': cardvideo, 'title': 'Los Angeles Chargers', 'number': '0000', 'description': 11, "price": 90 },
    { 'url': cardvideo, 'title': 'Los Angeles Rams', 'number': '0000', 'description': 8, "price": 125 },
    { 'url': cardvideo, 'title': 'Miami Dolphins', 'number': '0000', 'description': 8, "price": 55 },
    { 'url': cardvideo, 'title': 'Minnesota Vikings', 'number': '0000', 'description': 2, "price": 32 },
    { 'url': cardvideo, 'title': 'New England Patriots', 'number': '0000', 'description': 9, "price": 32 },
    { 'url': cardvideo, 'title': 'New Orleans Saints', 'number': '0000', 'description': 11, "price": 120 },
    { 'url': cardvideo, 'title': 'New York Giants', 'number': '0000', 'description': 12, "price": 140 },
    { 'url': cardvideo, 'title': 'New York Jets', 'number': '0000', 'description': 5, "price": 500 },
    { 'url': cardvideo, 'title': 'Philadelphia Eagles', 'number': '0000', 'description': 8, "price": 320 },
    { 'url': cardvideo, 'title': 'Pittsburgh Steelers', 'number': '0000', 'description': 6, "price": 240 },
    { 'url': cardvideo, 'title': 'San Francisco 49ers', 'number': '0000', 'description': 7, "price": 35 },
    { 'url': cardvideo, 'title': 'Seattle Seahawks', 'number': '0000', 'description': 4, "price": 100 },
    { 'url': cardvideo, 'title': 'Tampa Bay Buccaneers', 'number': '0000', 'description': 9, "price": 25 },
    { 'url': cardvideo, 'title': 'Tennesse Titans', 'number': '0000', 'description': 11, "price": 50 },
    { 'url': cardvideo, 'title': 'Washington Commanders', 'number': '0000', 'description': 8, "price": 125 },
]
const streakbutton = [
    { value: 1 },
    { value: 4 },
    { value: 7 },
    { value: 10 },
    { value: 13 }
]
const Marketplace = () => {

    const { response, loading } = useAxios(Apis.itemForSale, { params: { $limit: 30 } });
    // const [marketPlaceData, setMarketPlaceData] = useState();
    const { user, signIn, isSignedIn, signOut } = useAuth();
    const [filteredMarketPlaceData, setFilteredMarketPlaceData] = useState();

    const [streakFilteredMarketPlaceData, setStreakFilteredMarketPlaceData] = useState();
    const [teamFilteredMarketPlaceData, setTeamFilteredMarketPlaceData] = useState();
    const [priceFilteredMarketPlaceData, setPriceFilteredMarketPlaceData] = useState();

    const [streakFilterButtonValue, setStreakFilterButtonValue] = useState([
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 },
        { id: 6, value: 0 },
        { id: 7, value: 0 },
        { id: 8, value: 0 },
        { id: 9, value: 0 },
        { id: 10, value: 0 },
        { id: 11, value: 0 },
        { id: 12, value: 0 },
        { id: 13, value: 0 },
        { id: 14, value: 0 },
        { id: 15, value: 0 },
    ]);
    const [teamOptions, setTeamOptions] = useState([]);
    const [isStreakFilterAvailable, setIsStreakFilterAvailable] = useState(false);
    const [isTeamFiltereAvailable, setIsTeamFiltereAvailable] = useState(false);
    const [isPriceFiltereAvailable, setIsPriceFiltereAvailable] = useState(false);

    const [filteredMarketPlaceData2, setFilteredMarketPlaceData2] = useState([]);
    const navigate = useNavigate();
    const [cardwidth, setCardWidth] = useState('col-lg-3');
    const [cardboxwidth, setCardboxWidth] = useState('col-lg-12');
    const [filterwidth, setFilterbox] = useState('d-none');
    const [filterbarstatus, setFilterbarstatus] = useState(0);
    const [buttontoggle, setButtonToggle] = useState(0);
    const [filtersecond1, setFilterSecond1] = useState(0);
    const [filtersecond2, setFilterSecond2] = useState(0);
    const [filtersecond3, setFilterSecond3] = useState(0);
    const [filtersecond4, setFilterSecond4] = useState(0);
    const [filtersecond5, setFilterSecond5] = useState(0);
    const [filtersecond6, setFilterSecond6] = useState(0);
    const [filtersecond7, setFilterSecond7] = useState(0);
    const [filtersecond8, setFilterSecond8] = useState(0);
    const [filtersecond9, setFilterSecond9] = useState(0);
    const [filtersecond10, setFilterSecond10] = useState(0);
    const [filtersecond11, setFilterSecond11] = useState(0);
    const [filtersecond12, setFilterSecond12] = useState(0);
    const [filtersecond13, setFilterSecond13] = useState(0);
    const [filtersecond14, setFilterSecond14] = useState(0);
    const [filtersecond15, setFilterSecond15] = useState(0);
    const [value, setValue] = useState([]);
    const [Effectstate, setEffectstate] = useState(0);
    const [filterfirstdata, setFilterFirstData] = useState(true);
    const [filterseconddata, setFilterSecondData] = useState(true);
    const [filterthirddata, setFilterthirdData] = useState(true);
    const [carddata, setCardData] = useState([
        { 'url': cardvideo, 'title': 'Arizona Cardinals', 'number': '0000', 'description': 1, "price": 10 },
        { 'url': cardvideo, 'title': 'Atlanta Falcons', 'number': '0000', 'description': 2, "price": 32 },
        { 'url': cardvideo, 'title': 'Baltimore Ravens', 'number': '0000', 'description': 15, "price": 1500 },
        { 'url': cardvideo, 'title': 'Buffalo Bills', 'number': '0000', 'description': 6, "price": 5 },
        { 'url': cardvideo, 'title': 'Carolina Panthers', 'number': '0000', 'description': 3, "price": 32 },
        { 'url': cardvideo, 'title': 'Chicago Bears', 'number': '0000', 'description': 4, "price": 100 },
        { 'url': cardvideo, 'title': 'Cincinnati Bengals', 'number': '0000', 'description': 3, "price": 0 },
        { 'url': cardvideo, 'title': 'Cleveland Browns', 'number': '0000', 'description': 7, "price": 40 },
        { 'url': cardvideo, 'title': 'Dallas Cowboys', 'number': '0000', 'description': 9, "price": 120 },
        { 'url': cardvideo, 'title': 'Denver Broncos', 'number': '0000', 'description': 13, "price": 122 },
        { 'url': cardvideo, 'title': 'Detroit Lions', 'number': '0000', 'description': 12, "price": 64 },
        { 'url': cardvideo, 'title': 'Green Bay Packers', 'number': '0000', 'description': 1, "price": 85 },
        { 'url': cardvideo, 'title': 'Houston Texans', 'number': '0000', 'description': 6, "price": 25 },
        { 'url': cardvideo, 'title': 'Indianapolis Colts', 'number': '0000', 'description': 2, "price": 30 },
        { 'url': cardvideo, 'title': 'Jacksonville Jaguars', 'number': '0000', 'description': 3, "price": 100 },
        { 'url': cardvideo, 'title': 'Kansas City Chiefs', 'number': '0000', 'description': 12, "price": 80 },
        { 'url': cardvideo, 'title': 'Las Vegas Raiders', 'number': '0000', 'description': 14, "price": 90 },
        { 'url': cardvideo, 'title': 'Los Angeles Chargers', 'number': '0000', 'description': 11, "price": 90 },
        { 'url': cardvideo, 'title': 'Los Angeles Rams', 'number': '0000', 'description': 8, "price": 125 },
        { 'url': cardvideo, 'title': 'Miami Dolphins', 'number': '0000', 'description': 8, "price": 55 },
        { 'url': cardvideo, 'title': 'Minnesota Vikings', 'number': '0000', 'description': 2, "price": 32 },
        { 'url': cardvideo, 'title': 'New England Patriots', 'number': '0000', 'description': 9, "price": 32 },
        { 'url': cardvideo, 'title': 'New Orleans Saints', 'number': '0000', 'description': 11, "price": 120 },
        { 'url': cardvideo, 'title': 'New York Giants', 'number': '0000', 'description': 12, "price": 140 },
        { 'url': cardvideo, 'title': 'New York Jets', 'number': '0000', 'description': 5, "price": 500 },
        { 'url': cardvideo, 'title': 'Philadelphia Eagles', 'number': '0000', 'description': 8, "price": 320 },
        { 'url': cardvideo, 'title': 'Pittsburgh Steelers', 'number': '0000', 'description': 6, "price": 240 },
        { 'url': cardvideo, 'title': 'San Francisco 49ers', 'number': '0000', 'description': 7, "price": 35 },
        { 'url': cardvideo, 'title': 'Seattle Seahawks', 'number': '0000', 'description': 4, "price": 100 },
        { 'url': cardvideo, 'title': 'Tampa Bay Buccaneers', 'number': '0000', 'description': 9, "price": 25 },
        { 'url': cardvideo, 'title': 'Tennesse Titans', 'number': '0000', 'description': 11, "price": 50 },
        { 'url': cardvideo, 'title': 'Washington Commanders', 'number': '0000', 'description': 8, "price": 125 },
    ])
    const [carddatas, setCardDatas] = useState(sortcarddata)

    const [carddatas1, setCardDatas1] = useState([])
    const [carddatas2, setCardDatas2] = useState([]);
    const [carddatas3, setCardDatas3] = useState([]);
    const [expanded, setExpanded] = React.useState('panel1');
    const [MoreState, setMoreState] = useState(true);
    const [loadMoreIndex, setLoadMoreIndex] = useState(30);

    const firstFilter = (e, value) => {
    }
    const softbarshow = () => {
        setCardData(sortcarddata);
    }
    const clearAll = () => {
        window.location.reload(false);
    }
    // const sortMarketplaceData=response?.data?.slice(0,loadMoreIndex)
    let marketPlaceData = response?.data
    // const marketPlaceData=sortMarketplaceData?.sort((a, b) => {
    //     return a.nft.itemFID - b.nft.itemFID;
    // })
    // console.log(marketPlaceData,"=========================>");
    const onChangeMorebutton = () => {
        setMoreState(false);

        if (response?.data?.length > loadMoreIndex) {

            setLoadMoreIndex(loadMoreIndex + 30)
        }
    };

    useEffect(() => {
        if (isSignedIn()) {

            //   console.log("user=================>",user);
            // refetch();
        }
    }, [isSignedIn()]);
    //   let marketPlaceData=[]
    //   const anyFunction =()=>{
    //   marketPlaceData=sortMarketplaceData?.sort((a, b) => {
    //          return a.nft.itemFID - b.nft.itemFID;
    //      })
    //   }
    useEffect(() => {
        // if (response) {

        //     setMarketPlaceData(response);
        // anyFunction();
        marketPlaceData = marketPlaceData?.sort((a, b) => {
            return a.nft.itemFID - b.nft.itemFID;
        })

        // console.log("marketPlaceData : ", marketPlaceData);
        setFilteredMarketPlaceData(marketPlaceData);

        let options = [];
        marketPlaceData && marketPlaceData.map((data) => {
            options.push(data.nft.name);
        })
        options = options.filter((val, index) => {
            return options.indexOf(val) === index;
        })
        setTeamOptions(options);


        // }
    }, [response]);


    useEffect(() => {
        let firstsectionfilter = [];
        let secondsectionfilter = [];
        let thirdsectionfilter = [];
        if (carddatas1.length !== 0 && filterfirstdata == false) {
            firstsectionfilter = carddatas1;
        }
        if (carddatas1.length == 0 && filterfirstdata == false) {
            firstsectionfilter = sortcarddata;
        }
        if (carddatas1.length == 0 && filterfirstdata == true) {
            firstsectionfilter = sortcarddata;
        }

        if (carddatas2.length !== 0 && filterseconddata == false) {
            secondsectionfilter = carddatas2;
        }
        if (carddatas2.length == 0 && filterseconddata == false) {
            secondsectionfilter = sortcarddata;

        }
        if (carddatas2.length == 0 && filterseconddata == true) {
            secondsectionfilter = sortcarddata;
        }

        if (carddatas3.length !== 0 && filterthirddata == false) {
            thirdsectionfilter = carddatas3;
        }
        if (carddatas3.length == 0 && filterthirddata == false) {
            thirdsectionfilter = [];
        }
        if (carddatas3.length == 0 && filterthirddata == true) {
            thirdsectionfilter = sortcarddata;
        }
        let datasetvalue = [];
        if (filterfirstdata == false || filterseconddata == false || filterthirddata == false) {

            if (firstsectionfilter.length == 0 || secondsectionfilter.length == 0 || thirdsectionfilter.length == 0) {
                setCardDatas([]);
            }

            if (firstsectionfilter.length !== 0 && secondsectionfilter.length !== 0 && thirdsectionfilter.length !== 0) {
                for (let first = 0; first < firstsectionfilter.length; first++) {
                    for (let second = 0; second < secondsectionfilter.length; second++) {
                        for (let third = 0; third < thirdsectionfilter.length; third++) {
                            if (firstsectionfilter[first].title == secondsectionfilter[second].title && firstsectionfilter[first].title == thirdsectionfilter[third].title) {
                                datasetvalue.push(firstsectionfilter[first]);
                                setCardDatas(datasetvalue);
                            } else {
                                if (firstsectionfilter.length == first + 1 && secondsectionfilter.length == second + 1 && thirdsectionfilter.length == third + 1) {
                                    if (datasetvalue.length == 0) {
                                        setCardDatas([]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (carddatas1.length == 0 && carddatas2 == 0 && carddatas3 == 0) {
                if (filterfirstdata == false || filterseconddata == false || filterthirddata == false) {
                    setCardDatas(sortcarddata);
                }
            }
        }
    }, [Effectstate]);
    const onChangeMoreButton = () => {
        setMoreState(false);
    }
    // sort filter
    const softbarshow1 = () => {
        setButtonToggle(0);
        // data?.nft?.attributes.streak
        // carddata.sort((a, b) => (a.description > b.description) ? 1 : -1)
        // carddatas.sort((a, b) => (a.description > b.description) ? 1 : -1)
        // filteredMarketPlaceData.sort((a, b) => (Number(a.nft?.itemFID) > Number(b.nft?.itemFID)) ? 1 : -1)
        filteredMarketPlaceData.sort((a, b) => (a.nft?.attributes.streak > b.nft?.attributes.streak) ? 1 : -1)
        setEffectstate(new Date().getTime());
    }
    const softbarshow2 = () => {
        setButtonToggle(1);
        // carddata.sort((a, b) => (b.description > a.description) ? 1 : -1)
        // carddatas.sort((a, b) => (b.description > a.description) ? 1 : -1)
        // filteredMarketPlaceData.sort((a, b) => (Number(b.nft?.itemFID) > Number(a.nft?.itemFID)) ? 1 : -1)
        filteredMarketPlaceData.sort((a, b) => (b.nft?.attributes.streak > a.nft?.attributes.streak) ? 1 : -1)
        setEffectstate(new Date().getTime());
    }
    const checkStreakFilterIsClicked = () => {
        const isAvailable = streakFilterButtonValue.filter((obj) => { return obj.value > 0 && obj.value % 2 != 0 })
        if (isAvailable.length == 0) {
            setIsStreakFilterAvailable(false);
            setStreakFilteredMarketPlaceData([]);
            if (isTeamFiltereAvailable) {
                setFilteredMarketPlaceData(teamFilteredMarketPlaceData);
            } else if (isPriceFiltereAvailable) {
                setFilteredMarketPlaceData(priceFilteredMarketPlaceData);
            } else {
                setFilteredMarketPlaceData(marketPlaceData)
            }
        } else {
            setIsStreakFilterAvailable(true);
        }
        // isAvailable.length == 0 && setFilteredMarketPlaceData(marketPlaceData)
    }
    const filterbuttonChange = (id) => {
        setFilterSecondData(false);
        if (id == 1) {
            if (filtersecond1 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond1(filtersecond1 + 1);
                streakFilterButtonValue[0].value = filtersecond1 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setFilteredMarketPlaceData(filteredMarketPlaceData => [...filteredMarketPlaceData, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond1(filtersecond1 + 1);
                streakFilterButtonValue[0].value = filtersecond1 + 1;
                // setStreakFilterButtonValue(demoObj)
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 2) {
            if (filtersecond2 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond2(filtersecond2 + 1);
                streakFilterButtonValue[1].value = filtersecond2 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond2(filtersecond2 + 1);
                streakFilterButtonValue[1].value = filtersecond2 + 1;
                // setStreakFilterButtonValue(demoObj)
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 3) {
            if (filtersecond3 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond3(filtersecond3 + 1);
                streakFilterButtonValue[2].value = filtersecond3 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond3(filtersecond3 + 1);
                streakFilterButtonValue[2].value = filtersecond3 + 1;
                // setStreakFilterButtonValue(demoObj)
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 4) {
            if (filtersecond4 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond4(filtersecond4 + 1);
                streakFilterButtonValue[3].value = filtersecond4 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond4(filtersecond4 + 1);
                streakFilterButtonValue[3].value = filtersecond4 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 5) {
            if (filtersecond5 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond5(filtersecond5 + 1);
                streakFilterButtonValue[4].value = filtersecond5 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond5(filtersecond5 + 1);
                streakFilterButtonValue[4].value = filtersecond5 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 6) {
            if (filtersecond6 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond6(filtersecond6 + 1);
                streakFilterButtonValue[5].value = filtersecond6 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond6(filtersecond6 + 1);
                streakFilterButtonValue[5].value = filtersecond6 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 7) {
            if (filtersecond7 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond7(filtersecond7 + 1);
                streakFilterButtonValue[6].value = filtersecond7 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond7(filtersecond7 + 1);
                streakFilterButtonValue[6].value = filtersecond7 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 8) {
            if (filtersecond8 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond8(filtersecond8 + 1);
                streakFilterButtonValue[7].value = filtersecond8 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond8(filtersecond8 + 1);
                streakFilterButtonValue[7].value = filtersecond8 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 9) {
            if (filtersecond9 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond9(filtersecond9 + 1);
                streakFilterButtonValue[8].value = filtersecond9 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond9(filtersecond9 + 1);
                streakFilterButtonValue[8].value = filtersecond9 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 10) {
            if (filtersecond10 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond10(filtersecond10 + 1);
                streakFilterButtonValue[9].value = filtersecond10 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond10(filtersecond10 + 1);
                streakFilterButtonValue[9].value = filtersecond10 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 11) {
            if (filtersecond11 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond11(filtersecond11 + 1);
                streakFilterButtonValue[10].value = filtersecond11 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond11(filtersecond11 + 1);
                streakFilterButtonValue[10].value = filtersecond11 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 12) {
            if (filtersecond12 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond12(filtersecond12 + 1);
                streakFilterButtonValue[11].value = filtersecond12 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond12(filtersecond12 + 1);
                streakFilterButtonValue[11].value = filtersecond12 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 13) {
            if (filtersecond13 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond13(filtersecond13 + 1);
                streakFilterButtonValue[12].value = filtersecond13 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond13(filtersecond13 + 1);
                streakFilterButtonValue[12].value = filtersecond13 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 14) {
            if (filtersecond14 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond14(filtersecond14 + 1);
                streakFilterButtonValue[13].value = filtersecond14 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond14(filtersecond14 + 1);
                streakFilterButtonValue[13].value = filtersecond14 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        } else if (id == 15) {
            if (filtersecond15 % 2 == 0) {
                document.getElementById("color" + id).style.background = "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)";
                setFilterSecond15(filtersecond15 + 1);
                streakFilterButtonValue[14].value = filtersecond15 + 1;
                const arr = marketPlaceData.filter(function (item) {
                    return item.nft?.attributes.streak == id
                })
                // for (let i = 0; i < arr.length; i++) {
                //     setCardDatas2(carddatas2 => [...carddatas2, arr[i]])
                // }
                setIsStreakFilterAvailable(true);
                setFilteredMarketPlaceData2([...filteredMarketPlaceData2, ...arr]);
                setFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
                setStreakFilteredMarketPlaceData([...filteredMarketPlaceData2, ...arr]);
            } else {
                document.getElementById("color" + id).style.background = "transparent";
                setFilterSecond15(filtersecond15 + 1);
                streakFilterButtonValue[14].value = filtersecond15 + 1;
                const arr = filteredMarketPlaceData.filter(function (item) {
                    // return item.nft?.attributes.streak !== id
                    return item.nft?.attributes.streak != id
                })
                setFilteredMarketPlaceData2(arr);
                setFilteredMarketPlaceData(arr);
                checkStreakFilterIsClicked();
            }
        }
        if (carddatas1.length == 0) {
            setFilterFirstData(true);
        }
        if (carddatas3.length == 0) {
            setFilterthirdData(true);
        }

        setEffectstate(new Date());
    }
    const filterbarshow = () => {
        if (filterbarstatus % 2 == 0) {
            setCardWidth('col-lg-4');
            setFilterbox('col-lg-3');
            setFilterbarstatus(filterbarstatus + 1);
            setCardboxWidth('col-lg-9');
        } else {
            setCardWidth('col-lg-3');
            setFilterbox('d-none');
            setFilterbarstatus(filterbarstatus + 1);
            setCardboxWidth('col-lg-12');
        }
    }
    const [values, setValues] = React.useState('');
    const [values1, setValues1] = React.useState('');
    const inputvalue1 = values.amount;
    const inputvalue2 = values.amount1;
    const handleChange = (e) => {
        setValues(Number(e.target.value));
        // if (values1 > 0) {
        //     if (Number(e.target.value) >= 0 && values1 > 0 && values1 > Number(e.target.value)) {
        //         const newArray = marketPlaceData.filter(function (el) {
        //             return el.price >= Number(e.target.value) && el.price <= values1;
        //         })
        //         setFilteredMarketPlaceData(newArray);
        //         if (newArray.length > 0) {
        //             setCardDatas3(newArray);
        //             setFilterthirdData(false);
        //             setEffectstate(Number(e.target.value) + values1);
        //         }
        //     }
        // } else {
        //     const newArray = marketPlaceData.filter(function (el) {
        //         return el.price >= Number(e.target.value);
        //     })
        //     setFilteredMarketPlaceData(newArray);
        //     if (newArray.length > 0) {
        //         setCardDatas3(newArray);
        //         setFilterthirdData(false);
        //         setEffectstate(Number(e.target.value) + values1);
        //     }
        // }

        if (Number(e.target.value) == 0 && values1 == 0) {
            setIsPriceFiltereAvailable(false);
            setPriceFilteredMarketPlaceData([]);
            if (isTeamFiltereAvailable) {
                setFilteredMarketPlaceData(teamFilteredMarketPlaceData);
            } else if (isStreakFilterAvailable) {
                setFilteredMarketPlaceData(streakFilteredMarketPlaceData);
            } else {
                setFilteredMarketPlaceData(marketPlaceData);
            }
        } else if (Number(e.target.value) > 0 && values1 == 0) {
            setIsPriceFiltereAvailable(true);
            const newArray = marketPlaceData.filter(function (el) {
                return el.price >= Number(e.target.value);
            })
            setFilteredMarketPlaceData(newArray);
            setPriceFilteredMarketPlaceData(newArray);
        } else if (values1 > 0 && Number(e.target.value) == 0) {
            setIsPriceFiltereAvailable(true);
            const newArray = marketPlaceData.filter(function (el) {
                return el.price <= values1;
            })
            setFilteredMarketPlaceData(newArray);
            setPriceFilteredMarketPlaceData(newArray);
        } else if (Number(e.target.value) > 0 && values1 > 0) {
            setIsPriceFiltereAvailable(true);
            const newArray = marketPlaceData.filter(function (el) {
                return el.price >= Number(e.target.value) && el.price <= values1;
            })
            setFilteredMarketPlaceData(newArray);
            setPriceFilteredMarketPlaceData(newArray);
        }
    };
    const handleChange1 = (e) => {
        setValues1(Number(e.target.value));
        // if (values > 0) {
        //     if (values >= 0 && Number(e.target.value) > 0 && Number(e.target.value) > values) {
        //         const newArray = marketPlaceData.filter(function (el) {
        //             return el.price >= values && el.price <= Number(e.target.value);
        //         })
        //         setFilteredMarketPlaceData(newArray);
        //         if (newArray.length > 0) {
        //             setCardDatas3(newArray);
        //             setFilterthirdData(false);
        //             setEffectstate(new Date());
        //         }
        //     }
        // } else {
        //     const newArray = marketPlaceData.filter(function (el) {
        //         return el.price <= Number(e.target.value);
        //     })
        //     setFilteredMarketPlaceData(newArray);
        //     if (newArray.length > 0) {
        //         setCardDatas3(newArray);
        //         setFilterthirdData(false);
        //         setEffectstate(new Date());
        //     }
        // }

        if (values == 0 && Number(e.target.value) == 0) {
            setIsPriceFiltereAvailable(false);
            setPriceFilteredMarketPlaceData([]);
            if (isTeamFiltereAvailable) {
                setFilteredMarketPlaceData(teamFilteredMarketPlaceData);
            } else if (isStreakFilterAvailable) {
                setFilteredMarketPlaceData(streakFilteredMarketPlaceData);
            } else {
                setFilteredMarketPlaceData(marketPlaceData);
            }
        } else if (values > 0 && Number(e.target.value) == 0) {
            setIsPriceFiltereAvailable(true);
            const newArray = marketPlaceData.filter(function (el) {
                return el.price >= values;
            })
            setFilteredMarketPlaceData(newArray);
            setPriceFilteredMarketPlaceData(newArray);
        } else if (Number(e.target.value) > 0 && values == 0) {
            setIsPriceFiltereAvailable(true);
            const newArray = marketPlaceData.filter(function (el) {
                return el.price <= Number(e.target.value);
            })
            setFilteredMarketPlaceData(newArray);
            setPriceFilteredMarketPlaceData(newArray);
        } else if (values > 0 && Number(e.target.value) > 0) {
            setIsPriceFiltereAvailable(true);
            const newArray = marketPlaceData.filter(function (el) {
                return el.price >= values && el.price <= Number(e.target.value);
            })
            setFilteredMarketPlaceData(newArray);
            setPriceFilteredMarketPlaceData(newArray);
        }

    };
    const onBlurInput = () => {

    }

    const onInputprice = () => {

    }



    // const onChangeMorebutton = () => {
    //     setMoreState(false);

    //     if(response?.data?.length>loadMoreIndex)
    //     {

    //         setLoadMoreIndex(loadMoreIndex+30)
    //     }
    // };

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <Typography
                        className="title col-lg-10 mt-5" display={"block"} variant="h2" style={{ paddingBottom: "15px" }}
                    >
                        Marketplace
                    </Typography>
                    <Typography variant='p' style={{ width: "90%" }}>Browse and purchase current cans for sale.<br /><br />
                    </Typography>
                </div>
                <div className='row'>
                    <Box style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                        <div className='d-flex'>

                            <Typography className='d-flex me-2' onClick={filterbarshow} style={{ 'cursor': 'pointer' }}><TuneIcon className='me-1' />{filterbarstatus % 2 == 1 ? <span className='responsive-hide'>HIDE FILTERS</span> : <span className='responsive-hide'>SHOW FILTERS</span>}</Typography>

                            {
                                filterfirstdata == false || filterseconddata == false || filterthirddata == false ? <><span className=''><span>|</span></span><span className=' ms-2' onClick={clearAll} style={{ 'cursor': 'pointer', 'color': 'rgba(255,255,255,0.75)' }}><p>Clear All</p></span></> : ''
                            }

                        </div>
                        <div>
                            {
                                buttontoggle == 1 ? <Typography className='d-flex' onClick={softbarshow1} style={{ 'cursor': 'pointer' }}><img src={Ascending} alt='img' className='mb-3 me-1 mt-1' /><b className='responsive-hide'>LONGEST STREAK</b></Typography> :
                                    <Typography className='d-flex' onClick={softbarshow2} style={{ 'cursor': 'pointer' }}><img src={Descending} alt='img' className='mb-3 me-1 mt-1' /><b className='responsive-hide'>LONGEST STREAK</b></Typography>
                            }


                        </div>
                    </Box>
                </div>
                <hr style={{ 'lineHeight': '0.5' }} className='mt-0' />
                <div className='row'>
                    <div className={filterwidth}>
                        <div>
                            <Accordion sx={{ 'backgroundColor': 'transparent' }} defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                    aria-controls="panel1a-content"
                                    id="panel1a-header"

                                    className='px-0 '
                                >
                                    <Typography sx={{ 'fontWeight': '500', 'fontFamily': 'Titling Gothic FB Compressed', 'fontSize': '20px', 'lineHeight': '24px' }}>Team</Typography>
                                </AccordionSummary>
                                <AccordionDetails className='px-0' >

                                    <Autocomplete
                                        value={value}
                                        // team filter
                                        onChange={(event, newValue) => {
                                            let pushdata = [];
                                            setFilterFirstData(false);
                                            setValue(newValue);
                                            if (newValue.length == 0 && filterfirstdata == false) {
                                                setCardDatas1([]);
                                                setEffectstate(new Date());
                                            }
                                            if (carddatas1.length == 0 && filterthirddata == false) {
                                                setFilterFirstData(true);
                                            }
                                            if (carddatas2.length == 0) {
                                                setFilterSecondData(true);
                                            }
                                            if (carddatas3.length == 0) {
                                                setFilterthirdData(true);
                                            }
                                            for (let i = 0; i < newValue.length; i++) {
                                                const newArray = marketPlaceData.filter(function (el) {
                                                    // if (el.title && el) {
                                                    return el.nft.name == newValue[i];
                                                    // }
                                                })
                                                for (let a = 0; a < newArray.length; a++) {
                                                    pushdata.push(newArray[a]);
                                                }
                                                if (newValue.length - 1 == i) {
                                                    setCardDatas1(pushdata);
                                                    setEffectstate(new Date().getTime());
                                                }
                                            }
                                            if (newValue.length) {
                                                setIsTeamFiltereAvailable(true);
                                                setTeamFilteredMarketPlaceData(pushdata);
                                                setFilteredMarketPlaceData(pushdata);
                                            } else {
                                                setIsTeamFiltereAvailable(false);
                                                setTeamFilteredMarketPlaceData([]);
                                                if (isStreakFilterAvailable) {
                                                    setFilteredMarketPlaceData(streakFilteredMarketPlaceData);
                                                } else if (isPriceFiltereAvailable) {
                                                    setFilteredMarketPlaceData(priceFilteredMarketPlaceData);
                                                } else {
                                                    setFilteredMarketPlaceData(marketPlaceData)
                                                }
                                            }
                                        }
                                        }
                                        multiple
                                        id="tags-filled"
                                        options={teamOptions}
                                        freeSolo
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <Chip
                                                    variant="outlined" key={index}
                                                    label={option}
                                                    {...getTagProps({ index })}
                                                />
                                            ))
                                        }
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="filled"
                                                style={{ 'color': 'white' }}
                                            />
                                        )}
                                    />
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ 'backgroundColor': 'transparent' }} defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    className='px-0'
                                >
                                    <Typography sx={{ 'fontWeight': '500', 'fontFamily': 'Titling Gothic FB Compressed', 'fontSize': '20px', 'lineHeight': '24px' }}>Streak Length</Typography>
                                </AccordionSummary>
                                <AccordionDetails className='px-0'>
                                    {
                                        streakbutton.map((data, index) => {
                                            return <div className='d-flex mb-2' key={index} style={{ 'justifyContent': 'space-between' }}>
                                                <Button
                                                    onClick={(e) => filterbuttonChange(data.value)}
                                                    sx={{
                                                        color: "white",
                                                        border: '1px solid white',
                                                        borderRadius: '6px',
                                                        padding: '18px 11px',
                                                        gap: '12px',
                                                    }}
                                                    id={"color" + data.value}
                                                    className={"color" + data.value + ' streakButton'}
                                                    variant="outlined"
                                                    style={{ 'background': 'transparent', 'border': '1px solid #383E55' }}>
                                                    {data.value}
                                                </Button>
                                                <Button
                                                    onClick={(e) => filterbuttonChange(data.value + 1)}
                                                    sx={{
                                                        color: "white",
                                                        border: '1px solid white',
                                                        borderRadius: '6px',
                                                        padding: '18px 11px',
                                                        gap: '12px'
                                                    }}
                                                    id={"color" + (data.value + 1)}
                                                    className={"color" + (data.value + 1) + ' streakButton'}
                                                    variant="outlined"
                                                    style={{ 'background': 'transparent', 'border': '1px solid #383E55' }}>
                                                    {data.value + 1}
                                                </Button>
                                                <Button
                                                    onClick={(e) => filterbuttonChange(data.value + 2)}
                                                    sx={{
                                                        color: "white",
                                                        border: '1px solid white',
                                                        borderRadius: '6px',
                                                        padding: '18px 11px',
                                                        gap: '12px'
                                                    }}
                                                    id={"color" + (data.value + 2)}
                                                    className={'color' + (data.value + 2) + ' streakButton'}
                                                    variant="outlined"
                                                    style={{ 'background': 'transparent', 'border': '1px solid #383E55' }}>
                                                    {data.value + 2}
                                                </Button>
                                            </div>
                                        })
                                    }
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ 'backgroundColor': 'transparent' }} defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                    className='px-0'
                                >
                                    <Typography sx={{ 'fontWeight': '500', 'fontFamily': 'Titling Gothic FB Compressed', 'fontSize': '20px', 'lineHeight': '24px' }}>Price</Typography>
                                </AccordionSummary>
                                <AccordionDetails className='px-0'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='form-group'>
                                                <label htmlFor='Label'>Low</label>
                                                <FormControl fullWidth className='mt-1' variant="standard">
                                                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                                                    <Input
                                                        id="standard-adornment-amount"
                                                        value={values}
                                                        min={0}
                                                        onChange={handleChange}
                                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='form-group'>
                                                <label htmlFor='Label'>High</label>
                                                <FormControl fullWidth className='mt-1' variant="standard">
                                                    <InputLabel htmlFor="standard-adornment-amount1">Amount</InputLabel>
                                                    <Input
                                                        min={0}
                                                        id="standard-adornment-amount1"
                                                        value={values1}
                                                        onChange={handleChange1}

                                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>

                                </AccordionDetails>
                            </Accordion>
                        </div>


                    </div>
                    <div className={cardboxwidth}>
                        {
                            MoreState == true ? <div className='row'>
                                {
                                    filteredMarketPlaceData?.slice(0, loadMoreIndex)?.map((data, index) => {
                                        // filterseconddata == true && filterfirstdata == true && filterthirddata == true ? marketPlaceData?.data?.map((data, index) => {
                                        return  MoreState == true ? <div className={cardwidth + ' mb-3'} key={index}>
                                                <Card sx={{ width: '100%', border: '1px solid #383E55', backgroundColor: 'transparent' }} className={data.price == 1500 ? "maxcard" : ""}>
                                                    <CardContent className='p-0'>
                                                        <div style={{ 'position': 'relative', 'paddingTop': '30px', 'paddingLeft': '30px', 'paddingRight': '30px', cursor: "pointer" }} onClick={() => window.location.href = `${process.env.REACT_APP_MINT_STORE_URL}/public/nft/${process.env.REACT_APP_MINT_CONTRACTADDRESS}/Pickem/${data.nft.itemFID}`}>
                                                            <video key={data.nft.videoURL + new Date().getTime()} className='"card-image1"' style={{ 'width': '100%' }} autoPlay muted loop playsInline >
                                                                <source src={data.nft.videoURL} type="video/mp4"></source>
                                                            </video>
                                                            <img src={gridimage} alt='png' style={{ 'display': 'block', 'position': 'absolute', 'bottom': '0px', 'width': '100%', 'left': '0px' }} />
                                                        </div>
                                                        <Typography variant='h6' sx={{ padding: '0px 20px' }} className='text-white mt-4' color="text.secondary" gutterBottom>
                                                            {data.nft.name}&nbsp;{String(data.nft.itemFID).padStart(5, '0')}
                                                        </Typography>
                                                        <Typography variant='headerTitle2' sx={{ fontSize: "12px", lineHeight: '16px', padding: '0px 20px', color: "rgba(255, 255, 255)!important", fontWeight: 400 }} className={data.price == 1500 ? "maxcardtitle" : "text-white"} gutterBottom>
                                                            {/* {data?.description} Game Streak */}
                                                            {data?.nft?.attributes.streak} &nbsp; Game Streak
                                                        </Typography>

                                                    </CardContent>
                                                    <hr />
                                                    <CardActions style={{ 'display': 'flex', 'justifyContent': 'space-between', paddingTop: '0px', paddingLeft: '20px', paddingRight: '20px' }} >


                                                        <div>
                                                            <Typography variant='headerTitle2' sx={{ fontSize: "12px", lineHeight: '16px', color: "rgba(255, 255, 255)!important", fontWeight: 400 }} className='d-flex'>Price</Typography>
                                                        </div>
                                                        <div>
                                                            <Typography variant='headerTitle2' sx={{ fontSize: "12px", fontFamily: 'Titling Gothic FB Narrow', lineHeight: '16px', color: "#FFFFFF !important", fontWeight: 450 }} className='d-flex'>${data.price} USD</Typography>
                                                        </div>

                                                    </CardActions>
                                                    <CardActions style={{ 'display': 'flex', flexDirection: "column", 'justifyContent': 'center', paddingTop: '0px', paddingLeft: '20px', paddingRight: '20px' }}>
                                                        {

                                                            isSignedIn() && user.addr === data.flowAddress ?

                                                                <Button
                                                                    sx={{
                                                                        height: "30px",
                                                                        width: { xs: 0.5, sm: 100, md: 150, lg: 280 },
                                                                        color: "white",
                                                                        minWidth: '200px',
                                                                        fontFamily: "Titling Gothic FB Narrow",
                                                                        fontWeight: 400,
                                                                        fontSize: "14px",
                                                                        lineHeight: "16px",
                                                                        maxWidth: "95%"
                                                                    }}
                                                                    // onClick={() => window.open("https://ab-nfl.myshopify.com/","_self")}
                                                                    // size="large"
                                                                    // variant="outlined"
                                                                    onClick={() => window.location.href = `${process.env.REACT_APP_MINT_STORE_URL}/public/nft/${process.env.REACT_APP_MINT_CONTRACTADDRESS}/Pickem/${data.nft.itemFID}`}
                                                                    variant="outlined"
                                                                    size="small"
                                                                    style={{ background: dark.common.white, color: dark.common.black, 'border': '1px solid #181853', letterSpacing: "0.14em" }}
                                                                >
                                                                    REMOVE LISTING
                                                                </Button>
                                                                :
                                                                <Button
                                                                    sx={{
                                                                        height: "30px",
                                                                        width: [0.5, 100, 280],
                                                                        color: "white",
                                                                        fontFamily: "Titling Gothic FB Narrow",
                                                                        fontWeight: 400,
                                                                        fontSize: "14px",
                                                                        lineHeight: "16px",
                                                                        minWidth: "200px",
                                                                        maxWidth: "95%"
                                                                    }}
                                                                    onClick={() => window.location.href = `${process.env.REACT_APP_MINT_STORE_URL}/public/nft/${process.env.REACT_APP_MINT_CONTRACTADDRESS}/Pickem/${data.nft.itemFID}`}
                                                                    // size="large"
                                                                    // variant="outlined"
                                                                    variant="outlined"
                                                                    size="small"
                                                                    style={{ 'background': 'linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)', letterSpacing: "0.14em", 'border': '1px solid #181853' }}
                                                                >
                                                                    BUY NOW
                                                                </Button>


                                                        }

                                                    </CardActions>
                                                </Card>
                                            </div> : ''
                                        
                                    })
                                    // : carddatas.map((value1, index) => {
                                    //     return <>
                                    //         {
                                    //             index < 9 || MoreState == true ? <div className={cardwidth + ' mb-3'} key={index}>
                                    //                 <Card sx={{ width: '100%', border: '1px solid #383E55' }} className={value1.price == 1500 ? "maxcard" : ""}>
                                    //                     <CardContent className='p-0'>
                                    //                         <div style={{ 'position': 'relative', 'paddingTop': '30px', 'paddingLeft': '30px', 'paddingRight': '30px' }}>
                                    //                             <video className="card-image1" style={{ 'width': '100%' }} autoPlay muted loop playsInline>
                                    //                                 <source src={value1.url} type="video/mp4"></source>
                                    //                             </video>
                                    //                             <img src={gridimage} alt='png' style={{ 'display': 'block', 'position': 'absolute', 'bottom': '0px', 'width': '100%', 'left': '0px' }} />
                                    //                         </div>
                                    //                         <Typography  sx={{ fontSize: '20px', lineHeight: '28px', padding: '0px 20px' }} className='text-white mt-4' color="text.secondary" gutterBottom>
                                    //                             {value1.title}<br />{value1.number}
                                    //                         </Typography>
                                    //                         <Typography sx={{ fontSize: 12, lineHeight: '16px', padding: '0px 20px' }} className={value1.price == 1500 ? "maxcardtitle" : "text-white"} color="text.secondary" gutterBottom>
                                    //                             {value1.description} Game Streak
                                    //                         </Typography>

                                    //                     </CardContent>
                                    //                     <hr />
                                    //                     <CardActions style={{ 'display': 'flex', 'justifyContent': 'space-between', paddingTop: '0px', paddingLeft: '20px', paddingRight: '20px' }}>
                                    //                         <div>
                                    //                             <Typography className='d-flex'>Price</Typography>
                                    //                         </div>
                                    //                         <div>
                                    //                             <Typography className='d-flex'>${value1.price}.00 USD</Typography>
                                    //                         </div>
                                    //                     </CardActions>
                                    //                 </Card>
                                    //             </div> : ''
                                    //         }
                                    //     </>

                                    // })
                                }
                            </div> : <div className='row'>
                                {
                                    filteredMarketPlaceData?.slice(0, loadMoreIndex)?.map((data, index) => {
                                        // filterseconddata == true && filterfirstdata == true && filterthirddata == true ? marketPlaceData?.data?.map((data, index) => {
                                        return <div className={cardwidth + ' mb-3'} key={index}>
                                            <Card sx={{ width: '100%', border: '1px solid #383E55', backgroundColor: 'transparent' }} className={data.price == 1500 ? "maxcard" : ""}>
                                                <CardContent className='p-0'>
                                                    <div style={{ 'position': 'relative', 'paddingTop': '30px', 'paddingLeft': '30px', 'paddingRight': '30px', cursor: "pointer" }} onClick={() => window.location.href = `${process.env.REACT_APP_MINT_STORE_URL}/public/nft/${process.env.REACT_APP_MINT_CONTRACTADDRESS}/Pickem/${data.nft.itemFID}`} >
                                                        <video key={data.nft.videoURL + new Date().getTime()} className='"card-image1"' style={{ 'width': '100%' }} autoPlay muted loop playsInline>
                                                            <source src={data.nft.videoURL} type="video/mp4"></source>
                                                        </video>
                                                        <img src={gridimage} alt='png' style={{ 'display': 'block', 'position': 'absolute', 'bottom': '0px', 'width': '100%', 'left': '0px' }} />
                                                    </div>
                                                    <Typography variant='h6' sx={{ padding: '0px 20px' }} className='text-white mt-4' gutterBottom>
                                                        {data.nft.name}&nbsp;{String(data.nft.itemFID).padStart(5, '0')}
                                                    </Typography>
                                                    <Typography variant='headerTitle2' sx={{ fontSize: "12px", lineHeight: '16px', padding: '0px 20px', color: "rgba(255, 255, 255)!important", fontWeight: 400 }} className={data.price == 1500 ? "maxcardtitle" : "text-white"} gutterBottom>
                                                        {/* {data.description} Game Streak */}
                                                        {data?.nft?.attributes.streak} &nbsp; Game Streak
                                                    </Typography>

                                                </CardContent>
                                                <hr />
                                                <CardActions style={{ 'display': 'flex', 'justifyContent': 'space-between', paddingTop: '0px', paddingLeft: '20px', paddingRight: '20px' }} >


                                                    <div>
                                                        <Typography variant='headerTitle2' sx={{ fontSize: "12px", lineHeight: '16px', color: "rgba(255, 255, 255)!important", fontWeight: 400 }} className='d-flex'>Price</Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant='headerTitle2' sx={{ fontSize: "12px", fontFamily: 'Titling Gothic FB Narrow', lineHeight: '16px', color: "#FFFFFF !important", fontWeight: 450 }} className='d-flex'>${data.price} USD</Typography>
                                                    </div>

                                                </CardActions>
                                                <CardActions style={{ 'display': 'flex', flexDirection: "column", 'justifyContent': 'center', paddingTop: '0px', paddingLeft: '20px', paddingRight: '20px' }}>
                                                    {

                                                        isSignedIn() && user.addr === data.flowAddress ?
                                                            <Button
                                                                sx={{
                                                                    height: "30px",
                                                                    width: { xs: 0.5, sm: 100, md: 150, lg: 200 },
                                                                    color: "white",
                                                                    fontFamily: "Titling Gothic FB Narrow",
                                                                    fontWeight: 400,
                                                                    fontSize: "14px",
                                                                    minWidth: '220px',
                                                                    lineHeight: "16px"
                                                                }}
                                                                onClick={() => window.location.href = `${process.env.REACT_APP_MINT_STORE_URL}/public/nft/${process.env.REACT_APP_MINT_CONTRACTADDRESS}/Pickem/${data.nft.itemFID}`}
                                                                // size="large"
                                                                // variant="outlined"
                                                                variant="outlined"
                                                                size="small"
                                                                style={{ background: dark.common.white, color: dark.common.black, 'border': '1px solid #181853', letterSpacing: "0.14em" }}
                                                            >
                                                                REMOVE FROM SALE
                                                            </Button>
                                                            :
                                                            <Button
                                                                sx={{
                                                                    height: "30px",
                                                                    width: [0.5, 100, 280],
                                                                    color: "white",
                                                                    fontFamily: "Titling Gothic FB Narrow",
                                                                    fontWeight: 400,
                                                                    fontSize: "14px",
                                                                    lineHeight: "16px"
                                                                }}
                                                                onClick={() => window.location.href = `${process.env.REACT_APP_MINT_STORE_URL}/public/nft/${process.env.REACT_APP_MINT_CONTRACTADDRESS}/Pickem/${data.nft.itemFID}`}
                                                                // size="large"
                                                                // variant="outlined"
                                                                variant="outlined"
                                                                size="small"
                                                                style={{ 'background': 'linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)', letterSpacing: "0.14em", 'border': '1px solid #181853' }}
                                                            >
                                                                BUY NOW
                                                            </Button>


                                                    }

                                                </CardActions>
                                            </Card>
                                        </div>
                                    })
                                    // : carddatas.map((value1, index) => {
                                    //     <Card sx={{ width: '100%', border: '1px solid #383E55' }} className={value1.price == 1500 ? "maxcard" : ""}>
                                    //         <CardContent className='p-0'>
                                    //             <div style={{ 'position': 'relative', 'paddingTop': '30px', 'paddingLeft': '30px', 'paddingRight': '30px' }}>
                                    //                 <video className="card-image1" style={{ 'width': '100%' }} autoPlay muted loop playsInline>
                                    //                     <source src={'value1.url'} type="video/mp4"></source>
                                    //                 </video>
                                    //                 <img src={gridimage} alt='png' style={{ 'display': 'block', 'position': 'absolute', 'bottom': '0px', 'width': '100%', 'left': '0px' }} />
                                    //             </div>
                                    //             <Typography sx={{ fontSize: '20px', lineHeight: '28px', padding: '0px 20px' }} className='text-white mt-4' color="text.secondary" gutterBottom>
                                    //                 {value1.title}<br />{value1.number}
                                    //             </Typography>
                                    //             <Typography sx={{ fontSize: 12, lineHeight: '16px', padding: '0px 20px' }} className={value1.price == 1500 ? "maxcardtitle" : "text-white"} color="text.secondary" gutterBottom>
                                    //                 {value1.description} Game Streak
                                    //             </Typography>

                                    //         </CardContent>
                                    //         <hr />
                                    //         <CardActions style={{ 'display': 'flex', 'justifyContent': 'space-between', paddingTop: '0px', paddingLeft: '20px', paddingRight: '20px' }}>
                                    //             <div>
                                    //                 <Typography className='d-flex'>Price</Typography>
                                    //             </div>
                                    //             <div>
                                    //                 <Typography className='d-flex'>${value1.price}.00 USD</Typography>
                                    //             </div>
                                    //         </CardActions>
                                    //     </Card>
                                    // })
                                }
                            </div>
                        }

                    </div>
                </div>
            </div>
            {
                // carddatas.length > 9 ? <div className='row text-center my-5'>
                filteredMarketPlaceData?.slice(0, loadMoreIndex).length !== response?.total ? <div className='row text-center my-5'>
                    <button className='text-white m-auto py-2'
                        onClick={onChangeMorebutton}
                        style={{ 'backgroundColor': 'transparent', 'border': '1px solid #383E55', 'borderRadius': '48px', "maxWidth": '150px' }} >LOAD MORE</button>
                </div> : ''
            }

            <Footer />
        </React.Fragment >
    )
}
export default Marketplace;