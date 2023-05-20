import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useStyles } from "./styles";

export interface TransactionProps {
  storeName: string;
  photo: string;
  amount: number;
  date: Date;
}

function Transaction({ storeName, date, amount, photo }: TransactionProps) {
  const styles = useStyles();
  return (
    <Box className={styles.body}>
      <Avatar alt={storeName} src={photo} sx={{ width: 40, height: 40 }} />
      <Box className={styles.transactionInfo}>
        <Box>
          <Typography className={styles.store}>{storeName}</Typography>
          <Typography className={styles.grayText}>Bank Account</Typography>
        </Box>
        <Box className={styles.amountInfo}>
          <Box className={styles.amountBox}>
            <AttachMoneyIcon className={styles.moneyIcon} />
            <Typography className={styles.moneyAmount}>{amount}</Typography>
          </Box>

          <Typography className={styles.grayText}>{new Date(date).toDateString()}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Transaction;
