import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
{/*import ExpandMoreIcon from '@mui/icons-material/ExpandMore';*}/
{/*import PlusOne from '@mui/icons-material/PlusOne';*/}

const faqitemslist = [
  {
    title: "What is the Collection?",
    content: `Introducing “Bud Light x NFL Ultimate Fandom,” the newest NFT collaboration that will give diehard fans the opportunity to immerse themselves and interact with the Bud Light and the NFL ecosystem like never before.`,
    content2: `Each collectible is designed to replicate Bud Light’s limited-edition NFL packaging across all 32 teams in a digital world. By holding one of the “Bud Light x NFL Ultimate Fandom” digital collectibles, you’ll unlock entry into a Survivor Pick ‘Em tournament where fans can compete for a chance to win a number of prizes.`,
    id: 'panel1'
  },
  {
    title: "Why are Bud Light and NFL launching an NFT Collection? ",
    content: `NFTs are changing the way we interact and engage with the world around us, including the sports industry. “Bud Light x NFL Ultimate Fandom” reimagines how fans can interact with each other and get one step closer to their favorite NFL teams. With its unique utility and Survivor Pick ‘Em game, the program allows fans to experience football unlike ever before.  `,
    content2: ``,
    id: 'panel2'
  },
  {
    title: 'What are NFTs? ',
    content: "Non-Fungible Tokens (NFTs) are unique digital assets that are secured and contained on a blockchain. The blockchain verifies ownership, provenance, and transaction history. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across an entire network of computer systems. ",
    content2: ``,
    id: 'panel3'
  },
  {
    title: 'What is “minting”?',
    content: `NFTs are created through a process called minting, which creates a unique identifier that proves ownership of that specific digital asset on a blockchain. Minting is effectively the process of adding another block of information on a blockchain. `,
    content2: ``,
    id: 'panel4'
  },
  {
    title: "What is a Dapper Wallet and why do I need one? ",
    content: `You will need a Dapper wallet, which is compatible with the Flow blockchain, to access your digital Team Cans. Your ownership of your Team Cans, and any potential future transactions involving your Team Cans, will be recorded on the Flow blockchain. `,
    content2: ``,
    id: 'panel5'
  },
  {
    title: 'How do I connect my Dapper Wallet? ',
    content: `Connecting your wallet is simple. When purchasing an NFT or signing in to play the game, you'll be prompted to 'connect your wallet'. If you have a Dapper Wallet you can enter your wallet username and password, and can get started. If you haven't set up a Dapper Wallet already you'll be taken through the steps to create a Dapper Wallet account - which only requires an email and password. `,
    content2: ``,
    id: 'panel6'
  },
  {
    title: 'How can I buy the Bud Light x NFL Ultimate Fandom NFT? ',
    content: `NFTs can be purchased directly through this website with a credit or debit card  `,
    content2: ``,
    id: 'panel7'
  },
  {
    title: 'Are the NFTs available to buy from my country? ',
    content: `Sales are only available within the United States. Accessing the site from a VPN may flag you as high-risk and either block your sale or remove you from the site. `,
    content2: ``,
    id: 'panel8'
  },
  {
    title: 'What is the price of the tokens? ',
    content: `Bud Light x NFL Ultimate Fandom tokens will be sold at a flat purchase price of $50, plus tax where applicable.  `,
    content2: ``,
    id: 'panel9'
  },
  {
    title: 'Are there any discounts? ',
    content: `Anheuser-Busch InBev and the NFL can give discounts and hold NFTs at their sole discretion. `,
    content2: ``,
    id: 'panel10'
  },
  {
    title: 'Can NFTs be refunded after purchasing?  ',
    content: `NFT sales are final and returns or refunds will not be offered. Those interested in purchasing from the Bud Light collection should review our terms and conditions at www.ab-inbev.com/nftterms. Purchases made in violation of our terms and conditions are not eligible for a refund.  `,
    content2: ``,
    id: 'panel11'
  },
  {
    title: 'How do I know if the NFT I am purchasing is authentic? ',
    content: `Primary purchase of NFTs from www.fandom.budlight.com and www.budlight.com/nft are legit. The collection will also appear within our marketplace and because it is a closed ecosystem counterfeit NFTs won’t come into play.  `,
    content2: ``,
    id: 'panel12'
  },
  {
    title: 'What can I do with my NFTs? ',
    content: `These NFTs can be collected and used to claim utility as well as for entry into the Pick ’Em game for a chance to win epic prizes. The Bud Light x NFL Ultimate Fandom was created for a 21+ audience and does not include commercial rights. `,
    content2: ``,
    id: 'panel13'
  },
  {
    title: 'When do I need to make picks? ',
    content: `The start of each NFL week begins on Tuesday. You will have from Tuesday 2am ET to Sunday 12:59pm ET to pick a winner from any matchup. If you do not make a pick before 12:59pm ET your NFT you will be eliminated from the game and your NFT will become inactive and you will no longer be eligible for gameplay. `,
    content2: ``,
    id: 'panel14'
  },
  {
    title: 'What happens if I pick incorrectly? ',
    content: `If your chosen team loses or ties, your NFT becomes inactive and you will no longer be eligible for continued gameplay. If you want to re-enter the game, you can buy another digital collectible and build your streaks back up.  `,
    content2: ``,
    id: 'panel15'
  },
  {
    title: 'What you can do with an inactive digital collectible? ',
    content: `If you lose the Pick ‘Em game, your digital collectible will become inactive however make sure to hold onto it as it may be your ticket to the next game and future rewards. `,
    content2: ``,
    id: 'panel16'
  },
  {
    title: 'Do I need to do anything to be entered in the drawings to win the prizes? ',
    content: `No, you will automatically be entered into the prize drawings based on your performance in the Pick ’Em game. You will not need to take any specific steps. `,
    content2: ``,
    id: 'panel17'
  },
  {
    title: 'How will I know if I’ve won a prize? ',
    content: `The email you used at the time of purchase will be used to get in contact with you about any and all prizes that you’ve won, including information on next steps needed for fulfillment, as needed. `,
    content2: ``,
    id: 'panel18'
  },
  {
    title: 'Am I still eligible to win any prizes if I sell my Team Can?',
    content: `The holder of the Team Can at the time of the prize drawing will be eligible to claim any awarded prizes.  If a drawing happens prior to the sale of your Team Can, you can claim any prizes that have been previously awarded, those will not transfer. `,
    content2: ``,
    id: 'panel19'
  },
  {
    title: 'How can I redeem or get access to the Bud Light Team Can utility and perks? ',
    content: `Access to team utility will be communicated over the next few weeks.  Redemption forms will be shared for you to be able to claim your Team Can utility, as needed. `,
    content2: ``,
    id: 'panel20'
  },
  {
    title: 'Why does my Bud Light Team Can look different than most of the other Cans? ',
    content: `Bud Light is not a formal sponsor of the following NFL teams: Packers, Vikings, Bears, Cowboys, Raiders, and Commanders.  Holders of these Team Cans will need to redeem team-specific utility among the list of all other Bud Light sponsored teams. `,
    content2: ``,
    id: 'panel21'
  }
]


export default function Faq() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    console.log(panel)
  };
  return (
    <div className="mb-5">
      {faqitemslist.map((value, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            className="faq-items"
            variant="light"
          >
            <AccordionSummary
              expandIcon={expanded == `panel${index}` ? <MinimizeIcon style={{ 'color': '#0035A5' }} /> : <AddIcon style={{ 'color': '#0035A5' }} />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{
                backgroundColor: "white",
                color: "black",
                padding: "0px",
              }}
            >
              <Typography
                className="title-small"
                style={{
                  fontFamily: "Neue Haas Grotesk Text Pro meduim",
                  fontStyle: "normal",

                  lineHeight: "28px",
                  color: " #1A1A1A",
                }}
              >
                {value.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              root={{ padding: "0px" }}
              sx={{
                backgroundColor: "white",
                color: " #606060",
                padding: "10px 0px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Neue Haas Grotesk Text Pro roman",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: " #606060",
                }}
              >
                <span>{value.content}</span>
                <span><br/>&nbsp;<br/></span>
                <span>{value.content2}</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}