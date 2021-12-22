import { ThemeProvider, createTheme } from "@mui/material/styles";
import useConfiguration from "../hooks/useConfiguration";

const Themed = ({ children }) => {
  const { theme } = useConfiguration();
  const appTheme = createTheme(theme);
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default Themed;
