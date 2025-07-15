import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";
import logo from "./assets/5.png";

const useStyles = makeStyles(() => ({
  appBar: {
    // backdropFilter: "blur(12px)",
    backgroundColor:'white',
    marginTop:10,
    // borderRadius:20,

   
  },
  logo: {
    height: 60,
    width: "auto",
    objectFit: "contain",
    marginRight: "20px",
  },
  navButton: {
    fontWeight: 600,
    fontSize: "15px",
    textTransform: "none",
    marginLeft: "24px",
    color: "#222",
    "&:hover": {
      color: "#fc466b",
      background: "transparent",
    },
  },
  downloadButton: {
    background: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)",
    color: "#fff",
    fontWeight: "bold",
    padding: "10px 22px",
    borderRadius: "40px",
    textTransform: "none",
    fontSize: "14px",
    boxShadow: "0px 4px 14px rgba(63, 94, 251, 0.3)",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0px 6px 20px rgba(63, 94, 251, 0.4)",
    },
  },
}));

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar() {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar position="fixed" className={classes.appBar}>
        <Container  sx={{ width: "960px", maxWidth: "90%", mx: "auto", px: 2, backgroundColor:'black' , borderRadius:9}}>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <img src={logo} alt="Shazlo Logo" className={classes.logo} />
            </Box>

            {/* Nav Items */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Button
                className={classes.navButton}
                component={RouterLink}
                to="/"
              >
                Home
              </Button>
              <Button
                className={classes.navButton}
                component={RouterLink}
                to="/contact"
              >
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
    </HideOnScroll>
  );
}

export default Navbar;
