import React from "react";
import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useStyles } from "./styles";
import masterCard from "../../../assets/images/masterCard.png";

function CreditCard() {
  const styles = useStyles();
  return (
    <Box className={styles.creditCard}>
      <Box className={styles.cardHeader}>
        <Typography
          sx={{
            fontSize: "18px",
          }}
        >
          Total Balance
        </Typography>
        <MoreHorizIcon />
      </Box>
      <Box className={styles.cardInfo}>
        <Box className={styles.amountBox}>
          <AttachMoneyIcon className={styles.moneyIcon} />
          <Typography sx={{ marginLeft: "-8px" }}>76,22.00</Typography>
        </Box>
        <Box className={styles.cardNumber}>
          <Typography>2450 8647 9875 1223</Typography>
          <img
            style={{
              height: 40,
            }}
            alt="Master Card Logo"
            src={masterCard}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default CreditCard;
