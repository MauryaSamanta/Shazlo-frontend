import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Link,
} from "@mui/material";
import { ShoppingBag, Favorite, Download } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  hero: {
    background: "linear-gradient(45deg, #FFF9C4 30%, #FFEBEE 90%)",
    padding: "80px 0",
    textAlign: "center",
  },
  featureCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  featureMedia: {
    paddingTop: "56.25%",
    backgroundColor: "#FFEBEE",
  },
  downloadButton: {
    background: "linear-gradient(45deg, #FFD700 30%, #FFC107 90%)",
    color: "black",
    fontWeight: "bold",
    padding: "10px 24px",
  },
  pinkText: {
    color: "#F06292",
  },
  yellowBg: {
    backgroundColor: "#FFF9C4",
  },
}));

function HomePage() {
  const classes = useStyles();

  // Add top padding to offset the fixed navbar (default MUI AppBar height is 64px, 56px on mobile)
  return (
    <div style={{ paddingTop: 64 }}>
      <Navbar />

      {/* Hero Section */}
      <div className={classes.hero}>
        <Container>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Discover Fashion{" "}
            <span className={classes.pinkText}>You'll Love</span>
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

      {/* Categories Section */}
      <Box className={classes.yellowBg} sx={{ py: 8 }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 6 }}
          >
            Shop Your <span className={classes.pinkText}>Favorite</span>{" "}
            Categories
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                startIcon={<ShoppingBag />}
              >
                Bags
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="large" startIcon={<Favorite />}>
                Dresses
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                startIcon={<ShoppingBag />}
              >
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
      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: "#FFFDE7" }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 6 }}
          >
            Why <span className={classes.pinkText}>Shazlo</span> Stands Out
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.featureCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&w=600"
                  alt="Swipe Interaction"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Swipe-Based Interaction
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Discover fashion like never before—just swipe right to love
                    it or left to skip.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.featureCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&w=600"
                  alt="AI Curation"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Smart AI Curation
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Our AI learns your preferences instantly and curates fashion
                    just for you.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.featureCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.pexels.com/photos/532221/pexels-photo-532221.jpeg?auto=compress&w=600"
                  alt="Wishlist"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Wishlist & Moodboards
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Save your favorite styles and create your vibe with custom
                    moodboards.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Download CTA */}
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          Ready to <span className={classes.pinkText}>Transform</span> Your
          Shopping Experience?
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

      <Footer />
    </div>
  );
}

export default HomePage;
