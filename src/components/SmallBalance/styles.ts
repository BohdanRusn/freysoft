import { makeStyles } from "@mui/styles";
import theme from "../../theme";

export const useStyles = makeStyles((customTheme: typeof theme) => ({
  amountBox: {
    display: "flex",
    alignItems: "center",
    marginLeft: -6,
    "& .MuiTypography-root": {
      fontWeight: 700,
      fontSize: 25,
      color: "#fff",
    },
  },
  mainBoxPurple: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: customTheme.palette.secondary.dark,
    width: 165,
    height: 165,
    borderRadius: "8px 8px 0 0",
    flexDirection: "column",
    color: "#fff",
  },
  mainBoxOrange: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: customTheme.palette.primary.main,
    width: 165,
    height: 165,
    borderRadius: "8px 8px 0 0",
    flexDirection: "column",
    color: "#fff",
  },
  moneyIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: 30,
      fontWeight: 700,
    },
  },
  account: {
    height: "50px",
    width: "100%",
    borderRadius: "10px 10px 0 0",
    backgroundColor: "#FAFAFA",
    display: "flex",
    padding: "10px 18px",
    alignItems: "center",
    gap: "5px",
  },
  bankAccount: {
    "&.MuiTypography-root": {
      color: "black",
      fontSize: "13px",
      lineHeight: "13px",
    },
  },
  bankNumber: {
    "&.MuiTypography-root": {
      color: "black",
      fontSize: "12px",
      lineHeight: "12px",
    },
  },
  cardIconPurple: {
    color: `${customTheme.palette.secondary.dark}50`,
    "&.MuiSvgIcon-root": {
      fontSize: 30,
      fontWeight: 700,
    },
  },
  cardIconOrange: {
    color: `${customTheme.palette.primary.main}50`,
    "&.MuiSvgIcon-root": {
      fontSize: 30,
      fontWeight: 700,
    },
  },
}));
