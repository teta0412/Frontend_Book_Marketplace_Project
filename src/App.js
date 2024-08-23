import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import StoreDetails from './component/Store/StoreDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomerRouter } from './Routers/CustomerRouter';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      {/* <Navbar></Navbar> */}
      {/* <Home></Home> */}
      {/* <StoreDetails></StoreDetails> */}
      {/* <Cart></Cart> */}
      {/* <Profile></Profile> */}
      <CustomerRouter/>
    </ThemeProvider>
  );
}

export default App;
