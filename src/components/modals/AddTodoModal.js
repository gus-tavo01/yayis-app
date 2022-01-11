import React, { useState } from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  Button,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const AddTodoModal = ({ open, onCancel, onSubmit }) => {
  const [inputs, setInputs] = useState({ name: "", description: "" });
  const [hiddenDescription, setHiddenDescription] = useState(true);

  const handleOnChange = ({ target }) =>
    setInputs({ ...inputs, [target.name]: target.value });

  const resetForm = () => setInputs({ name: "", description: "" });

  const handleOnCancel = () => {
    resetForm();
    onCancel();
  };

  const handleOnSubmit = () => {
    onSubmit(inputs);
    resetForm();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Crear un nuevo todo</DialogTitle>
      <DialogContent dividers>
        <InputLabel required>Nombre</InputLabel>
        <TextField
          name="name"
          placeholder="Nombre para este todo"
          onChange={handleOnChange}
          value={inputs.name}
          autoFocus
        />
        <InputLabel
          onClick={() => setHiddenDescription(!hiddenDescription)}
          sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
        >
          Descripcion
          {!hiddenDescription ? (
            <KeyboardArrowDownIcon color="inherit" />
          ) : (
            <KeyboardArrowUpIcon color="inherit" />
          )}
        </InputLabel>

        {hiddenDescription && <Divider />}

        {!hiddenDescription && (
          <TextField
            name="description"
            placeholder="Descripcion acerca de este todo"
            onChange={handleOnChange}
            value={inputs.description}
            multiline
          />
        )}
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

export default AddTodoModal;
