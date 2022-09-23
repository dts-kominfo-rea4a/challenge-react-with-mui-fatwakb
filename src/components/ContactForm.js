// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  CardActions,
  Button,
} from "@mui/material";

const ContactForm = ({ fnFormHandler }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const formChangeHandler = (event) => {
    const targetId = event.target.id;
    switch (targetId) {
      case "name":
        setName(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "photo":
        setPhoto(event.target.value);
        break;
      default:
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      photo: event.target.photo.value,
    };
    fnFormHandler(inputData);
    setName("");
    setPhone("");
    setEmail("");
    setPhoto("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#f4f4f2" }}
      >
        <CardContent>
          <Box sx={{ "& .MuiTextField-root": { mb: "0.5em" } }}>
            <TextField
              fullWidth
              required
              label="Name"
              variant="filled"
              size="small"
              id="name"
              value={name}
              onChange={formChangeHandler}
            />
            <TextField
              fullWidth
              required
              label="Phone"
              variant="filled"
              size="small"
              id="phone"
              value={phone}
              onChange={formChangeHandler}
            />
            <TextField
              fullWidth
              required
              label="Email"
              variant="filled"
              size="small"
              id="email"
              value={email}
              onChange={formChangeHandler}
            />
            <TextField
              fullWidth
              required
              label="Photo URL"
              variant="filled"
              size="small"
              id="photo"
              value={photo}
              onChange={formChangeHandler}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="success"
            type="submit"
          >
            ADD NEW
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default ContactForm;
