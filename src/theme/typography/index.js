export const font = {
  compressed: {
    fontFamily: "Titling Gothic FB Compressed",
  },
  display: {
    fontFamily: "neue-haas-grotesk-display",
  },
  text: {
    fontFamily: "neue-haas-grotesk-text",
  },
  narrow: {
    fontFamily: "Titling Gothic FB Narrow",
  },
  neuePro: {
    fontFamily: "Neue Haas Grotesk Text Pro",
  },
  neueProMedium: {
    fontFamily: "Neue Haas Grotesk Text Pro meduim,",
  },
  neueProRoman: {
    fontFamily: "Neue Haas Grotesk Text Pro roman",
  },
};

const typography = {
  h1: {
    fontFamily: font.compressed.fontFamily,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "80px",
    lineHeight: "80px",
  },
  h2: {
    fontFamily: font.compressed.fontFamily,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "64px",
    lineHeight: "64px",
  },
  h3: {
    fontFamily: font.compressed.fontFamily,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "48px !important",
    lineHeight: "56px !important",
  },
  heading3: {
    fontFamily: font.compressed.fontFamily,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "36px !important",
    lineHeight: "44px !important",
  },
  h4: {
    fontFamily: font.compressed.fontFamily,
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "36px",
    lineHeight: "44px",
  },
  h5: {
    fontFamily: font.compressed.fontFamily,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "30px",
    lineHeight: "40px",
  },
  h6: {
    fontFamily: font.compressed.fontFamily,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "28px",
  },
  h7:{
    fontFamily: font.narrow.fontFamily,
    fontStyle: "normal",
    fontWeight: "450",
    fontSize: "16px",
    lineHeight: "24px",
  },
  h8:{
    fontFamily: font.compressed.fontFamily,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",
  },
  h9:{
    fontFamily: font.narrow.fontFamily,
    fontStyle: "normal",
    fontWeight: "450",
    fontSize: "12px",
    lineHeight: "16px",
    color:"#bfccf1"
  },

  body: {
    fontFamily: font.neuePro.fontFamily,
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "28px",
  },
  body2: {
    fontFamily: "Neue Haas Grotesk Text Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
  },
  body3: {
    fontFamily: font.neuePro.fontFamily,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "0.01em",
    // color: "#FFFFFF",
  },
  body4:{
    fontFamily: "Neue Haas Grotesk Text Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "28px",
  },
  action: {
    h7: {
      fontFamily: "Titling Gothic FB Compressed",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "28px",
      letterSpacing: "0.01em",
      // color: "#FFFFFF",
    },

    hover: "#3DAAF2",
  },
  p: {
    fontFamily: font.neuePro.fontFamily,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#FFFFFF",
  },
  p2: {
    fontFamily: font.neuePro.fontFamily,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "28px",
    color: "#FFFFFF",
  },
  para2: {
    fontFamily: font.neuePro.fontFamily,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#FFFFFF",
  },
  p3: {
    fontFamily: font.neuePro.fontFamily,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#030A2B",
  },

  headerTitle: {
    fontFamily: font.narrow.fontFamily,
    fontStyle: "normal",
    fontWeight: "450",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#FFFFFF",
  },
  headerTitle2:{
    fontFamily: font.neuePro.fontFamily,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#FFFFFF",
  }
};

export default typography;
