// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <ListItem
      alignItems="flex-start"
      divider
    >
      <ListItemAvatar>
        <Avatar
          sx={{ width: 60, height: 60, marginRight: "0.5em" }}
          alt={data.name}
          src={data.photo}
        />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography variant="body2">{data.name}</Typography>}
        secondary={
          <Typography
            color="gray"
            variant="body2"
          >
            {data.phone}
            <br /> {data.email}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default Contact;
