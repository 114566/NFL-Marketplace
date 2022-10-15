import { makeStyles } from "@mui/styles";
import AgeGateBG from "../../../assets/image/ageGate/AgeGateBG.svg";
export const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
  bgImageContainer: {
    backgroundImage: `url(${AgeGateBG})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pageContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    top: "10%",
    position: "absolute",

    // mobile portrait devices
    "@media (max-width: 500px)": {
      top: "10%",
    },

    // mobile landscape devices
    "@media (max-height: 450px)": {
      top: "0 !important",
    },

    // tab portrait devices
    "@media (max-width: 910px)": {
      top: "15%",
    },

    // tab landscape devices
    "@media (max-height: 850px)": {
      top: "10%",
    },
  },
  logo: {
    // mobile landscape devices
    "@media (max-height: 450px)": {
      width: "100px !important",
      height: "100px !important",
    },

    // mobile portrait devices
    "@media (max-width: 500px)": {
      width: "200px !important",
      // height: "100px !important",
    },
  },
  
  headerContainer: {
    top: "40%",
    position: "absolute",

    // mobile portrait devices
    "@media (max-width: 500px)": {
      top: "30% !important",
    },

    // mobile landscape devices
    "@media (max-height: 450px)": {
      top: "28% !important",
    },

    // tab portrait devices
    "@media (max-width: 910px)": {
      top: "35%",
    },

    // tab landscape devices
    "@media (max-height: 850px)": {
      top: "37%",
    },
  },
  textContainer: {
    fontSize: "64px",
    lineHeight: "64px",
    // mobile portrait devices
    "@media (max-width: 500px)": {
      fontSize: "44px !important",
      lineHeight: "44px !important",
    },

    // mobile landscape devices
    "@media (max-height: 450px)": {
      fontSize: "36px !important",
      lineHeight: "36px !important",
    },

  },
  description: {
    top: "55%",
    position: "absolute",

    // mobile portrait devices
    "@media (max-width: 500px)": {
      top: "47% !important",
    },

    // mobile landscape devices
    "@media (max-height: 450px)": {
      top: "44% !important",
    },

    // tab portrait devices
    "@media (max-width: 910px)": {
      top: "50%",
    },

    // tab landscape devices
    "@media (max-height: 850px)": {
      top: "55%",
    },
  },
  errorText: {
    top: "57%",
    position: "absolute",

    // mobile portrait devices
    "@media (max-width: 500px)": {
      top: "52% !important",
    },

    // mobile landscape devices
    "@media (max-height: 450px)": {
      top: "49% !important",
    },

    // tab portrait devices
    "@media (max-width: 910px)": {
      top: "53%",
    },

    // tab landscape devices
    "@media (max-height: 850px)": {
      top: "58%",
    },
  },
  formContainer: {
    top: "60%",
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "@media (max-width: 900px)": {
      display: "unset !important",
      top: "57% !important",
    },
    "@media (max-height: 450px)": {
      top: "53% !important",
    },
    // tab landscape devices
    "@media (max-height: 850px)": {
      top: "62%",
    },
    "@media (max-height: 250px)": {
      top: "30% !important",
    },
  },
  description2: {
    top: "70%",
    position: "absolute",
    "@media (max-width: 500px)": {
      top: "68% !important",
    },
    "@media (max-height: 450px)": {
      top: "68% !important",
    },
    // tab portrait devices
    "@media (max-width: 910px)": {
      top: "70%",
    },
    // tab landscape devices
    "@media (max-height: 850px)": {
      top: "72%",
    },
  },
  description3: {
    top: "75%",
    width: "35%",
    position: "absolute",
    "@media (max-width: 900px)": {
      top: "75% !important",
      width: "95%",
    },
    // tab portrait devices
    "@media (max-width: 910px)": {
      top: "75%",
    },
    // tab landscape devices
    "@media (max-height: 850px)": {
      top: "77%",
    },
  },
}));
