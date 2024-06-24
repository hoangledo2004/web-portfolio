import { useState } from 'react'
import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom' 
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined'
import DarkModeIcon from '@mui/icons-material/DarkMode'


const TopBar = () => {
  const [mode, setMode] = useState("light")
  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
  }

  return (
    <>
      <Box className='topbar' sx={{ position: 'fixed', zIndex: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '2rem 0', px: '3rem', boxSizing: 'border-box', overflowX: 'hidden' }}>
          <h1 style={{ fontFamily: 'Roboto Slab, serif', fontSize: '1.6rem' }}>
            Le,
            <br/>
            Hoang
          </h1>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: 2 }}>
              <Typography variant='h6' sx={{ textDecoration: 'none', color: 'inherit', minWidth: 80, textAlign: 'center', fontWeight: 300, fontSize: '16px' }}>Profile</Typography>
              <Typography variant='h6' sx={{ textDecoration: 'none', color: 'inherit', minWidth: 80, textAlign: 'center', fontWeight: 300, fontSize: '16px' }}>Showcases</Typography>
              <Typography variant='h6' sx={{ textDecoration: 'none', color: 'inherit', minWidth: 80, textAlign: 'center', fontWeight: 300, fontSize: '16px' }}>Projects</Typography>
              <Typography variant='h6' sx={{ textDecoration: 'none', color: 'inherit', minWidth: 80, textAlign: 'center', fontWeight: 300, fontSize: '16px' }}>Contact</Typography>
              {mode === "light" ? <Brightness7OutlinedIcon onClick={handleMode} sx={{ cursor: 'pointer' }}/> : <DarkModeIcon onClick={handleMode} sx={{ cursor: 'pointer' }}/>}
          </Box>
      </Box>
    </>
  );
}

export default TopBar