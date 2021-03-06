import React, { useState } from "react";

import {
  Box,
  Checkbox,
  Typography,
  Menu,
  IconButton,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import UpdateTodoModal from "./modals/UpdateTodoModal";
import ViewTodoModal from "./modals/ViewTodoModal";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(2),
    margin: "8px 4px",
    color: theme.palette.secondary.text,
  },
}));

const TodoItem = ({ id, name, description, isDone, onUpdate, onDelete }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [updateTodoOpen, setUpdateTodoOpen] = useState(false);
  const [viewTodoOpen, setViewTodoOpen] = useState(false);

  const closeMenu = () => setAnchorEl(null);

  const openMenu = (event) => setAnchorEl(event.currentTarget);

  const handleOnUpdateClick = () => {
    closeMenu();
    setUpdateTodoOpen(true);
  };

  const handleOnUpdate = (update) => {
    setUpdateTodoOpen(false);
    onUpdate(id, update);
  };

  const handleOnDeleteClick = () => {
    closeMenu();
    onDelete(id);
  };

  const handleOnCheck = ({ target }) => {
    onUpdate(id, { isDone: target.checked });
  };

  const handleOnClick = () => {
    if (description) setViewTodoOpen(true);
  };

  return (
    <Box className={classes.container}>
      <Checkbox color="default" checked={!!isDone} onChange={handleOnCheck} />
      <Typography color="inherit" onClick={handleOnClick}>
        {name}
      </Typography>
      <div>
        <IconButton onClick={openMenu} color="inherit">
          <MoreHorizIcon />
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
          <MenuItem onClick={handleOnUpdateClick}>
            <ListItemIcon>
              <EditIcon color="inherit" />
            </ListItemIcon>
            Editar
          </MenuItem>
          <MenuItem onClick={handleOnDeleteClick}>
            <ListItemIcon>
              <DeleteIcon color="inherit" />
            </ListItemIcon>
            Borrar
          </MenuItem>
        </Menu>
      </div>

      <UpdateTodoModal
        open={updateTodoOpen}
        onCancel={() => setUpdateTodoOpen(false)}
        onSubmit={handleOnUpdate}
        todo={{ id, name, description }}
      />
      <ViewTodoModal
        open={viewTodoOpen}
        onClose={() => setViewTodoOpen(false)}
        todo={{ id, name, description }}
      />
    </Box>
  );
};

export default TodoItem;
