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

const AddTodoModal = ({ open, onCancel, onSubmit }) => {
  const [inputs, setInputs] = useState({ name: "", description: "" });

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
      <DialogTitle>Create a new todo</DialogTitle>
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

export default AddTodoModal;