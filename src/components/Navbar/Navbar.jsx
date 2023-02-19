import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import User from '../../assets/Ellipse 1.png'


function Navbar({text}) {
  
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl"  sx={{ backgroundColor:'#4F4F4F' }}>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href="/"
            sx={{
              
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Inter',
              fontWeight: 700,
              color: '#fff',
              lineHeight:'28px',
              textDecoration: 'none',
            }}
          >
            {text}
          </Typography>

          
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display:  { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Inter',
              fontWeight: 600,
              lineHeight:'28px',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            {text}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={User} />
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;