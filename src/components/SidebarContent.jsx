import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
const SidebarContent = () => (
  <Box sx={{ width: 240 }}>
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" component="div" gutterBottom>
        Frontquiz
      </Typography>
    </Box>
    <List>
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button={true}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button={true}>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  </Box>
);

export default SidebarContent;
