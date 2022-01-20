import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import ImageIcon from "@mui/icons-material/Image";

import DeleteListModal from "./modals/DeleteListModal";
import UpdateListModal from "./modals/UpdateListModal";
import CreateImageModal from "./modals/CreateImageModal";

import { removeList, updateList } from "../redux/slices/lists";

import useToast from "../hooks/useToast";

import html2canvas from "html2canvas";
import download from "downloadjs";

const ListsNav = ({ list }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteListOpen, setDeleteListOpen] = useState(false);
  const [updateListOpen, setUpdateListOpen] = useState(false);
  const [createImgOpen, setCreateImgOpen] = useState(false);

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

  const handleOnCreateImgClick = () => {
    closeMenu();
    setCreateImgOpen(true);
  };

  const handleOnCreateImg = async (format, nodeRef) => {
    setCreateImgOpen(false);

    try {
      const imageType = `image/${format}`;
      const fileName = `${list.id}.${format}`;
      const canvas = await html2canvas(nodeRef);

      download(canvas.toDataURL(imageType), fileName);
      toast.success("Imagen generada con exito!");
    } catch (err) {
      toast.error("Ha ocurrido un error");
      console.log(err);
    }
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
            {list.name.toUpperCase()}
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
              <MenuItem onClick={handleOnCreateImgClick}>
                <ListItemIcon>
                  <ImageIcon />
                </ListItemIcon>
                Generar imagen
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
      <CreateImageModal
        open={createImgOpen}
        onCancel={() => setCreateImgOpen(false)}
        onSubmit={handleOnCreateImg}
        list={list}
      />
    </>
  );
};

export default ListsNav;
