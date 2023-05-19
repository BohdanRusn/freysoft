import React from "react";
import "./App.css";
import { Container, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ padding: "0 27px" }}>
        <Routes>
          <Route path="/expenses" element={<Typography>Expenses</Typography>} />
          <Route path="/" element={<Typography>main</Typography>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
