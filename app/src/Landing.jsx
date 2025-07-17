import React, { useEffect, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import mainlogo from "./assets/w.png";
import mobilelogo from "./assets/w.png";
import ss1 from "./assets/ss1.jpg";
import ss2 from "./assets/ss2.jpg";
import ss3 from "./assets/ss3.jpg";
import Button from "./components/Button";
import Style from "./components/Swipe";
import Closet from "./components/Closet";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Landing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [scrollY, setScrollY] = useState(0);
  const scrollOffset = Math.min(scrollY / 2, 200); // cap at 200px

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        overflowX: "hidden",
        backgroundColor: "white",
      }}
    >
      <Navbar></Navbar>
      {/* Top Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: isMobile ? "90vh" : isTablet ? "80vh" : "100vh",
          minHeight: isMobile ? 600 : 700,
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Sling Handles (Shopping Bag Style) - Only show on desktop */}
        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "50%",
              width: "80%",
              maxWidth: 1200,
              height: "100%",
              maxHeight: 600,
              border: "20px solid #e9cd7d",
              borderTopLeftRadius: "100% 80%",
              borderTopRightRadius: "100% 80%",
              borderBottom: "none",
              backgroundColor: "transparent",
              zIndex: 0,
              transform: "translateX(-50%)",
            }}
          />
        )}
        <br></br>
        {/* Logo */}
        <Box
          component="img"
          src={isMobile ? mobilelogo : mainlogo}
          alt="main logo"
          sx={{
            width: isMobile ? "80%" : isTablet ? "70%" : "60%",
            maxWidth: isMobile ? 500 : 750,
            zIndex: 1,
            mt: isMobile ? -8 : -7.5,
            mb: isMobile ? 4 : 0,
            position: "relative",
          }}
        />
        {/* Button */}
        <Box
          sx={{
            position: "relative",
            zIndex: 100, // Increased z-index to ensure it's above other elements
            width: "100%",
            display: "flex",

            justifyContent: "center",
            mt: isMobile ? -8 : 6, // Added margin top for mobile
            mb: isMobile ? 2 : 0, // Added margin bottom for mobile
          }}
        >
          <Button />
        </Box>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        {/* Cards - Only show on desktop */}
        <Box
          sx={{
            display: "flex",
            gap: 0,
            position: "absolute",
            bottom: `calc(-10% + ${scrollOffset}px)`,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            flexDirection: "row",
            alignItems: "flex-end",
            transition: "bottom 0.3s ease-out",
          }}
        >
          {/* Left Card */}
          <Box
            component="img"
            src={ss2}
            sx={{
               width: isMobile ? 160 : isTablet ? 240 : 250,
              height: isMobile ? 320 : isTablet ? 450 : 500,
              top: isMobile ? -170 : 0,
              position: "relative",
              backgroundColor: "white",
              borderRadius: "14px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              transform: "rotate(-12deg)",
              zIndex: 1,
            }}
          />

          {/* Center Card */}
          <Box
            component="img"
            src={ss1}
            sx={{
              width: isMobile ? 160 : isTablet ? 240 : 250,
              height: isMobile ? 320 : isTablet ? 450 : 500,
              top: isMobile ? -170 : 0,
              position: "relative",

              backgroundColor: "white",
              borderRadius: "14px",
              boxShadow: "0 15px 50px rgba(0,0,0,0.5)",
              transform: "rotate(0deg)",
              zIndex: 2,
            }}
          />

          {/* Right Card */}
          <Box
            component="img"
            src={ss3}
            sx={{
               width: isMobile ? 160 : isTablet ? 240 : 250,
              height: isMobile ? 320 : isTablet ? 450 : 500,
              top: isMobile ? -170 : 0,
              position: "relative",
              backgroundColor: "white",
              borderRadius: "14px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              transform: "rotate(12deg)",
              zIndex: 1,
            }}
          />
        </Box>
        {/* Curve at bottom */}
        <Box
          sx={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            height: "15%",
            minHeight: 150,
            backgroundColor: "white",
            borderTopLeftRadius: "100% 100px",
            borderTopRightRadius: "100% 100px",
            zIndex: 3,
          }}
        />
      </Box>

      {/* Content Sections */}
      <Box
        sx={{
          position: "relative",
          zIndex: 4,
          backgroundColor: "white",
          pt: isMobile ? 0 : 0,
          pb: isMobile ? 0 : 0,
        }}
      >
        <Style />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 4,
          backgroundColor: "white",
          pt: isMobile ? 0 : 0,
          pb: isMobile ? 0 : 0,
        }}
      >
        <Closet />
      </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            height: "15%",
            minHeight: 150,
            backgroundColor: "white",
            borderTopLeftRadius: "100% 100px",
            borderTopRightRadius: "100% 100px",
            zIndex: 3,
          }}
        />
      {/* Footer */}
      <Box
        sx={{
          position: "relative",
          zIndex: 4,
          backgroundColor: "black",
          width: "100%",
          pt: 8,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Landing;
