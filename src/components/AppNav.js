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
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import logoSrc from "../logo.svg";

import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import useToast from "../hooks/useToast";

import { logout } from "../redux/slices/auth";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const AppNav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const toast = useToast();

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const closeMenu = () => setAnchorEl(null);

  const handleLoginClick = () => {
    closeMenu();
    navigate("/login", { state: { pageName: "Iniciar sesion" } });
  };

  const handleConfigurationClick = () => {
    closeMenu();
    navigate("/configuration", { state: { pageName: "Configuracion" } });
  };

  const handleAboutClick = () => {
    closeMenu();
    navigate("/about", { state: { pageName: "Acerca de" } });
  };

  const handleLogoutClick = () => {
    closeMenu();
    dispatch(logout());
    navigate("/", { state: { pageName: "Mis listas" } });
    toast.info("Se ha cerrado la sesion");
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
            {location.state?.pageName || "Mis listas"}
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
              {!auth.user && (
                <MenuItem onClick={handleLoginClick}>
                  <ListItemIcon>
                    <PersonIcon color="inherit" />
                  </ListItemIcon>
                  Login
                </MenuItem>
              )}
              <MenuItem onClick={handleConfigurationClick}>
                <ListItemIcon>
                  <SettingsIcon color="inherit" />
                </ListItemIcon>
                Configuracion
              </MenuItem>
              <MenuItem onClick={handleAboutClick}>
                <ListItemIcon>
                  <InfoIcon color="inherit" />
                </ListItemIcon>
                Acerca de
              </MenuItem>
              {auth.user && <Divider />}
              {auth.user && (
                <MenuItem onClick={handleLogoutClick}>
                  <ListItemIcon>
                    <PersonOutlineIcon color="inherit" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default AppNav;
