import React from "react";
import "./App.css";
import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ExpensesPage from "./pages/Expenses/ExpensesPage";

function App() {
  return (
    <Box
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <Container
        sx={{
          padding: "0 27px 15px",
          overflowY: "auto",
          height: "78.7vh",
        }}
      >
        <Routes>
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
