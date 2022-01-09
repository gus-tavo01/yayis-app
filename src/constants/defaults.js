import { colors } from "@mui/material";

export const theme = {
  code: "T_DEF",
  name: "Default theme",
  palette: {
    type: "light",
    primary: {
      main: colors.purple.A700,
      text: "white",
    },
    secondary: {
      main: colors.lightBlue.A200,
      text: "black",
    },
  },
};

export const language = { code: "L_SPA", name: "Español" };

const defaults = { language, theme };

export default defaults;
