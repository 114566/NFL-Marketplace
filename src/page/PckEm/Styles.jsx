import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerContainer: {
    backgroundSize: "100%",
    background: `linear-gradient(248.6deg, #00B5E2 0%, #0032C7 57.55%, #001C71 100%)`,
    height: "315px",
    width: "100%",
    objectFit: "cover",
    position: "relative",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // header container styles

  card: {
    border: "1px solid white",
    borderRadius: "10px",
    width: "42%",
    display: "flex",
    flexDirection: "row",
  },
  card2: {
    height: "222px",
    display: "flex",
    justifyContent: "end",
  },
  firstCol: { height: "100%" },
  nftCardImg: {
    borderRadius: "10px",
    height: "224px",
  },
  secondCol: {},
  thirdCol: {},

  cardContainer: {
    margin: "50px 0"
  },
}));
