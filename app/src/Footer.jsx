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
import {
  Instagram,
  Facebook,
  Twitter,
} from '@mui/icons-material';
import mainlogo from './assets/3.png';
import Button from './components/Button';
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        pt: 10,
        pb: 6,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid
    container
    spacing={6}
    justifyContent="space-between"
    alignItems="flex-start"
  >
          {/* Logo & Social */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box
                component="img"
                src={mainlogo}
                alt="main logo"
                sx={{ width: 200 }}
              />
              <Typography variant="body1" sx={{ maxWidth: 280, color: '#aaa' }}>
                The future of fashion discovery for women.
              </Typography>
              <Box>
                <IconButton aria-label="instagram" sx={{ color: '#e9cd7d' }}>
                  <Instagram />
                </IconButton>
                <IconButton aria-label="facebook" sx={{ color: '#e9cd7d' }}>
                  <Facebook />
                </IconButton>
                <IconButton aria-label="twitter" sx={{ color: '#e9cd7d' }}>
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="hover" sx={{ color: '#bbb' }}>
                Home
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#bbb' }}>
                Features
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#bbb' }}>
                Download
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#bbb' }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Legal + App Button */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="hover" sx={{ color: '#bbb' }}>
                Privacy Policy
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#bbb' }}>
                Terms of Service
              </Link>
            </Box>

            {/* Download App Button */}
            <Box sx={{ mt: 4 }}>
              <Button/>
              {/* <Button
                variant="contained"
                sx={{
                  background: '#e9cd7d',
                  color: '#000',
                  fontWeight: 600,
                  borderRadius: 999,
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    background: '#f0d889',
                  },
                }}
              >
                Download the App
              </Button> */}
            </Box>
          </Grid>
        </Grid>

        {/* Divider + Copyright */}
        <Divider sx={{ my: 6, backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <Typography variant="body2" align="center" sx={{ color: '#888' }}>
          © {new Date().getFullYear()} <b>Shazlo</b>. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
