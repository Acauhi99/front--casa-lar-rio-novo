import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#154356",
    },
    secondary: {
      main: "#5ab792",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Defina a fonte padrão
  },
});

export default theme;
