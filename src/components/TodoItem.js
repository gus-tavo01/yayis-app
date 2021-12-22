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

const TodoItem = (todo) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const closeMenu = () => setAnchorEl(null);

  const openMenu = (event) => setAnchorEl(event.currentTarget);

  const handleOnEdit = () => {};

  const handleOnDelete = () => {};

  return (
    <Box className={classes.container}>
      <Checkbox color="primary" checked={todo.isDone} />
      <Typography color="inherit">{todo.name}</Typography>
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
          <MenuItem onClick={handleOnEdit}>
            <ListItemIcon>
              <EditIcon color="inherit" />
            </ListItemIcon>
            Edit
          </MenuItem>
          <MenuItem onClick={handleOnDelete}>
            <ListItemIcon>
              <DeleteIcon color="inherit" />
            </ListItemIcon>
            Delete
          </MenuItem>
        </Menu>
      </div>
    </Box>
  );
};

export default TodoItem;
