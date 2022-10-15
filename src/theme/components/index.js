import muiButtonVariantsdark from "./muiButtonVariantsdark";

const getComponents = (theme) => ({
  MuiButton: {
    variants: muiButtonVariantsdark(theme),
    styleOverrides: {
      root: {
        borderRadius: 4,
        boxShadow: "none",
      },
    },
  },

  // https://mui.com/material-ui/guides/migration-v4/#textfield
  MuiTextField: {
    defaultProps: {
      variant: "standard",
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "hover",
    },
  },

  // https://mui.com/material-ui/guides/migration-v4/#paper
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "unset",
      },
    },
  },
});

export default getComponents;
