import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ButtonPlay from '../../buttons/ButtonPlay';
import { Link } from 'react-router-dom';
import { routeCtx } from '../../../context/RouteCtx';

const pages = ['Agents', 'Maps', 'Weapons', 'Esports'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { navActive, setNavActive } = React.useContext(routeCtx);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: '1000000',
        bgcolor: '#0f1823',
      }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Link to={'/'} onClick={() => setNavActive('/')}>
            <img
              src="/images/logo-2-vlr.png"
              width={100}
              height={30}
              alt="logo"
            />
          </Link>

          <Box
            sx={{ display: { xs: 'none', md: 'flex', gap: '10px' } }}>
            {pages.map((page) => {
              return (
                <Link
                  key={page}
                  className={
                    page === navActive ? 'nav nav-active' : 'nav'
                  }
                  to={`/${page}`}>
                  <Button
                    onClick={() => setNavActive(page)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    className="nav-active">
                    {page}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ButtonPlay />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
