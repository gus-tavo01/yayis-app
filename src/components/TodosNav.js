import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

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

import { removeList, updateList } from "../redux/slices/lists";

import useToast from "../hooks/useToast";

const ListsNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state: list } = useLocation();
  const [listName, setListName] = useState(list?.name || "List");

  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteListOpen, setDeleteListOpen] = useState(false);
  const [updateListOpen, setUpdateListOpen] = useState(false);

  const toast = useToast();

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
    dispatch(updateList({ id: listId, ...update }));
    setListName(update.name);
    toast.success("Lista actualizada correctamente!");
  };

  const handleOnDeleteClick = () => {
    closeMenu();
    setDeleteListOpen(true);
  };

  const handleOnDelete = (listId) => {
    setDeleteListOpen(false);
    dispatch(removeList(listId));
    navigate("/");
    toast.success("Lista borrada con exito!");
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
            {listName.toUpperCase()}
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
                Editar
              </MenuItem>
              <MenuItem onClick={handleOnDeleteClick}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                Borrar
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
