import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  Box,
} from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';
import mainlogo from './assets/3.png';
import Button from './components/Button';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
        mt: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Logo & Social */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box
                component="img"
                src={mainlogo}
                alt="main logo"
                sx={{ width: 180 }}
              />
              <Typography variant="body2" sx={{ color: '#aaa', maxWidth: 300 }}>
                The future of fashion discovery for women.
              </Typography>
              <Box>
                <IconButton aria-label="Instagram" sx={{ color: '#e9cd7d' }}>
                  <Instagram />
                </IconButton>
                <IconButton aria-label="Facebook" sx={{ color: '#e9cd7d' }}>
                  <Facebook />
                </IconButton>
                <IconButton aria-label="Twitter" sx={{ color: '#e9cd7d' }}>
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'Features', 'Download', 'Contact'].map((text) => (
                <Link key={text} href="#" underline="hover" sx={{ color: '#bbb' }}>
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Legal + Download */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Privacy Policy', 'Terms of Service'].map((text) => (
                <Link key={text} href="#" underline="hover" sx={{ color: '#bbb' }}>
                  {text}
                </Link>
              ))}
            </Box>
            <Box sx={{ mt: 4, maxWidth: 300 }}>
              <Button />
            </Box>
          </Grid>
        </Grid>

        {/* Divider + Copyright */}
        <Divider sx={{ my: 6, backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <Typography variant="body2" align="center" sx={{ color: '#888' }}>
          © {new Date().getFullYear()} <strong>Shazlo</strong>. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
