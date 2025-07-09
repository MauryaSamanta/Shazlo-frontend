import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider,
  IconButton,
  Box
} from '@mui/material';
import { 
  Instagram, 
  Facebook, 
  Twitter
} from '@mui/icons-material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Shazlo
            </Typography>
            <Typography>
              The future of fashion discovery for women.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="instagram" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton aria-label="facebook" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton aria-label="twitter" color="inherit">
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block">Home</Link>
            <Link href="#" color="inherit" display="block">Features</Link>
            <Link href="#" color="inherit" display="block">Download</Link>
            <Link href="#" color="inherit" display="block">Contact</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" display="block">Terms of Service</Link>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        <Typography align="center">
          © {new Date().getFullYear()} Shazlo. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;