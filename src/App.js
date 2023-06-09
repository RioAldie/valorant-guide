import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListAgents from './Agents/Agents';
import Home from './Home/Home';
import WeaponPage from './WeaponPage';
import MapPage from './MapPage';
import RouteCtxProvider from './context/RouteCtx';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ff4655',
    },
    secondary: {
      main: '#000',
    },
  },
});
function App() {
  return (
    <>
      {/* <Router>
        <NavLink to={'/'} path={'/'}>
          home
        </NavLink>
        <NavLink to={'/agent'} path={'/'}>
          agent
        </NavLink>
      </Router> */}
      <RouteCtxProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agents" element={<ListAgents />} />
              <Route path="/weapons" element={<WeaponPage />} />
              <Route path="/maps" element={<MapPage />} />
              {/* <Route path="/agent/:id" element={<Agent />} /> */}
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </RouteCtxProvider>
    </>
  );
}

export default App;
