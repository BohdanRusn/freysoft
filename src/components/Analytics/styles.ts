import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  analytics: {
    "&.MuiTypography-root": {
      fontWeight: 600,
      fontSize: "25px",
    },
  },
});
