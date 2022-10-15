/* eslint-disable react/react-in-jsx-scope */
import ravensLogo from "../../images/myNftDetails/Baltimore-Ravens.svg";
import broncosLogo from "../../images/myNftDetails/Denver-Broncos.svg";
import PatriotsLogo from "../../images/myNftDetails/New-England-Patriots.svg";
import VikingsLogo from "../../images/myNftDetails/Minnesota-Vikings.svg";
import buffalloLogo from "../../images/myNftDetails/Buffalo-Bills.svg";
import { RightLogo } from "assets/Icons";
import BallLogo from "../../images/myNftDetails/Team-Container.svg";
import RavensFaddedLogo from "../../images/myNftDetails/Baltimore-Ravens-fadded.svg";
import CincinnatiLogo from "../../images/myNftDetails/Cincinnati-Bengals.svg";
import ClevelandLogo from "../../images/myNftDetails/Cleveland-Browns.svg";
import Pittsburgh from "../../images/myNftDetails/Pittsburgh-Steelers.svg";
import MiamiDolphinsLogo from "../../images/myNftDetails/Miami-Dolphins.svg";
import BuffaloFaddedLogo from "../../images/myNftDetails/Buffalo-Bills-Fadded.svg";
import NewInglandFadded from "../../images/myNftDetails/New-England-Patriots-Fadded.svg";
import NewYorkJetsLogo from "../../images/myNftDetails/New-York-Jets.svg";
import HoustonLogo from "../../images/myNftDetails/Houston-Texans.svg";
import IndianapolisLogo from "../../images/myNftDetails/Indianapolis-Colts.svg";
import JacksonvilleLogo from "../../images/myNftDetails/Jacksonville-Jaguars.svg";
import TennesseeLogo from "../../images/myNftDetails/Tennessee-Titans.svg";
import DenverLogo from "../../images/myNftDetails/Denver-Broncos-Fadded.svg";
import KansasLogo from "../../images/myNftDetails/Kansas-City-Chiefs.svg";
import LasvegasRaidersLogo from "../../images/myNftDetails/Las-Vegas-Raiders.svg";
import LosAngelesChargersLogo from "../../images/myNftDetails/Los-Angeles-Chargers.svg";
import DellasCowboysLogo from "../../images/myNftDetails/Dallas-Cowboys.svg";
import NewYorkGiantsLogo from "../../images/myNftDetails/New-York-Giants.svg";
import PhiladelphiaEaglesLogo from "../../images/myNftDetails/Philadelphia-Eagles.svg";
import WashingtonCommandersLogo from "../../images/myNftDetails/Washington-Commanders.svg";
import ChocagoBearsLogo from "../../images/myNftDetails/Chicago-Bears.svg";
import DetroitLionsLogo from "../../images/myNftDetails/Detroit-Lions.svg";
import GreenBayPackersLogo from "../../images/myNftDetails/Green-Bay-Packers.svg";
import MinnesotaVikingsFaddedLogo from "../../images/myNftDetails/Minnesota-Vikings-Fadded.svg";
import AtlantaFalconsLogo from "../../images/myNftDetails/Atlanta-Falcons.svg";
import CarolinaPanthersLogo from "../../images/myNftDetails/Carolina-Panthers.svg";
import NewOrleansSaintsLogo from "../../images/myNftDetails/New-Orleans-Saints.svg";
import ArizonaCardinalsLogo from "../../images/myNftDetails/Arizona-Cardinals.svg";
import LosAngelesRamsLogo from "../../images/myNftDetails/Los-Angeles-Rams.svg";
import SanFranssiscoLogo from "../../images/myNftDetails/San-Francisco-49ers.svg";
import SeattleSeahawksLogo from "../../images/myNftDetails/Seattle-Seahawks.svg";
import TampaBayLogo from "../../images/myNftDetails/Tampa-Bay-Buccaneers.svg";
export const Data = [
  // {
  //   id: 1,
  //   header: "Average Sale Price: [$0.00]",
  //   subHeader:
  //     "Once your NFT is listed on the marketplace, it can’t be unlisted. This will lock your winning streak at # games",
  //   button: "List for Sale",
  // },
  // {
  //   id: 2,
  //   header: "Redeem: [Prize Here]",
  //   subHeader:
  //     "This will end your pick ‘em streak. You will receive your prize and your NFT will be frozen.",
  //   button: "Redeem Prize",
  // },
  // {
  //   id: 3,
  //   header: "Bench",
  //   subHeader:
  //     "This will end your pick ‘em game. A benched NFT can still be listed on the marketplace or redeemed for a prize.",
  //   button: "Stop Playing",
  // },
];

export const SelectedTeams = [
  {
    id: 5,
    week: "Week 5",
    name: "Buffallo Bills",
    logo: buffalloLogo,
    logo2: <RightLogo />,
  },
  {
    id: 6,
    week: "Week 6",
    name: "New Minnesota Vikings",
    logo: VikingsLogo,
    logo2: <RightLogo />,
  },

  {
    id: 7,
    week: "Week 7",
    name: "New England Patriots",
    logo: PatriotsLogo,
    logo2: <RightLogo />,
  },
  {
    id: 8,
    week: "Week 8",
    name: "Denver Broncos",
    logo: broncosLogo,
    logo2: <RightLogo />,
  },
  {
    id: 9,
    week: "Week 9",
    name: "Baltimore Ravens",
    logo: ravensLogo,
    logo2: <RightLogo />,
  },
  {
    id: 10,
    week: "Week 10",
    name: "Select a team",
    logo: BallLogo,
  },
].reverse();

export const AvailableTeams = [
  {
    id: 566,
    name: "AFC EAST",
    value: [
      {
        id: 112554,
        valueName: "Buffalo Bills",
        selectedValue: "Selected Week 5",
        dissable: true,
        logo: BuffaloFaddedLogo,
      },
      {
        id: 100604,
        valueName: "Miami Dolphins",
        logo: MiamiDolphinsLogo,
      },
      {
        id: 119172,
        valueName: "New England Patriots",
        selectedValue: "Selected Week 7",
        dissable: true,
        logo: NewInglandFadded,
      },
      {
        id: 119885,
        valueName: "New York Jets",
        logo: NewYorkJetsLogo,
      },
    ],
  },

  {
    id: 567,
    name: "AFC NORTH",
    value: [
      {
        id: 93331,
        valueName: "Baltimore Ravens",
        selectedValue: "Selected Week 9",
        dissable: true,
        logo: RavensFaddedLogo,
      },
      {
        id: 102450,
        valueName: "Cincinnati Bengals",
        logo: CincinnatiLogo,
      },
      {
        id: 102649,
        valueName: "Cleveland Browns",
        logo: ClevelandLogo,
      },
      {
        id: 89402,
        valueName: "Pittsburgh Steelers",
        logo: Pittsburgh,
      },
    ],
  },

  {
    id: 568,
    name: "AFC SOUTH",
    value: [
      {
        id: 104405,
        valueName: "Houston Texans",
        logo: HoustonLogo,
      },
      {
        id: 105059,
        valueName: "Indianapolis Colts",
        logo: IndianapolisLogo,
      },
      {
        id: 84868,
        valueName: "Jacksonville Jaguars",
        logo: JacksonvilleLogo,
      },
      {
        id: 121182,
        valueName: "Tennessee Titans",
        logo: TennesseeLogo,
      },
    ],
  },
  {
    id: 569,
    name: "AFC WEST",
    value: [
      {
        id: 82865,
        valueName: "Denver Broncos",
        selectedValue: "Selected Week 8",
        dissable: true,
        logo: DenverLogo,
      },
      {
        id: 86068,
        valueName: "Kansas City Chiefs",
        logo: KansasLogo,
      },
      {
        id: 119948,
        valueName: "Las Vegas Raiders",
        logo: LasvegasRaidersLogo,
      },
      {
        id: 106518,
        valueName: "Los Angeles Chargers",
        logo: LosAngelesChargersLogo,
      },
    ],
  },
  {
    id: 570,
    name: "NFC EAST",
    value: [
      {
        id: 96760,
        valueName: "Dallas Cowboys",
        logo: DellasCowboysLogo,
      },
      {
        id: 119884,
        valueName: "New York Giants",
        logo: NewYorkGiantsLogo,
      },
      {
        id: 89169,
        valueName: "Philadelphia Eagles",
        logo: PhiladelphiaEaglesLogo,
      },
      {
        id: 109493,
        valueName: "Washington Commanders",
        logo: WashingtonCommandersLogo,
      },
    ],
  },
  {
    id: 571,
    name: "NFC NORTH",
    value: [
      {
        id: 102222,
        valueName: "Chicago Bears",
        logo: ChocagoBearsLogo,
      },
      {
        id: 82959,
        valueName: "Detroit Lions",
        logo: DetroitLionsLogo,
      },
      {
        id: 115649,
        valueName: "Green Bay Packers",
        logo: GreenBayPackersLogo,
      },
      {
        id: 86237,
        valueName: "Minnesota Vikings",
        selectedValue: "Selected Week 6",
        dissable: true,
        logo: MinnesotaVikingsFaddedLogo,
      },
    ],
  },
  {
    id: 572,
    name: "NFC SOUTH",
    value: [
      {
        id: 112016,
        valueName: "Atlanta Falcons",
        logo: AtlantaFalconsLogo,
      },
      {
        id: 113372,
        valueName: "Carolina Panthers",
        logo: CarolinaPanthersLogo,
      },
      {
        id: 119191,
        valueName: "New Orleans Saints",
        logo: NewOrleansSaintsLogo,
      },
      {
        id: 92305,
        valueName: "Tampa Bay Buccaneers",
        logo: TampaBayLogo,
      },
    ],
  },
  {
    id: 573,
    name: "NFC WEST",
    value: [
      {
        id: 111701,
        valueName: "Arizona Cardinals",
        logo: ArizonaCardinalsLogo,
      },
      {
        id: 107844,
        valueName: "Los Angeles Rams",
        logo: LosAngelesRamsLogo,
      },
      {
        id: 106530,
        valueName: "San Francisco 49ers",
        logo: SanFranssiscoLogo,
      },
      {
        id: 90401,
        valueName: "Seattle Seahawks",
        logo: SeattleSeahawksLogo,
      },
    ],
  },
];
