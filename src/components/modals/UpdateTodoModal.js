import React, { useState } from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  Button,
} from "@mui/material";

const UpdateTodoModal = ({ open, onCancel, onSubmit, todo }) => {
  const [inputs, setInputs] = useState({
    name: todo?.name,
    description: todo?.description,
  });

  const handleOnChange = ({ target }) =>
    setInputs({ ...inputs, [target.name]: target.value });

  const resetForm = () =>
    setInputs({ name: todo?.name, description: todo?.description });

  const handleOnCancel = () => {
    resetForm();
    onCancel();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Actualizar todo</DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleOnSubmit}>
          <InputLabel required>Nombre</InputLabel>
          <TextField
            name="name"
            placeholder="Todo name"
            onChange={handleOnChange}
            value={inputs.name}
          />
          <InputLabel>Descripcion</InputLabel>
          <TextField
            name="description"
            placeholder="Descripcion acerca del todo"
            onChange={handleOnChange}
            value={inputs.description}
            multiline
          />
        </form>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleOnCancel} color="secondary" variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleOnSubmit} color="primary" variant="contained">
          Actualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateTodoModal;
