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

  const handleOnSubmit = () => onSubmit(inputs);

  return (
    <Dialog open={open}>
      <DialogTitle>Update todo</DialogTitle>
      <DialogContent dividers>
        <InputLabel required>Name</InputLabel>
        <TextField
          name="name"
          placeholder="Todo name"
          onChange={handleOnChange}
          value={inputs.name}
          variant="filled"
        />
        <InputLabel>Description</InputLabel>
        <TextField
          name="description"
          placeholder="Todo detailed description"
          onChange={handleOnChange}
          value={inputs.description}
          variant="filled"
          multiline
        />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleOnCancel} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleOnSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateTodoModal;
