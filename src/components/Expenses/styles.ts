import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  expenses: {
    "&.MuiTypography-root": {
      fontWeight: 600,
      fontSize: "25px",
    },
  },
  viewAll: {
    "&.MuiTypography-root": {
      color: "#C0C0C0",
    },
  },
  expensesList: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
});
