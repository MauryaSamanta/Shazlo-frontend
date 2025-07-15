import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import closetImage from '../assets/closet.jpg'; // Replace with actual image

const Closet = () => {
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
        <Box
        component="img"
        src={closetImage}
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
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: isMobile ? 'center' : 'right',
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
          Save clothes in online closets
        </Typography>
<Typography
  variant="body1"
  sx={{
    fontSize: isMobile ? 16 : 40,
    lineHeight: 1.5,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    color: '#555',
  }}
>
 <Box component="span">
     Build your{' '}
     <Box component="span" sx={{  background: 'linear-gradient(to right, #ff6ec4, #7873f5)', 
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent', 
    fontWeight: 700  }} display="inline">
       dream closet
     </Box>{' '}
     {/* on clothes you like. */}
   </Box>
   <Box component="span">
     Save your{' '}
     <Box component="span" sx={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', 
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent', 
    fontWeight: 700  }} display="inline">
       fav fits
     </Box>{' '}
     {/* if you don’t. */}
   </Box>
   <Box component="span">
     Collab with{' '}
     <Box component="span" sx={{   background: 'linear-gradient(to right, #ff9a9e, #fad0c4)', 
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent', 
    fontWeight: 700  }} display="inline">
       friends
     </Box>{' '}
     {/* to add to cart. */}
   </Box>
   <Box component="span">
     Serve looks{' '}
     <Box component="span" sx={{  background: 'linear-gradient(to right, #f7971e, #ffd200)', 
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent', 
    fontWeight: 700  }} display="inline">
       together - anytime, anywhere
     </Box>{' '}
     {/* to add to cart. */}
   </Box>
</Typography>




      </Box>

      {/* Image Section */}
      
    </Box>
  );
};

export default Closet;
