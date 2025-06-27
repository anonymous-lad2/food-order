import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "./component/Navbar/Navbar";
import DarkTheme from "./theme/DarkTheme";
import { Home } from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";

function App() {
  return (
    
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      <Profile/>
    </ThemeProvider>
  );
}

export default App;
