import React from "react";

import { Avatar, Badge, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useLocation } from "react-router-dom";
import MyComponent from "./components/StyledBody";

function Header() {
  const { pathname } = useLocation();

  return (
    <MyComponent>
      <Avatar
        alt="Remy Sharp"
        variant="rounded"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
      <Typography sx={{ fontWeight: 600, fontSize: 26 }}>
        {pathname === "/" ? "Home" : "Expenses"}
      </Typography>
      <Badge variant="dot" color="primary">
        <NotificationsNoneOutlinedIcon fontSize="large" color="action" />
      </Badge>
    </MyComponent>
  );
}

export default Header;
