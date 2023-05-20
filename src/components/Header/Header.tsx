import React from "react";

import { Avatar, Badge, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useLocation } from "react-router-dom";
import StyledHeaderBody from "./components/StyledBody";
import avatar from "../../assets/images/avatar.jpg";

function Header() {
  const { pathname } = useLocation();

  return (
    <StyledHeaderBody>
      <Avatar
        alt="Remy Sharp"
        variant="rounded"
        src={avatar}
        sx={{ width: 50, height: 50 }}
      />
      <Typography sx={{ fontWeight: 600, fontSize: 26 }}>
        {pathname === "/" ? "Home" : "Expenses"}
      </Typography>
      <Badge variant="dot" color="primary">
        <NotificationsNoneOutlinedIcon fontSize="large" />
      </Badge>
    </StyledHeaderBody>
  );
}

export default Header;
