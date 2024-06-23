import { Link, Container, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', padding: '20px' }}>
      {/* Left Section (Introduction) */}
      <Box sx={{ flex: '1 1 100%' }}>
        <h3 style={{fontFamily:'Roboto Slab, san-serif', fontWeight:'bold', fontSize: '1.6rem'}} >
          Hello,
          <br/>
          My name is Hoang.
        </h3>

        <Typography fontFamily='Raleway, sans-serif' fontWeight='300'>
          I'm a currently a rising sophomore at University of Rochester, majored in Computer Science.
          <br/>
          <br/>
          My areas of interest include problem-solving, cloud infrastructure, machine learning, and IoT.
          <br/>
          <br/>
          With a detail oriented-focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience.
          <br/>
          <br/>
          <Link>Get my Resume</Link>
        </Typography>
      </Box>

      {/* Right Section (Profile Picture) */}
      <Box sx={{ flex: '1 1 100%', marginBottom: isMobile ? 2 : 0 }}>
        <img src="path_to_your_profile_picture.jpg" alt="Profile" style={{ width: '100%', borderRadius: '50%' }} />
      </Box>
    </Container>
  );
}

export default HomePage