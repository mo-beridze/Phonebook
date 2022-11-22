import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import authSelectors from "../redux/auth/auth-selector";
import authOperation from "../redux/auth/auth-operations";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function DrawerComp() {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "#064789" },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItem component={Link} to="/contacts" onClick={() => setOpen(!open)}>
            <ListItemText
              sx={{
                color: "#EBF2FA",
                "&:hover": {
                  backgroundColor: "#EBF2FA",
                  color: "black",
                },
              }}
            >
              Contacts
            </ListItemText>
          </ListItem>
          {isLoggedIn ? (
            <ListItem>
              <ListItemText
                sx={{
                  marginTop: "10px",
                  color: "#eb3a1c",
                  "&:hover": {
                    backgroundColor: "#EBF2FA",
                    color: "black",
                  },
                }}
                onClick={() => dispatch(authOperation.logOut())}
              >
                LogOut
              </ListItemText>
            </ListItem>
          ) : (
            <List>
              <ListItem component={Link} to="/register" onClick={() => setOpen(!open)}>
                <ListItemText
                  sx={{
                    color: "#EBF2FA",
                    "&:hover": {
                      backgroundColor: "#EBF2FA",
                      color: "black",
                    },
                  }}
                >
                  Register
                </ListItemText>
              </ListItem>
              <ListItem component={Link} to="/login" onClick={() => setOpen(!open)}>
                <ListItemText
                  sx={{
                    color: "#EBF2FA",
                    "&:hover": {
                      backgroundColor: "#EBF2FA",
                      color: "black",
                    },
                  }}
                >
                  Login
                </ListItemText>
              </ListItem>
            </List>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </>
  );
}
