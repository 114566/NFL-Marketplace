
import nft from '../../../assets/image/NFT.png';
import nft1 from '../../../assets/image/NFT1.png';
import nft3 from '../../../assets/image/NFT3.png';
import nft4 from '../../../assets/image/NFT4.png';
import team from '../../../assets/image/Team.svg';
import team1 from '../../../assets/image/Team1.svg';


const data = [
  {
    image: nft,
    status: "ACTIVE",
    header: "NE Patriots 0000",
    content1: "6 Game Streak",
    content2: "Current pick: select before Sun @ 11",
    CurrentPick:false,
    icon:"",
    button: "Pick ‘em",
    button2: "NFT Details"
  },
  {
    image: nft,
    status: "ACTIVE",
    header: "NE Patriots 0000",
    content1: "6 Game Streak: NFL Jersey",
    content2: "Current pick: select before Sun @ 11",
    CurrentPick:false,
    icon:"",
    button: "Pick ‘em",
    button2: "NFT Details"
  },
  {
    image: nft1,
    status: "ACTIVE",
    header: "DEN Broncos 0000",
    content1: "6 Game Streak: NFL Jersey",
    content2: "Current pick:",
    currentPick:true,
    icon:team,
    lock:false,
    button: "Edit Pick",
    button2: "NFT Details"
  },
  {
    image: nft3,
    status: "ACTIVE",
    header: "SF 49ers 0000",
    content1: "6 Game Streak: NFL Jersey",
    content2: "Current pick:",
    currentPick:true,
    icon:team1,
    button: "Picked",
    button2: "NFT Details"
  },
  {
    image: nft1,
    status: "BENCHED",
    header: "DEN Broncos 0000",
    content1: "6 Game Streak: NFL Jersey",
    content2: "",
    currentPick:false,
    icon:'',
    button: "Listing",
    button2: "NFT Details"
  },
  {
    image:nft4,
    status: "RETIRED",
    header: "SF 49ers 0000",
    content1: "Rare NFL All Day",
    content2: "",
    bcontent: "Finished with a 3 game streak",
    currentPick:false,
    icon:"",
    button: "",
  },
  {
    image:nft4,
    status: "LOST",
    header: "SF 49ers 0000",
    content1: "No prize won",
    content2: "",
    bcontent: "Lost in week 6",
    currentPick:false,
    icon:"",
    button: "",
  }
];

export default data;