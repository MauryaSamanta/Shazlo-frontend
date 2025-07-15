import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import swipeImage from '../assets/swipe.jpg'; // Replace with actual image

const Style = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
         px: isMobile ? 3 : 2,
         py: isMobile ? 6 : 20,
        // backgroundColor: '#fdfdfd',
        gap: isMobile ? 4 : 10,
        // width:1350,
       
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? 26 : 100,
            mb: 2,
            color: '#1e1e1e',
          }}
        >
          Swipe on clothes 
        </Typography>
    <Typography
  variant="body1"
  sx={{
    fontSize: isMobile ? 16 : 40,
    color: '#555',
    maxWidth: 700,
    lineHeight: 1.5,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  }}
>
  Say goodbye to boring browsing.
  <Box component="span">
    Swipe{' '}
    <Box component="span" sx={{ color: 'purple', fontWeight: 700 }} display="inline">
      right
    </Box>{' '}
    on clothes you like.
  </Box>
  <Box component="span">
    Swipe{' '}
    <Box component="span" sx={{ color: 'red', fontWeight: 700 }} display="inline">
      left
    </Box>{' '}
    if you don’t.
  </Box>
  <Box component="span">
    Swipe{' '}
    <Box component="span" sx={{ color: 'green', fontWeight: 700 }} display="inline">
      up
    </Box>{' '}
    to add to cart.
  </Box>
</Typography>


      </Box>

      {/* Image Section */}
      <Box
        component="img"
        src={swipeImage}
        alt="Swipe Feature"
        sx={{
          flex: 1,
          width: isMobile ? '100%' : '500px',
          maxWidth: 500,
          height: 'auto',
          borderRadius: '20px',
        //   boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        }}
      />
    </Box>
  );
};

export default Style;
