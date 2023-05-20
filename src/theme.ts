import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF643B",
      dark: "#2F3046",
    },
    action: {
      active: "#FF643B",
      disabled: "#C0C0C0",
    },
    secondary: {
      main: "#19857b",
      dark: "#9A63FB",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
