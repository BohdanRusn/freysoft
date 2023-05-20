import { makeStyles } from "@mui/styles";
import theme from "../../../theme";

export const useStyles = makeStyles({
  body: {
    backgroundColor: "#FAFAFA",
    borderRadius: 8,
    height: 70,
    padding: 10,
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  grayText: {
    "&.MuiTypography-root": {
      color: theme.palette.action.disabled,
      fontSize: 12,
    },
  },
  transactionInfo: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  amountBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
  moneyIcon: {
    color: "#2BB272",
    fontSize: 26,
  },
  moneyAmount: {
    "&.MuiTypography-root": {
      color: "#2BB272",
      fontSize: 18,
      fontWeight: 600,
    },
  },
  store: {
    "&.MuiTypography-root": {
      fontSize: 16,
      fontWeight: 600,
    },
  },
  amountInfo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
});
