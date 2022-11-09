import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerComp() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: '#f5d5dd' },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Contacts</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Register</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>LogIn</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: 'auto', color: 'white' }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </>
  );
}
