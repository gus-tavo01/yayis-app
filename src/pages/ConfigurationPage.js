import React, { useState, useEffect } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import { ModeEdit, DarkMode } from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";
import { setConfiguration } from "../redux/actions/configuration";

const ConfigurationPage = () => {
  const dispatch = useDispatch();
  const appConfig = useSelector((store) => store.configuration);
  const { themes, languages, theme, language } = appConfig;

  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({
    theme,
    language,
    isDarkMode: theme.palette.type === "dark",
  });

  useEffect(() => {
    // fetch app themes and languages to populate Selects
    // dispatch(getOptions());
  }, []);

  // effect for theme and dark mode changing
  // update theme
  useEffect(() => {
    console.log("$$ effect by changing inputs");
    dispatch(setConfiguration(inputs));
  }, [dispatch, inputs]);

  const closeModal = () => setModalOpen(false);

  const handleSelectChange = ({ target }, { items }) => {
    const value = items.find((t) => t.id === target.value);
    setInputs({ ...inputs, [target.name]: value });
  };

  const handleDarkMode = ({ target }) =>
    setInputs({ ...inputs, isDarkMode: target.checked });

  const handleOnSubmit = () => closeModal();

  console.log("@@ Config page render");

  return (
    <Box p={1}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          size="small"
          variant="contained"
          startIcon={<ModeEdit />}
          onClick={() => setModalOpen(true)}
        >
          Change
        </Button>
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography component="h2" variant="h6">
          You can change the theme and app language here
        </Typography>
        <Typography component="label" variant="label">
          Theme: {inputs.theme.name}
        </Typography>
        <Typography component="label" variant="label">
          Language: {inputs.language.name}
        </Typography>
      </Box>
      <Dialog open={modalOpen} maxWidth="xs">
        <DialogTitle>Update Settings</DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column">
            <FormControl margin="dense">
              <InputLabel id="languageId">Language</InputLabel>
              <Select
                labelId="languageId"
                label="Language"
                name="language"
                value={inputs.language.id}
                onChange={(e) => handleSelectChange(e, languages)}
              >
                {languages.items.map((l) => (
                  <MenuItem key={l.id} value={l.id}>
                    {l.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl margin="dense">
              <InputLabel id="themeId">Theme</InputLabel>
              <Select
                labelId="themeId"
                label="Theme"
                name="theme"
                value={inputs.theme.id}
                onChange={(e) => handleSelectChange(e, themes)}
              >
                {themes.items.map((t) => (
                  <MenuItem key={t.id} value={t.id}>
                    {t.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box display="flex" alignItems="center">
              <FormControlLabel
                label="Dark mode"
                control={
                  <Switch
                    checked={inputs.isDarkMode}
                    onChange={handleDarkMode}
                  />
                }
              />
              {(inputs.isDarkMode && <DarkMode color="primary" />) || (
                <DarkMode color="disabled" />
              )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button color="secondary" variant="text" onClick={closeModal}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" onClick={handleOnSubmit}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ConfigurationPage;
