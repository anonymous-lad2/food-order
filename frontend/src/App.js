import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "./component/Navbar/Navbar";
import DarkTheme from "./theme/DarkTheme";
import { Home } from "./component/Home/Home";

function App() {
  return (
    
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
