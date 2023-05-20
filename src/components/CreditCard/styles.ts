import { makeStyles } from "@mui/styles";
import theme from "../../theme";

export const useStyles = makeStyles((customTheme: typeof theme) => ({
  secondaryBox: {
    backgroundColor: customTheme.palette.secondary.dark,
    height: 149,
    borderRadius: 24,
    margin: "auto",
    width: "80%",
  },
}));
