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
        px: isMobile ? 3 : 8,
        py: isMobile ? 6 : 20,
        gap: isMobile ? 6 : 12,
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={closetImage}
        alt="Closet Feature"
        sx={{
          flex: 1,
          width: isMobile ? '100%' : '500px',
          maxWidth: 500,
          height: 'auto',
          borderRadius: '20px',
          mx: isMobile ? 'auto' : 0,
        }}
      />

      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: isMobile ? 'center' : 'right',
          maxWidth: 600,
          mx: isMobile ? 'auto' : 0,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? 28 : 'clamp(40px, 7vw, 80px)',
            mb: 3,
            color: '#1e1e1e',
          }}
        >
          Save clothes in online closets
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? 16 : 22,
            lineHeight: 1.7,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            color: '#555',
          }}
        >
          <Box component="span">
            Build your{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(to right, #ff6ec4, #7873f5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
              display="inline"
            >
              dream closet
            </Box>
          </Box>
          <Box component="span">
            Save your{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
              display="inline"
            >
              fav fits
            </Box>
          </Box>
          <Box component="span">
            Collab with{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
              display="inline"
            >
              friends
            </Box>
          </Box>
          <Box component="span">
            Serve looks{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(to right, #f7971e, #ffd200)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
              display="inline"
            >
              together - anytime, anywhere
            </Box>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Closet;
