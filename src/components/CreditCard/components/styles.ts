import { makeStyles } from "@mui/styles";
import theme from "../../../theme";

export const useStyles = makeStyles((customTheme: typeof theme) => ({
  amountBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
  moneyIcon: {
    color: "green",
    fontSize: 26,
  },
  creditCard: {
    height: 180,
    backgroundColor: customTheme.palette.primary.dark,
    borderRadius: 24,
    padding: "23px 30px",
    color: "#fff",
    position: "absolute",
    width: "100%",
    top: 20,
    left: 0,
  },
}));
