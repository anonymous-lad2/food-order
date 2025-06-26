import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "./component/Navbar/Navbar";
import DarkTheme from "./theme/DarkTheme";

function App() {
  return (
    
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
