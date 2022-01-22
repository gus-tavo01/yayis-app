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
import useToast from "../hooks/useToast";

const ConfigurationPage = () => {
  const dispatch = useDispatch();

  const themes = useSelector((store) => store.themes);
  const languages = useSelector((store) => store.languages);

  const { theme, language } = useConfiguration();
  const toast = useToast();

  const [updated, setUpdated] = useState(false);
  const [updateModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!languages.items.length) {
      console.log("fetch languages");
      dispatch(fetchLanguages({}));
    }

    dispatch(fetchThemes({}));
  }, [dispatch, languages]);

  const handleOnLanguageChange = (selectedLanguage) => {
    dispatch(updateConfiguration({ language: selectedLanguage }));
    setUpdated(true);
  };

  const handleOnThemeChange = (selectedTheme) => {
    dispatch(updateConfiguration({ theme: selectedTheme }));
    setUpdated(true);
  };

  const handleOnUpdateClose = () => {
    setModalOpen(false);

    if (updated) {
      toast.success("Los cambios fueron aplicados con exito!");
      setUpdated(false);
    }
  };

  const handleOnChangeClick = () => {
    setModalOpen(true);
    setUpdated(false);
  };

  console.log("@@ Config page render");

  return (
    <Box p={2} display="flex" flexDirection="column">
      <Stack spacing={2}>
        <Typography variant="body1">
          Puedes encontrar la configuracion de la app aqui.
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Tema:</Typography>
          <Typography variant="body2">
            {theme?.name || "MUI default"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Lenguage:</Typography>
          <Typography variant="body2">{language?.name || "Español"}</Typography>
        </Box>

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
          onClick={handleOnChangeClick}
          disabled={themes.loading || languages.loading}
        >
          Cambiar
        </Button>
      </Stack>

      <UpdateConfigurationModal
        open={updateModalOpen}
        onClose={handleOnUpdateClose}
        onThemeChange={handleOnThemeChange}
        onLanguageChange={handleOnLanguageChange}
        theme={theme?.code || ""}
        themes={themes.items}
        language={language?.code || ""}
        languages={languages.items}
      />
    </Box>
  );
};

export default ConfigurationPage;
