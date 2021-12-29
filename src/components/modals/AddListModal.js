import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  InputLabel,
  TextField,
} from "@mui/material";

const AddListModal = ({ open, onCancel, onSubmit }) => {
  const [listName, setListName] = useState("");

  const handleOnChange = ({ target }) => {
    setListName(target.value);
  };

  const handleOnCancel = () => {
    setListName("");
    onCancel();
  };

  const handleOnSubmit = () => {
    onSubmit({ name: listName });
    setListName("");
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Create a new list</DialogTitle>
      <DialogContent dividers>
        <InputLabel required>Name</InputLabel>
        <TextField
          name="name"
          placeholder="List name"
          onChange={handleOnChange}
          value={listName}
          variant="outlined"
          autoFocus
        />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleOnCancel} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleOnSubmit} color="primary" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddListModal;
