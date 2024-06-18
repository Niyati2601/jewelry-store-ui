import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const pages = ['Home', 'About Us', 'Collection', 'Contact Us'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  return (
    <><AppBar position="static" sx={{ backgroundColor: '#EAD9CE', color: 'black' }}>
          <Container maxWidth="xl">
              <Toolbar disableGutters>
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                      <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit"
                      >
                          <MenuIcon />
                      </IconButton>
                      <Menu
                          id="menu-appbar"
                          anchorEl={anchorElNav}
                          anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                          }}
                          open={Boolean(anchorElNav)}
                          onClose={handleCloseNavMenu}
                          sx={{
                              display: { xs: 'block', md: 'none' },
                          }}
                      >
                          {pages.map((page) => (
                              <MenuItem key={page} onClick={handleCloseNavMenu}>
                                  <Typography textAlign="center">{page}</Typography>
                              </MenuItem>
                          ))}
                      </Menu>
                  </Box>

                  <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
                      {pages.map((page) => (
                          <Button
                              key={page}
                              onClick={handleCloseNavMenu}
                              sx={{ my: 2, color: 'black', display: 'block' }}
                          >
                              {page}
                          </Button>
                      ))}
                  </Box>

                  <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="#app-bar-with-responsive-menu"
                      sx={{
                          flexGrow: 1,
                          display: 'flex',
                          justifyContent: 'center',
                          fontFamily: 'Bastiken',
                          fontSize: '20px',
                          color: 'inherit',
                          letterSpacing: '.3rem',
                          textDecoration: 'none',
                      }}
                  >
                      JEWELS
                  </Typography>

                  <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                      <IconButton sx={{ color: 'black' }}>
                          <SearchIcon />
                      </IconButton>
                      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                      <IconButton sx={{ color: 'black' }}>
                          <ShoppingCartIcon />
                      </IconButton>
                      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                      <IconButton sx={{ color: 'black' }}>
                          <PersonOutlineIcon />
                      </IconButton>

                      <Typography variant='body2' sx={{ mx: 1 }}>Sign Up</Typography>
                  </Box>
              </Toolbar>
          </Container>
      </AppBar><Divider variant="horizontal" /></>
  )
}

export default Header