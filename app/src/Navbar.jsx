import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  useScrollTrigger,
  Slide,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Download, Menu as MenuIcon } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";
import logo from "./assets/4.png";

const useStyles = makeStyles(() => ({
  appBar: {
    backdropFilter: "blur(12px)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    marginTop: 10,
    borderRadius: 20,
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
      background: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)",
    },
  },
  mobileMenu: {
    display: "flex",
    alignItems: "center",
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Container sx={{ width: "100%", maxWidth: "1200px", px: 2 }}>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <img src={logo} alt="Shazlo Logo" className={classes.logo} />
            </Box>

            {/* Desktop Nav Items */}
            {!isMobile ? (
              <Box
                sx={{
                  display: "flex",
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
            ) : (
              /* Mobile Menu */
              <Box className={classes.mobileMenu}>
                <IconButton
                  size="large"
                  edge="end"
                  color="black"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={handleClose}
                    component={RouterLink}
                    to="/"
                  >
                    Home
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={RouterLink}
                    to="/contact"
                  >
                    Contact
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={RouterLink}
                    to="/download"
                  >
                    <Download sx={{ mr: 1 }} />
                    Download App
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;