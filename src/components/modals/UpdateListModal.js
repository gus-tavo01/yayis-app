import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

const UpdateListModal = ({ open, onCancel, onSubmit, list }) => {
  const [inputs, setInputs] = useState({
    name: list.name,
  });

  const handleOnChange = ({ target }) =>
    setInputs({ ...inputs, [target.name]: target.value });

  const handleOnSubmit = () => {
    onSubmit(list.id, inputs);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Update list</DialogTitle>
      <DialogContent dividers>
        <TextField name="name" value={inputs.name} onChange={handleOnChange} />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button color="secondary" variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button color="primary" variant="contained" onClick={handleOnSubmit}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

UpdateListModal.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  list: PropTypes.shape({
    name: PropTypes.string,
  }),
};

UpdateListModal.defaultProps = {
  list: null,
};

export default UpdateListModal;
