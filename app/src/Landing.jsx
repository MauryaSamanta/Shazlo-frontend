import React, { useEffect, useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import mainlogo from './assets/1.png';
import mobilelogo from './assets/w.png';
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
    <Box sx={{ flex: 1, width: '100%', overflowX: 'hidden' }}>
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
        {/* Sling Handles (Shopping Bag Style) - Only show on desktop */}
        {!isMobile && (
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              left: '50%',
              width: 1000,
              height: 500,
              border: '20px solid #e9cd7d',
              borderTopLeftRadius: '100% 80%',
              borderTopRightRadius: '100% 80%',
              borderBottom: 'none',
              backgroundColor: 'transparent',
              zIndex: 0,
              transform: 'translateX(-50%)',
            }}
          />
        )}

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
        
        {/* Cards - Only show on desktop */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              gap: 6,
              position: 'absolute',
              bottom: -60 + scrollOffset,  // Moves up on scroll
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              flexDirection: 'row',
              alignItems: 'center',
              transition: 'bottom 0.2s ease-out',  // Smooth animation
            }}
          >
            {/* Left Card */}
            <Box
              component="img"
              src={ss2}
              sx={{
                width: 260,
                height: 470,
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
                width: 260,
                height: 470,
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
            />
            
            {/* Right Card */}
            <Box
              component="img"
              src={ss3}
              sx={{
                width: 260,
                height: 470,
                backgroundColor: 'white',
                borderRadius: '14px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                transform: 'rotate(12deg)',
                zIndex: 1,
              }}
            />
          </Box>
        )}
        
        {/* Logo - Different for mobile and desktop */}
        <Box
          component="img"
          src={isMobile ? mobilelogo : mainlogo}
          alt="main logo"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? 500 : 750,
            top: isMobile ? 70 : 420,
            zIndex: 0,
          }}
        />
        
        <Box
          sx={{ mt: 4, maxWidth: 300 }}
        >
          <Button />
        </Box>
      </Box>

      {/* Content Sections */}
      <Box
        sx={{
          position: 'relative',
          top: isMobile ? 0 : 650,
          zIndex: 0,
          backgroundColor: 'white',
        }}
      >
        <Style />
      </Box>

      <Box
        sx={{
          position: 'relative',
          top: isMobile ? 0 : 1500,
          zIndex: 0,
          backgroundColor: 'white',
        }}
      >
        <Closet />
      </Box>

      {/* Transition curve */}
      <Box
        sx={{
          width: '100%',
          height: 150,
          backgroundColor: 'white',
          position: 'relative',
          top: isMobile ? 0 : 2300,
          zIndex: 1,
          borderBottomLeftRadius: '100% 100px',
          borderBottomRightRadius: '100% 100px',
        }}
      />

      {/* Footer */}
      <Box
        sx={{
          position: 'relative',
          top: isMobile ? 0 : 2400,
          zIndex: 0,
          backgroundColor: 'black',
          width: '100%'
        }}
      >
        <Footer />
      </Box>
      
      {/* Bottom White Space */}
      <Box />
    </Box>
  );
};

export default Landing;