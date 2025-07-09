import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";
import logo from "./assets/5.png";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
  },
  downloadButton: {
    background: "linear-gradient(45deg, #FFD700 30%, #FFC107 90%)",
    color: "black",
    fontWeight: "bold",
    padding: "10px 24px",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={logo}
              alt="Shazlo Logo"
              style={{
                height: 100,
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Nav Items */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            {/* <Button color="inherit">About</Button>
            <Button color="inherit">Features</Button> */}
            <Button color="inherit" component={RouterLink} to="/contact">
              Contact
            </Button>
            <Button
              variant="contained"
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
  );
}

export default Navbar;
