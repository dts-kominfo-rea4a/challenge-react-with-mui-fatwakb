// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import { Typography, Divider } from "@mui/material";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <header style={{ marginBottom: "4em" }}>
      <Typography
        sx={{ marginBottom: "0.25em" }}
        variant="h3"
      >
        Call a Friend
      </Typography>
      <Divider>Your friendly contact app</Divider>
    </header>
  );
};

export default Header;
