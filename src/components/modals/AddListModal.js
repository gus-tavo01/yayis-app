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
      <DialogTitle>Crear una nueva lista</DialogTitle>
      <DialogContent dividers>
        <InputLabel required>Nombre</InputLabel>
        <TextField
          name="name"
          placeholder="Nombre de la lista"
          onChange={handleOnChange}
          value={listName}
          variant="outlined"
          autoFocus
        />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleOnCancel} color="secondary" variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleOnSubmit} color="primary" variant="contained">
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddListModal;
