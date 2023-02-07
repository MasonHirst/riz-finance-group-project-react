import React, {  } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import WhiteLogo from '../../assets/riz-icon-white.png'

function DrawerAppBar() {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-evenly', gap: '10%', }}>
          <img alt='Riz logo' src={WhiteLogo} width='100px' />
          <Box style={{ display: 'flex', gap: 25, }} >
            
              <Button sx={{ color: '#fff', textTransform: 'none', fontSize: '18px', }}>
                About us
              </Button>
              <Button sx={{ color: '#fff', textTransform: 'none', fontSize: '18px', }}>
                Contact us
              </Button>
              <Button sx={{ color: '#fff', textTransform: 'none', fontSize: '18px', }}>
                Login
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default DrawerAppBar
