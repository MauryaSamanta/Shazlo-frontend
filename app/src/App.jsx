import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./theme";

import ContactPage from "./Contact";
import Landing from "./Landing";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
