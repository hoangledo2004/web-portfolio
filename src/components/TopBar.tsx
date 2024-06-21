import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom' 

const TopBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', p: 2}}>
          <Typography variant='h4' fontFamily="Roboto Slab, serif" fontWeight='bold' textAlign="left">
            Le
            <br/>
            Hoang
          </Typography>
          <Box fontFamily="Raleway, sans-serif" sx={{ bgcolor: 'lightcyan', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '50%' }}>
              <Typography variant='h6' component={Link} to="/profile" sx={{ textDecoration: 'none', color: 'inherit' }}>Profile</Typography>
              <Typography variant='h6' component={Link} to="/showcases" sx={{ textDecoration: 'none', color: 'inherit' }}>Showcases</Typography>
              <Typography variant='h6' component={Link} to="/projects" sx={{ textDecoration: 'none', color: 'inherit' }}>Projects</Typography>
              <Typography variant='h6' component={Link} to="/contact" sx={{ textDecoration: 'none', color: 'inherit' }}>Contact</Typography>
          </Box>
      </Box>
    </>
  );
}

export default TopBar