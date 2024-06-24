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
      <Box className='topbar' sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', p: 2, marginInline: 2 }}>
          <h1 style={{ fontFamily: 'Roboto Slab, serif', fontSize: '1.6rem' }}>
            Le,
            <br/>
            Hoang
          </h1>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
              <Typography variant='h6' sx={{ textDecoration: 'none', color: 'inherit', minWidth: 80, textAlign: 'center', fontWeight: 300, fontSize: '18px' }}>Profile</Typography>
              <Typography variant='h6' sx={{ textDecoration: 'none', color: 'inherit', minWidth: 80, textAlign: 'center', fontWeight: 300, fontSize: '18px' }}>Showcases</Typography>
              <Typography variant='h6' sx={{ textDecoration: 'none', color: 'inherit', minWidth: 80, textAlign: 'center', fontWeight: 300, fontSize: '18px' }}>Projects</Typography>
              <Typography variant='h6' sx={{ textDecoration: 'none', color: 'inherit', minWidth: 80, textAlign: 'center', fontWeight: 300, fontSize: '18px' }}>Contact</Typography>
              <Brightness7OutlinedIcon/>
              {mode === "light" ? <Brightness7OutlinedIcon onClick={handleMode} sx={{ cursor: 'pointer' }}/> : <DarkModeIcon onClick={handleMode} sx={{ cursor: 'pointer' }}/>}
          </Box>
      </Box>
    </>
  );
}

export default TopBar