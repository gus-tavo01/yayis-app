import React, { useState, createRef } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

import ExportableList from "../ExportableList";

import imageFormats from "../../constants/imageFormats";

const CreateImageModal = ({ open, onCancel, onSubmit, list }) => {
  const [format, setFormat] = useState(imageFormats.png);
  const [removeFinished, setIncludeFinished] = useState(false);

  const nodeRef = createRef();

  const handleOnFormatChange = ({ target }) => {
    setFormat(target.value);
  };

  const handleOnIncludeFinished = ({ target }) => {
    setIncludeFinished(target.checked);
  };

  const handleOnSubmit = () => {
    onSubmit(format, nodeRef.current);
  };

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Configura la lista antes de exportar</DialogTitle>
      <DialogContent
        dividers
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="imageFormatId">Formato de la imagen</InputLabel>
          <Select
            label="Formato de la imagen"
            labelId="imageFormatId"
            value={format}
            onChange={handleOnFormatChange}
          >
            {Object.keys(imageFormats).map((f, i) => (
              <MenuItem key={i} value={f}>
                {f}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          label="Quitar items finalizados?"
          labelPlacement="end"
          control={
            <Checkbox
              checked={removeFinished}
              onChange={handleOnIncludeFinished}
            />
          }
        />
        <Typography variant="caption" textAlign="end">
          Vista previa
        </Typography>
        <ExportableList
          list={list}
          removeFinished={removeFinished}
          ref={nodeRef}
        />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={onCancel} color="secondary" variant="outlined">
          Cerrar
        </Button>
        <Button onClick={handleOnSubmit} color="primary" variant="contained">
          Descargar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateImageModal;
