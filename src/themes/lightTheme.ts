import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      white: "#fff",
      black: "#000",
    },
    primary: {
      main: "#3e976b",
      light: "#84c7a6",
      dark: "#3e976b",
    }, 
    secondary: {
      main: "#bdefd7",
      light: "#bdefd7",
      dark: "#bdefd7",
    },

    text: {
      primary: "rgba(0,0,0,0.87)",
      secondary: "rgba(0,0,0,0.6)",
      disabled: "rgba(0,0,0,0.38)",
    },
  },
});

export default lightTheme;
