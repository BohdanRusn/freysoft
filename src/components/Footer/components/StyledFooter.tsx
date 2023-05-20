import { styled } from "@mui/material";

const StyledFooter = styled("footer")({
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  height: 90,
  "& div": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    "& > *": {
      cursor: "pointer",
    },
  },
});

export default StyledFooter;
