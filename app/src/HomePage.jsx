import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Box, 
  IconButton,
  Link,
  Divider,
  TextField,
  Paper
} from '@mui/material';
import { 
  ShoppingBag, 
  Favorite, 
  Instagram, 
  Facebook, 
  Twitter,
  Download,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFD700',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 'none',
  },
  hero: {
    background: 'linear-gradient(45deg, #FFF9C4 30%, #FFEBEE 90%)',
    padding: '80px 0',
    textAlign: 'center',
  },
  featureCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  featureMedia: {
    paddingTop: '56.25%',
    backgroundColor: '#FFEBEE',
  },
  downloadButton: {
    background: 'linear-gradient(45deg, #FFD700 30%, #FFC107 90%)',
    color: 'black',
    fontWeight: 'bold',
    padding: '10px 24px',
  },
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px 0',
  },
  contactForm: {
    padding: '40px',
    backgroundColor: '#FFF9C4',
  },
  pinkText: {
    color: '#F06292',
  },
  yellowBg: {
    backgroundColor: '#FFF9C4',
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Navbar */}
        <AppBar position="static" className={classes.appBar}>
          <Container>
            <Toolbar>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                Shazlo
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Contact</Button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  startIcon={<Download />}
                  sx={{ ml: 2 }}
                  className={classes.downloadButton}
                >
                  Download App
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <div className={classes.hero}>
          <Container>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Discover Fashion <span className={classes.pinkText}>You'll Love</span>
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              Swipe. Shop. Style. The future of fashion discovery is here.
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              startIcon={<Download />}
              className={classes.downloadButton}
            >
              Get the App
            </Button>
          </Container>
        </div>

        {/* App Features */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
            How <span className={classes.pinkText}>Shazlo</span> Works
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.featureCard}>
                <CardMedia
                  className={classes.featureMedia}
                  image="/placeholder-swipe.jpg"
                  title="Swipe feature"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Swipe to Discover
                  </Typography>
                  <Typography>
                    Like Tinder but for fashion! Swipe right to like, left to skip. It's that simple.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.featureCard}>
                <CardMedia
                  className={classes.featureMedia}
                  image="/placeholder-ai.jpg"
                  title="AI feature"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Smart AI Curation
                  </Typography>
                  <Typography>
                    Our AI learns your style preferences in real-time to show you perfect matches.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.featureCard}>
                <CardMedia
                  className={classes.featureMedia}
                  image="/placeholder-moodboard.jpg"
                  title="Moodboard feature"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Style Moodboards
                  </Typography>
                  <Typography>
                    Create beautiful moodboards of your favorite looks and share with friends.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.featureCard}>
                <CardMedia
                  className={classes.featureMedia}
                  image="/placeholder-analytics.jpg"
                  title="Analytics feature"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Trend Analytics
                  </Typography>
                  <Typography>
                    For sellers - see what's trending and what your customers love.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Categories Section */}
        <Box className={classes.yellowBg} sx={{ py: 8 }}>
          <Container>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
              Shop Your <span className={classes.pinkText}>Favorite</span> Categories
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <Button variant="outlined" size="large" startIcon={<ShoppingBag />}>
                  Bags
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" startIcon={<Favorite />}>
                  Dresses
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" startIcon={<ShoppingBag />}>
                  Shorts
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" startIcon={<Favorite />}>
                  Tops
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Download CTA */}
        <Container sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to <span className={classes.pinkText}>Transform</span> Your Shopping Experience?
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Download Shazlo now and discover fashion tailored just for you.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<Download />}
            className={classes.downloadButton}
          >
            Download the App
          </Button>
        </Container>

        {/* Footer */}
        <footer className={classes.footer}>
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
      </div>
    </ThemeProvider>
  );
}

function ContactPage() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Navbar */}
        <AppBar position="static" className={classes.appBar}>
          <Container>
            <Toolbar>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                Shazlo
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Contact</Button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  startIcon={<Download />}
                  sx={{ ml: 2 }}
                  className={classes.downloadButton}
                >
                  Download App
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Contact Hero */}
        <Box className={classes.hero}>
          <Container>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Get in <span className={classes.pinkText}>Touch</span>
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              We'd love to hear from you! Reach out for support, partnerships, or just to say hello.
            </Typography>
          </Container>
        </Box>

        {/* Contact Content */}
        <Container sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className={classes.contactForm}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Send Us a Message
                </Typography>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="First Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        size="large"
                        className={classes.downloadButton}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                Have questions about Shazlo? We're here to help!
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ mr: 2, color: '#F06292' }} />
                  <Typography variant="body1">support@shazlo.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone sx={{ mr: 2, color: '#F06292' }} />
                  <Typography variant="body1">+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <LocationOn sx={{ mr: 2, color: '#F06292', mt: 0.5 }} />
                  <Typography variant="body1">
                    123 Fashion Avenue<br />
                    New York, NY 10001<br />
                    United States
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 6 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Follow Us
                </Typography>
                <Box>
                  <IconButton aria-label="instagram" sx={{ color: '#F06292' }}>
                    <Instagram fontSize="large" />
                  </IconButton>
                  <IconButton aria-label="facebook" sx={{ color: '#F06292' }}>
                    <Facebook fontSize="large" />
                  </IconButton>
                  <IconButton aria-label="twitter" sx={{ color: '#F06292' }}>
                    <Twitter fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Download CTA */}
        <Box className={classes.yellowBg} sx={{ py: 8 }}>
          <Container sx={{ textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Don't Have the App Yet?
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              Download Shazlo now and start your personalized fashion journey.
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              startIcon={<Download />}
              className={classes.downloadButton}
            >
              Download Now
            </Button>
          </Container>
        </Box>

        {/* Footer */}
        <footer className={classes.footer}>
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
      </div>
    </ThemeProvider>
  );
}

export { HomePage, ContactPage };