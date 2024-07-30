import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';


function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
         <Link to={'/'}><Button color="inherit" style={{color:'white'}}>Home</Button></Link>
         <Link to={'/addproduct'}><Button color="inherit" style={{color:'white'}}>Add Product</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
);
}

export default Navbar