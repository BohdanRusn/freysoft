import { makeStyles } from "@mui/styles";

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
    color: "green",
    fontSize: 26,
  },
  moneyAmount: {
    "&.MuiTypography-root": {
      color: "green",
      fontSize: 20,
      fontWeight: 600,
    },
  },
  store: {
    "&.MuiTypography-root": {
      fontSize: 23,
      fontWeight: 600,
    },
  },
  amountInfo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
});
