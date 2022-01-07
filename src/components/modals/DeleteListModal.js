import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const DeleteListModal = ({ list, onCancel, onSubmit, open }) => {
  const handleOnSubmit = () => onSubmit(list.id);

  return (
    <Dialog open={open}>
      <DialogTitle>Borrar {list.name}</DialogTitle>
      <DialogContent dividers>
        Estas a punto de borrar esta lista de forma permanente
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={onCancel} color="secondary" variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleOnSubmit} color="primary" variant="contained">
          Borrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteListModal;
