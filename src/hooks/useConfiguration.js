import { useSelector } from "react-redux";

import { useTheme } from "@mui/material";

const useConfiguration = () => {
  const languages = useSelector((store) => store.languages.items);
  const themes = useSelector((store) => store.themes.items);
  const appConfig = useSelector((store) => store.configuration);

  const defaultTheme = useTheme();

  const language = languages.find((l) => l.code === appConfig.language);
  const theme = themes.find((t) => t.id === appConfig.theme);

  return { language, theme: theme || defaultTheme };
};

export default useConfiguration;
