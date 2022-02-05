import * as React from 'react';
import Home from '../Home/Home';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Appbar() {
 
  return (
  <><Home></Home>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success" enableColorOnDark>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bismillahirrahmanirrahim
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" color='write'> HOME </Link>
          </Typography>

          <Button color="inherit"> <Link to="/UserSignIn">Giriş Yap</Link></Button>
          <Button color='inherit'><Link to="/UserSignUp">Üye Ol</Link></Button>
        </Toolbar>
      </AppBar>
    </Box></>
    
    
  );
}

