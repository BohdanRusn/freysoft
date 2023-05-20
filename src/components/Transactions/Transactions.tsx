import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";
import Transaction, { TransactionProps } from "./components/Transaction";
import nikeStore from "../../assets/images/nikestore.jpeg";
import pumaStore from "../../assets/images/pumastore.jpg";

const transactions: TransactionProps[] = [
  {
    storeName: "Nike Super Store",
    photo: nikeStore,
    amount: 124.85,
    date: new Date(),
  },
  {
    storeName: "Puma",
    photo: pumaStore,
    amount: 597.25,
    date: new Date(),
  },
];

function Transactions() {
  const styles = useStyles();
  return (
    <Box>
      <Box className={styles.header}>
        <Typography className={styles.transactions}>Transactions</Typography>
        <Typography className={styles.viewAll}>View all</Typography>
      </Box>
      <Box className={styles.transactionsList}>
        {transactions.map((el) => (
          <Transaction {...el} />
        ))}
      </Box>
      <Box />
    </Box>
  );
}

export default Transactions;
