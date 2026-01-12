import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#06326b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#c12a21",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#d98918",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#262626",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: "#06326b",
    },
    h2: {
      fontWeight: 700,
      color: "#06326b",
    },
    h3: {
      fontWeight: 700,
      color: "#06326b",
    },
    h4: {
      fontWeight: 600,
      color: "#06326b",
    },
    h5: {
      fontWeight: 600,
      color: "#06326b",
    },
    h6: {
      fontWeight: 600,
      color: "#06326b",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#06326b",
          "&:hover": {
            backgroundColor: "#052050",
          },
        },
        outlined: {
          borderColor: "#06326b",
          color: "#06326b",
          "&:hover": {
            borderColor: "#052050",
            backgroundColor: "rgba(6, 50, 107, 0.04)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: "#e0e0e0",
          "&:hover": {
            borderColor: "#06326b",
            boxShadow: "0 4px 12px rgba(6, 50, 107, 0.15)",
          },
        },
      },
    },
  },
});
