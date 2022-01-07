import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";

const ViewTodoModal = ({ open, onClose, todo }) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>{todo.name}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText style={{ whiteSpace: "pre-line" }}>
          {todo.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => onClose()} color="primary" variant="contained">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewTodoModal;
