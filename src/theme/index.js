import { createTheme } from "@mui/material/styles";
import getComponents from "./components";
import dark from "./palette/dark";
import typography from "./typography";

let theme = createTheme();

theme = createTheme({
  palette: dark,
  typography: typography,
  components: getComponents(theme),
});

export default theme;
