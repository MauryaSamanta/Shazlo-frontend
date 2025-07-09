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

  return (
    <div>
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

      {/* App Features */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
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
                  Like Tinder but for fashion! Swipe right to like, left to
                  skip. It's that simple.
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
                  Our AI learns your style preferences in real-time to show you
                  perfect matches.
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
                  Create beautiful moodboards of your favorite looks and share
                  with friends.
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
                  For sellers - see what's trending and what your customers
                  love.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

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
