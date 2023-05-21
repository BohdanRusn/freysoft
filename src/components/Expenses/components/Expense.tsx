import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useStyles } from "./styles";

export interface ExpenseProps {
  storeName: string;
  photo: string;
  amount: string;
  budget: string;
  date: Date;
  id: number;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Expense({ storeName, date, amount, photo, budget }: ExpenseProps) {
  const styles = useStyles();
  return (
    <Box className={styles.body}>
      <Box className={styles.header}>
        <Avatar
          alt={storeName}
          src={photo}
          sx={{
            width: 40,
            height: 40,
          }}
        />
        <Box className={styles.transactionInfo}>
          <Box>
            <Typography className={styles.store}>{storeName}</Typography>
            <Typography className={styles.grayText}>Bank Account</Typography>
          </Box>
          <Box className={styles.amountInfo}>
            <Typography className={styles.grayText}>{`${months[date.getMonth()]} ${date.getFullYear()}`}</Typography>
            <Box />
          </Box>
        </Box>
      </Box>
      <Box className={styles.infoBox}>
        <Box className={styles.sectionBox}>
          <Typography>Total Spend</Typography>
          <Typography className={styles.greenText}>${amount}</Typography>
        </Box>
        <Box className={styles.sectionBox}>
          <Typography>Total Budget</Typography>
          <Typography className={styles.budget}>${budget}</Typography>
        </Box>
        <Box className={styles.sectionBox}>
          <Box />
          <Typography className={styles.greenText}>75.78%</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Expense;
