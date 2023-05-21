import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./styles";
import CreditCard from "./components/CreditCard";

function CreditCardComponent() {
  const styles = useStyles();
  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "80px",
      }}
    >
      <Box className={styles.secondaryBox}>
        <CreditCard />
      </Box>
    </Box>
  );
}

export default CreditCardComponent;
