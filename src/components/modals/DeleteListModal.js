import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const DeleteListModal = ({ id, name, onCancel, onSubmit, open }) => {
  const handleOnSubmit = () => onSubmit(id);

  return (
    <Dialog open={open}>
      <DialogTitle>Remove {name}</DialogTitle>
      <DialogContent dividers>
        You are about to delete this list forever.
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={onCancel} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleOnSubmit} color="primary" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteListModal;
