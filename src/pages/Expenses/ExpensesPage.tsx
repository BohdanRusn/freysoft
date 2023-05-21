import { Box } from "@mui/material";
import React from "react";
import SmallBalanceComponent from "../../components/SmallBalance/SmallBalanceComponent";
import Expenses from "../../components/Expenses/Expenses";

function ExpensesPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
          paddingBottom: "15px",
        }}
      >
        <SmallBalanceComponent isPurple />
        <SmallBalanceComponent />
      </Box>
      <Expenses />
    </>
  );
}

export default ExpensesPage;
