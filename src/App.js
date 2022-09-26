import React, { useState } from "react";
import { Container, Grid, List } from "@mui/material";
import "./App.css";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [datas, setDatas] = useState([
    {
      name: "Monica",
      phone: "085367653673",
      email: "monica@email.com",
      photo: "http://placekitten.com/500",
    },
    {
      name: "Devi",
      phone: "084857384793",
      email: "devi@email.com",
      photo: "http://placekitten.com/400",
    },
    {
      name: "Withered",
      phone: "087577588432",
      email: "withered@email.com",
      photo: "http://placekitten.com/300",
    },
    {
      name: "Flowers",
      phone: "088487547211",
      email: "flowers@email.com",
      photo: "http://placekitten.com/600",
    },
  ]);

  const formHandler = (inputData) => {
    setDatas([...datas, inputData]);
  };

  return (
    <Container className="App">
      <Header />
      <Grid
        container
        spacing={12}
      >
        <Grid
          item
          xs
        >
          <ContactForm fnFormHandler={formHandler} />
        </Grid>
        <Grid
          item
          xs
        >
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#d7fff6" }}>
            {datas.map((data) => (
              <Contact
                key={data.phone}
                data={data}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
