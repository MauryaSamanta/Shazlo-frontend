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
} from "@mui/material";
import { ShoppingBag, Favorite, Download } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const useStyles = makeStyles(() => ({
  hero: {
    background: "linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)",
    padding: "100px 20px",
    textAlign: "center",
  },
  featureCard: {
    height: "100%",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "scale(1.04)",
    },
  },
  featureMedia: {
    height: 240,
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    objectFit: "cover",
  },
  downloadButton: {
    background: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "50px",
    padding: "12px 32px",
    fontSize: "16px",
    textTransform: "none",
    boxShadow: "0px 4px 20px rgba(63, 94, 251, 0.4)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0px 6px 25px rgba(63, 94, 251, 0.6)",
    },
  },
  pinkText: {
    color: "#fc466b",
  },
  yellowBg: {
    background: "#fffaf0",
  },
}));

function HomePage() {
  const classes = useStyles();

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
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            Discover Fashion <span className={classes.pinkText}>You'll Love</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#555",
              maxWidth: "600px",
              margin: "0 auto",
              fontWeight: 400,
              mb: 4,
            }}
          >
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
            Shop Your <span className={classes.pinkText}>Favorite</span> Categories
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {["Bags", "Dresses", "Shorts", "Tops"].map((label, idx) => (
              <Grid item key={label}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={idx % 2 === 0 ? <ShoppingBag /> : <Favorite />}
                  sx={{
                    borderRadius: "40px",
                    px: 4,
                    fontWeight: "600",
                    color: "#3f5efb",
                    borderColor: "#3f5efb",
                    "&:hover": {
                      backgroundColor: "#3f5efb",
                      color: "#fff",
                    },
                  }}
                >
                  {label}
                </Button>
              </Grid>
            ))}
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
            {[
              {
                title: "Swipe-Based Interaction",
                desc: "Discover fashion like never before — just swipe right to love it or left to skip.",
                img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&w=600",
              },
              {
                title: "Smart AI Curation",
                desc: "Our AI learns your preferences instantly and curates fashion just for you.",
                img: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&w=600",
              },
              {
                title: "Wishlist & Moodboards",
                desc: "Save your favorite styles and create your vibe with custom moodboards.",
                img: "https://images.pexels.com/photos/532221/pexels-photo-532221.jpeg?auto=compress&w=600",
              },
            ].map((feature) => (
              <Grid item xs={12} sm={6} md={4} key={feature.title}>
                <Card className={classes.featureCard}>
                  <CardMedia
                    component="img"
                    className={classes.featureMedia}
                    image={feature.img}
                    alt={feature.title}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666" }}>
                      {feature.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Download CTA */}
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Ready to <span className={classes.pinkText}>Transform</span> Your Shopping?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: "#555" }}>
          Download Shazlo and unlock your personal style universe.
        </Typography>
        <Button
          className={classes.downloadButton}
          size="large"
          startIcon={<Download />}
        >
          Download the App
        </Button>
      </Container>

      <Footer />
    </div>
  );
}

export default HomePage;
