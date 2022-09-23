// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
  List,
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
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#d7fff6" }}>
      {data.map((row) => {
        return (
          <ListItem
            key={row.phone}
            alignItems="flex-start"
            divider
          >
            <ListItemAvatar>
              <Avatar
                sx={{ width: 60, height: 60, marginRight: "0.5em" }}
                alt={row.name}
                src={row.photo}
              />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="body2">{row.name}</Typography>}
              secondary={
                <Typography
                  color="gray"
                  variant="body2"
                >
                  {row.phone}
                  <br /> {row.email}
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Contact;
