import dark from "../palette/dark";

const muiButtonVariantsDark = (theme) => [
  {
    props: { variant: "contained" },
    style: {
      background:
        "linear-gradient(248.6deg, #3DAAF2 0%, #0032C7 57.55%, #001C71 100%)",
      borderRadius: "48px",
      color: dark.common.white,
      "&.Mui-disabled": {
        color: dark.text.primary,
      },
      fontFamily:"Titling Gothic FB Narrow",
      fontSize:"16px"
    },
  },
  {
    props: { variant: "contained", size: "small" },
    style: {
      minWidth: "81px",
      height: "24px",
    },
  },
  {
    props: { variant: "contained", size: "medium" },
    style: {
      minWidth: "88px",
      height: "32px",
    },
  },
  {
    props: { variant: "contained", size: "large" },
    style: {
      fontFamily: "Titling Gothic FB Narrow",
      minWidth: "200px",
      height: "48px",
      fontSize: "16px",

      [theme.breakpoints.down("md")]: {
        minWidth: "100px",
        height: "48px",
        fontSize: "12px",
      },
    },
  },
  {
    props: { variant: "outlined" },
    style: {
      fontFamily:"Titling Gothic FB Narrow",
      border: "1px solid linear-gradient(270deg, #3DAAF2 0%, #0032C7 100%)",
      borderRadius: "48px",
      "&.Mui-disabled": {
        color: dark.text.primary,
        border: `1px solid ${dark.text.primary}`,
      },
    },
  },
  {
    props: { color: "success" },
    style: {
      border: `1px solid ${dark.success.main}`,
    },
  },
  {
    props: { color: "error" },
    style: {
      border: `1px solid ${dark.error.main}`,
    },
  },
  {
    props: { variant: "outlined", size: "small" },
    style: {
      minWidth: "81px",
      height: "24px",
    },
  },
  {
    props: { variant: "outlined", size: "medium" },
    style: {
      minWidth: "88px",
      height: "32px",
    },
  },
  {
    props: { variant: "outlined", size: "large" },
    style: {
      fontFamily:"Titling Gothic FB Narrow",
      minWidth: "200px",
      height: "48px",
      fontSize: "16px",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: "100px",
      height: "48px",
      fontSize: "16px",
    },
  },
  {
    props: { variant: "text" },
    style: {
      color: dark.text.primary,
      borderRadius: "4px",
      "&:hover": {
        color: dark.text.secondary,
      },
      // "&.Mui-disabled": {
      //   color: dark.text.primary,
      // },
    },
  },
  {
    props: { variant: "text", size: "small" },
    style: {
      minWidth: "81px",
      height: "24px",
    },
  },
  {
    props: { variant: "text", size: "medium" },
    style: {
      minWidth: "88px",
      height: "32px",
    },
  },
  {
    props: { variant: "text", size: "large" },
    style: {
      minWidth: "92px",
      height: "40px",
    },
  },
];

export default muiButtonVariantsDark;
