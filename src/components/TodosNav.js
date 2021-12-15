import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListsNav = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOnReturn = () => {
    navigate(-1);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => setAnchorEl(null);

  const handleOnEdit = () => {
    closeMenu();
    // open modal
    // display edit list form
    alert(`Edit List ${params.listId}`);
  };

  const handleOnDelete = () => {
    closeMenu();
    // open modal
    // confirm delete action
    alert(`Delete List ${params.listId}`);
  };

  console.log("@@ Todos nav render");
  console.log(state);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={handleOnReturn} color="inherit">
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="label">
            {state?.name || "Task"}
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
              <MenuItem onClick={handleOnEdit}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                Edit
              </MenuItem>
              <MenuItem onClick={handleOnDelete}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                Delete
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default ListsNav;
