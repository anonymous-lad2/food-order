import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "./component/Navbar/Navbar";
import DarkTheme from "./theme/DarkTheme";
import { Home } from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";

function App() {
  return (
    
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
