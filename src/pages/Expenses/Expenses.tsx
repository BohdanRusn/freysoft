import { Box } from "@mui/material";
import React from "react";
import SmallBalanceComponent from "../../components/SmallBalance/SmallBalanceComponent";

function Expenses() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
      }}
    >
      <SmallBalanceComponent isPurple />
      <SmallBalanceComponent />
    </Box>
  );
}

export default Expenses;
