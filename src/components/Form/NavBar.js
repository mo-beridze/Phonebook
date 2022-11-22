import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import UserMenu from "./UserMenu";
import authSelectors from "../redux/auth/auth-selector";
import {
  Grid,
  Toolbar,
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import DrawerComp from "./DrawerComp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

export default function NavBar() {
  const theme = useTheme();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <AppBar sx={{ backgroundColor: "#064789", position: "absolute" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <AccountCircleSharpIcon></AccountCircleSharpIcon>
            </Typography>
            <DrawerComp></DrawerComp>
          </>
        ) : (
          <Grid container sx={{ placeItems: "center" }}>
            <Grid item xs={2}>
              <Typography>
                <AccountCircleSharpIcon></AccountCircleSharpIcon>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                component={Link}
                to={"/"}
                sx={{
                  marginLeft: "auto",
                  backgroundColor: "#427AA1",
                  color: "#EBF2FA",
                  "&:hover": {
                    backgroundColor: "#EBF2FA",
                    color: "black",
                  },
                }}
                variant="contained"
              >
                Home
              </Button>
              <Button
                component={Link}
                to={"/contacts"}
                sx={{
                  marginLeft: 1,
                  backgroundColor: "#427AA1",
                  color: "#EBF2FA",
                  "&:hover": {
                    backgroundColor: "#EBF2FA",
                    color: "black",
                  },
                }}
                variant="contained"
              >
                Contacts
              </Button>
            </Grid>
          </Grid>
        )}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          isLarge === isLoggedIn && (
            <Grid item xs={3} sx={{ marginRight: 12 }}>
              <Box display="flex">
                <Button
                  component={Link}
                  to={"/register"}
                  sx={{
                    marginLeft: "auto",
                    backgroundColor: "#427AA1",
                    color: "#EBF2FA",
                    "&:hover": {
                      backgroundColor: "#EBF2FA",
                      color: "black",
                    },
                  }}
                  variant="contained"
                >
                  Register
                </Button>
                <Button
                  component={Link}
                  to={"/login"}
                  sx={{
                    marginLeft: 1,
                    backgroundColor: "#427AA1",
                    color: "#EBF2FA",
                    "&:hover": {
                      backgroundColor: "#EBF2FA",
                      color: "black",
                    },
                  }}
                  variant="contained"
                >
                  LogIn
                </Button>
              </Box>
            </Grid>
          )
        )}
      </Toolbar>
    </AppBar>
    // <header className={s.header}>
    //   <Navigation />

    // </header>
  );
}
