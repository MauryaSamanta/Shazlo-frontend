import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import mainlogo from './assets/1.png';
import ss1 from "./assets/ss1.jpg";
import ss2 from "./assets/ss2.jpg";
import ss3 from "./assets/ss3.jpg";
import Button from './components/Button';
import Style from './components/Swipe';
import Closet from './components/Closet';
import Footer from './Footer';
const Landing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 const [scrollY, setScrollY] = useState(0);
const scrollOffset = Math.min(scrollY / 2, 200); // cap at 200px

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <Box sx={{flex:1, width: '100%', overflowX: 'hidden' }}>
      {/* Top Yellow-Black Hero */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: isMobile ? 600 : 500,
          background: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        {/* Sling Handles (Shopping Bag Style) */}
<Box
  sx={{
    position: 'absolute',
    top: isMobile ? 440 : 20,
    left: isMobile ? '25%' : '50%',
    width: isMobile ? 100 : 1000,           // wider
    height: isMobile ? 40 : 500,            // flatter (less height)
    border: '20px solid #e9cd7d',
    borderTopLeftRadius: '100% 80%',       // horizontal % high, vertical % low
    borderTopRightRadius: '100% 80%',
    
    borderBottom: 'none',
    backgroundColor: 'transparent',
    zIndex: 0,
    transform: 'translateX(-50%)',
  }}
/>


          {/* Curve at bottom */}
  <Box
    sx={{
      position: 'absolute',
      bottom: -50,
      left: 0,
      width: '100%',
      height: 150,
      backgroundColor: 'white',
      borderTopLeftRadius: '100% 100px',
      borderTopRightRadius: '100% 100px',
      zIndex: 0,
    }}
  />
        
        {/* Cards */}
       <Box
  sx={{
    display: 'flex',
    gap: isMobile ? 2 : 6,
    position: 'absolute',
    bottom: isMobile ? -100 : -120 + scrollOffset,  // Moves up on scroll
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    transition: 'bottom 0.2s ease-out',  // Smooth animation
  }}
>

          {/* Left Card */}
          <Box
          component="img"
          src={ss2}
            sx={{
              width: isMobile ? 220 : 260,
              height: isMobile ? 420 : 510,
              backgroundColor: 'white',
              borderRadius: '14px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              transform: 'rotate(-12deg)',
              zIndex: 1,
            }}
          />
           
           

          {/* Center Card */}
          <Box
          component="img"
          src={ss1}
            sx={{
              width: isMobile ? 220 : 260,
              height: isMobile ? 420 : 510,
              backgroundColor: 'white',
              borderRadius: '14px',
              boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
              transform: 'rotate(0deg)',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexDirection: 'column',
              fontWeight: 600,
              textAlign: 'center',
              p: 2,
            }}
          >
          
          </Box>

          {/* Right Card */}
          <Box
          component="img"
          src={ss3}
            sx={{
              width: isMobile ? 220 : 260,
              height: isMobile ? 420 : 510,
              backgroundColor: 'white',
              borderRadius: '14px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              transform: 'rotate(12deg)',
              zIndex: 1,
            }}
          />
        </Box>
        {/* Main Logo Behind Cards */}
        <Box
          component="img"
          src={mainlogo}
          alt="main logo"
          sx={{
            position: 'absolute',
            // bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? 300 : 750,
            top:420,
            // top:180,
            // opacity: 0.06,
            zIndex: 0,
          }}
        />
        <Box
  sx={{
    position: 'absolute',
    top: isMobile ? 420 : 660, // Adjust based on logo size
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    backgroundColor:'white',
    
  }}
>
  <Button />
</Box>
 
       

        
      </Box>
<Box
  sx={{
    position: 'absolute',
    top: isMobile ? 420 : 650, // Adjust based on logo size
    // left: '50%',
    // transform: 'translateX(-50%)',
    zIndex: 0,
    backgroundColor:'white',
    
  }}
>
  <Style />
</Box>

<Box
  sx={{
    position: 'absolute',
    top: isMobile ? 420 : 1500, // Adjust based on logo size
    // left: '50%',
    // transform: 'translateX(-50%)',
    zIndex: 0,
    backgroundColor:'white',
    
  }}
>
  <Closet />
</Box>
 <Box
  sx={{
    width: '100%',
    height: 150,
    backgroundColor: 'white',
    position: 'absolute',
    top: isMobile ? 420 : 2300, // adjust this based on visual testing
    zIndex: 1,
    borderBottomLeftRadius: '100% 100px',
    borderBottomRightRadius: '100% 100px',
  }}
/>

<Box
  sx={{
    position: 'absolute',
    top: isMobile ? 420 : 2400, // Adjust based on logo size
    // left: '50%',
    // transform: 'translateX(-50%)',
    zIndex: 0,
    backgroundColor:'black',
    width:'100%'
  }}
>
  <Footer />
</Box>
      {/* Bottom White Space */}
      <Box sx={{ height: isMobile ? 500 : 600, backgroundColor: 'white' }} />
    </Box>
  );
};

export default Landing;
