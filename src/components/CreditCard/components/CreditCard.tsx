import React from "react";
import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useStyles } from "./styles";

function CreditCard() {
  const styles = useStyles();
  return (
    <Box className={styles.creditCard}>
      <Box>
        <Typography>Total Balance</Typography>
      </Box>
      <Box className={styles.amountBox}>
        <AttachMoneyIcon className={styles.moneyIcon} />
        <Typography>76,22.00</Typography>
      </Box>
    </Box>
  );
}

export default CreditCard;
