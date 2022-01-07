import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  Button,
  MenuItem,
} from "@mui/material";

const UpdateConfigurationModal = ({
  open,
  language,
  languages,
  theme,
  themes,
  onThemeChange,
  onClose,
}) => {
  const handleOnLanguageChange = ({ target }) => {
    const selected = languages.find((l) => l.code === target.value);
    onlanguagechange(selected);
  };

  const handleOnThemeChange = ({ target }) => {
    const selected = themes.find((t) => t.code === target.value);
    onThemeChange(selected);
  };

  console.log("@@ Update modal render");

  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle>Actualizar la configuracion de la app</DialogTitle>
      <DialogContent dividers sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl margin="dense">
          <InputLabel id="languageId">Lenguage</InputLabel>
          <Select
            disabled
            labelId="languageId"
            label="Language"
            name="language"
            value={language.code}
            onChange={handleOnLanguageChange}
          >
            {languages.map((l) => (
              <MenuItem key={l.code} value={l.code}>
                {l.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl margin="dense">
          <InputLabel id="themeId">Tema</InputLabel>
          <Select
            labelId="themeId"
            label="Theme"
            name="theme"
            value={theme.code}
            onChange={handleOnThemeChange}
          >
            {themes.map((t) => (
              <MenuItem key={t.code} value={t.code}>
                {t.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button color="primary" variant="contained" onClick={onClose}>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateConfigurationModal;
