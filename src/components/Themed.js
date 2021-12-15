import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const Themed = ({ children }) => {
  const theme = useSelector((store) => store.configuration.theme);
  const appTheme = createTheme(theme || {});
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default Themed;
