import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const AppNav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <>
      <AppBar position="fixed" sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="label" className={classes.title}>
            <Link className={classes.link} to="/">
              Lists
            </Link>
          </Typography>
          <div>
            <IconButton onClick={handleMenu} color="inherit">
              <MenuOutlinedIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={handleAboutClick}>About</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default AppNav;
