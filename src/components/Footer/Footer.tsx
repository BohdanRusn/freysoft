import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Divider } from "@mui/material";
import StyledFooter from "./components/StyledFooter";

function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <Divider />
      <Box>
        <HomeIcon
          fontSize="large"
          onClick={() => navigate("/")}
          sx={{
            color: (theme) => (pathname === "/" ? theme.palette.action.active : "inherit"),
          }}
        />
        <CreditCardIcon
          fontSize="large"
          onClick={() => navigate("/expenses")}
          sx={{
            color: (theme) => (pathname === "/expenses" ? theme.palette.action.active : "inherit"),
          }}
        />
        <AddCircleOutlinedIcon sx={{ width: 50, height: 50 }} color="action" />
        <CalendarTodayIcon
          sx={{
            color: (theme) => theme.palette.action.disabled,
          }}
          fontSize="large"
        />
        <SettingsOutlinedIcon
          sx={{
            color: (theme) => theme.palette.action.disabled,
          }}
          fontSize="large"
        />
      </Box>
    </StyledFooter>
  );
}

export default Footer;
