import { makeStyles } from "@mui/styles";
import theme from "../../../theme";

export const useStyles = makeStyles((customTheme: typeof theme) => ({
  amountBox: {
    display: "flex",
    alignItems: "center",
    "& .MuiTypography-root": {
      fontWeight: 700,
      fontSize: 30,
    },
  },
  moneyIcon: {
    color: "#2BB272",
    "&.MuiSvgIcon-root": {
      fontSize: 30,
    },
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
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumber: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardInfo: {
    display: "flex",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
