import React from 'react';
import {
  Container,
  Typography,
  Divider,
  IconButton,
  Box,
} from '@mui/material';
import { Instagram, Facebook } from '@mui/icons-material';
import mainlogo from './assets/w_2.png';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        pt: 6, // smaller top padding
        pb: { xs: 4, md: 5 }, // smaller bottom padding
        mt: { xs: 6, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* Logo + Text + Socials Centered */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.5,
            mb: 3,
          }}
        >
          <Box
            component="img"
            src={mainlogo}
            alt="main logo"
            sx={{ width: 120, mb: 1.5 }} // smaller logo
          />
          <Typography
            variant="body2"
            sx={{
              color: '#aaa',
              maxWidth: 260,
              mb: 1.5,
              fontSize: 15, // smaller text
            }}
          >
            The future of fashion discovery
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              aria-label="Instagram"
              sx={{ color: '#e9cd7d', p: 0.5 }} // smaller icon buttons
              component="a"
              href="https://www.instagram.com/shazlo.store?igsh=bTZ0bXM3NTdjOTN6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Facebook"
              sx={{ color: '#e9cd7d', p: 0.5 }}
              component="a"
              href="https://www.facebook.com/shazlo.store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Divider + Copyright */}
        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <Typography
          variant="body2"
          align="center"
          sx={{ color: '#888', fontSize: 13 }} // smaller copyright
        >
          © {new Date().getFullYear()} <strong>Shazlo</strong>. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
