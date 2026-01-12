import { AssetsPage } from "@/pages";
import { theme } from "@/shared/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AssetsPage />
    </ThemeProvider>
  );
}

export default App;
