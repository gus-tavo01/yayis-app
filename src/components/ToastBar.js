import React from "react";

import { Snackbar, Alert, Slide } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import { closeAlert } from "../redux/slices/alerts";

const ToastBar = () => {
  const dispatch = useDispatch();
  const currentBar = useSelector((store) => store.alerts.toast);

  const handleOnClose = (e, reason) => {
    if (reason !== "clickaway") {
      dispatch(closeAlert());
    }
  };

  return (
    <Snackbar
      open={currentBar.isOpen}
      onClose={handleOnClose}
      autoHideDuration={2500}
      sx={{ bottom: { xs: 90, sm: 0 } }}
      TransitionComponent={(props) => (
        <Slide {...props} direction={currentBar.slide} />
      )}
    >
      <Alert severity={currentBar.severity} onClose={handleOnClose}>
        {currentBar.message}
      </Alert>
    </Snackbar>
  );
};

export default ToastBar;
