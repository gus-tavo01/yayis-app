import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import { ModeEdit } from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";

import UpdateConfigurationModal from "../components/modals/UpdateConfigurationModal";

import { fetchThemes } from "../redux/slices/themes";
import { fetchLanguages } from "../redux/slices/languages";
import { updateConfiguration } from "../redux/slices/configuration";

import useConfiguration from "../hooks/useConfiguration";

const ConfigurationPage = () => {
  const dispatch = useDispatch();

  const themes = useSelector((store) => store.themes);
  const languages = useSelector((store) => store.languages);

  const { theme, language } = useConfiguration();

  const [updateModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // TODO:
    // define if options are retrieved in a single action
    console.log("Fetch app languages and themes");
    // themes can change
    dispatch(fetchLanguages({}));
    dispatch(fetchThemes({}));
  }, [dispatch]);

  // const handleOnLanguageChange = (selectedLanguage) => {};

  const handleOnThemeChange = (selectedTheme) => {
    dispatch(updateConfiguration({ theme: selectedTheme }));
  };

  const handleOnUpdateClose = () => {
    setModalOpen(false);
  };

  console.log("@@ Config page render");

  return (
    <Box p={2} display="flex" flexDirection="column">
      <Stack spacing={2}>
        <Typography variant="body1">
          App configuration can be found here.
        </Typography>
        <Button
          sx={{ alignSelf: "flex-end" }}
          size="small"
          variant="contained"
          startIcon={
            themes.loading || languages.loading ? (
              <CircularProgress size={20} color="primary" />
            ) : (
              <ModeEdit />
            )
          }
          onClick={() => setModalOpen(true)}
          disabled={themes.loading || languages.loading}
        >
          Change
        </Button>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Theme:</Typography>
          <Typography variant="body2">{theme.name}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Language:</Typography>
          <Typography variant="body2">{language.name}</Typography>
        </Box>
      </Stack>

      <UpdateConfigurationModal
        open={updateModalOpen}
        onClose={handleOnUpdateClose}
        onThemeChange={handleOnThemeChange}
        // onLanguageChange={handleOnLanguageChange}
        theme={theme}
        themes={themes.items}
        language={language}
        languages={languages.items}
      />
    </Box>
  );
};

export default ConfigurationPage;
