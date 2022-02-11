import React, { useState } from "react";
// material
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
// router
import { Link } from "react-router-dom";
// icons
import { AiOutlineMenu } from "react-icons/ai";
// ----------------------------- //
const RootStyle = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.2),
  padding: 10,
  display: "flex",
  alignItems: "center",
}));
const navSession = [
  {
    path: "home",
    title: "Home",
  },
  {
    path: "about",
    title: "About us",
  },
  {
    path: "services",
    title: "Services",
  },
];

const NavItem = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  ":hover": {
    textDecoration: "underline",
  },
}));

function NavbarComponent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <RootStyle>
      <Typography>Portfolio</Typography>

      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        size="small"
        sx={{ display: { sm: "none" } }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AiOutlineMenu />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {navSession.map((e, index) => (
          <MenuItem onClick={handleClose} key={index}>
            {e.title}
          </MenuItem>
        ))}
      </Menu>
      <Box sx={{ display: { sm: "flex", xs: "none" }, gap: 1 }}>
        {navSession.map((e, index) => (
          <NavItem component={Link} to={e.path} key={index}>
            {e.title}
          </NavItem>
        ))}
      </Box>
    </RootStyle>
  );
}

export default NavbarComponent;
