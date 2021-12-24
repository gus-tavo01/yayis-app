import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

import DeleteListModal from "./modals/DeleteListModal";
import UpdateListModal from "./modals/UpdateListModal";

const ListsNav = () => {
  const navigate = useNavigate();
  const { state: list } = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

  const [deleteListOpen, setDeleteListOpen] = useState(false);
  const [updateListOpen, setUpdateListOpen] = useState(false);

  const handleOnReturn = () => {
    navigate(-1);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => setAnchorEl(null);

  const handleOnEditClick = () => {
    closeMenu();
    setUpdateListOpen(true);
  };

  const handleOnUpdate = (listId, update) => {
    setUpdateListOpen(false);

    // TODO
    // dispatch(updateList(listId, update));
    console.log("## will update", listId);
    console.log("With ", update);
  };

  const handleOnDeleteClick = () => {
    closeMenu();
    setDeleteListOpen(true);
  };

  const handleOnDelete = (listId) => {
    setDeleteListOpen(false);

    // TODO
    // dispatch(deleteList(listId));
    console.log("## will delete", listId);
  };

  console.log("@@ Todos nav render");

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={handleOnReturn} color="inherit">
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="label">
            {(list?.name || "Todos").toUpperCase()}
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
              <MenuItem onClick={handleOnEditClick}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                Edit
              </MenuItem>
              <MenuItem onClick={handleOnDeleteClick}>
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
      <DeleteListModal
        open={deleteListOpen}
        onCancel={() => setDeleteListOpen(false)}
        onSubmit={handleOnDelete}
        list={list}
      />
      <UpdateListModal
        open={updateListOpen}
        onCancel={() => setUpdateListOpen(false)}
        onSubmit={handleOnUpdate}
        list={list}
      />
    </>
  );
};

export default ListsNav;
