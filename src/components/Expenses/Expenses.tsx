import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";
import Expense, { ExpenseProps } from "./components/Expense";
import nikeStore from "../../assets/images/nikestore.jpeg";
import pumaStore from "../../assets/images/pumastore.jpg";

const expenses: ExpenseProps[] = [
  {
    id: 1,
    storeName: "Nike Super Store",
    photo: nikeStore,
    amount: "124.85",
    budget: "1,026",
    date: new Date(),
  },
  {
    id: 2,
    storeName: "Puma",
    photo: pumaStore,
    amount: "597.25",
    budget: "3,502",
    date: new Date(),
  },
];

function Expenses() {
  const styles = useStyles();
  return (
    <Box>
      <Box className={styles.header}>
        <Typography className={styles.expenses}>Expenses</Typography>
        <Typography className={styles.viewAll}>View all</Typography>
      </Box>
      <Box className={styles.expensesList}>
        {expenses.map((el) => (
          <Expense key={el.id} {...el} />
        ))}
      </Box>
      <Box />
    </Box>
  );
}

export default Expenses;
