import React from "react";
import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useStyles } from "./styles";

interface SmallBalanceComponentProps {
  isPurple?: boolean;
}

function SmallBalanceComponent({ isPurple = false }: SmallBalanceComponentProps) {
  const styles = useStyles();
  return (
    <Box className={isPurple ? styles.mainBoxPurple : styles.mainBoxOrange}>
      <Box sx={{ padding: "23px", width: "100%" }}>
        <Typography>Total Balance</Typography>
        <Box className={styles.amountBox}>
          <AttachMoneyIcon className={styles.moneyIcon} />
          <Typography sx={{ marginLeft: "-8px" }}>76,22.00</Typography>
        </Box>
      </Box>
      <Box className={styles.account}>
        <CreditCardIcon className={isPurple ? styles.cardIconPurple : styles.cardIconOrange} />
        <Box width={85}>
          <Typography className={styles.bankAccount}>Bank Account</Typography>
          <Typography className={styles.bankNumber}>**** **** 1965</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SmallBalanceComponent;
