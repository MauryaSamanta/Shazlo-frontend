import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Shazlo
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Features</Button>
            <Button color="inherit" component={RouterLink} to="/contact">
              Contact
            </Button>
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
  );
}

export default Navbar;
