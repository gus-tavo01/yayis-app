import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";

import logoSrc from "../logo.svg";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const AppNav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const closeMenu = () => setAnchorEl(null);

  const handleConfigurationClick = () => {
    closeMenu();
    navigate("/configuration", { state: { pageName: "Configuration" } });
  };

  const handleAboutClick = () => {
    closeMenu();
    navigate("/about", { state: { pageName: "About" } });
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="label" className={classes.title}>
            <Link className={classes.link} to="/">
              <Avatar src={logoSrc} alt="Todo App" />
            </Link>
          </Typography>
          <Typography variant="h6" component="label">
            {location.state?.pageName || "Lists"}
          </Typography>
          <div>
            <IconButton onClick={handleMenu} color="inherit">
              <MenuOutlinedIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={handleConfigurationClick}>
                <ListItemIcon>
                  <SettingsIcon color="inherit" />
                </ListItemIcon>
                Configuration
              </MenuItem>
              <MenuItem onClick={handleAboutClick}>
                <ListItemIcon>
                  <InfoIcon color="inherit" />
                </ListItemIcon>
                About
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default AppNav;
