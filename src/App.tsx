import React from "react";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box style={{ height: "100vh", width: "100vw" }}>
      <Header />
      <Container sx={{ padding: "0 27px" }}>
        <Routes>
          <Route path="/expenses" element={<Typography>Expenses</Typography>} />
          <Route path="/" element={<Typography>main</Typography>} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
