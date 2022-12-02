import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selector";
import authOperation from "../redux/auth/auth-operations";
import { Button, Typography, Grid } from "@mui/material";

export default function UserMenu({ isLarge, isLoggedIn }) {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <>
      {!isLarge && isLoggedIn ? (
        <Grid>
          <Grid item xs={3} sx={{ marginRight: 12 }}>
            <Button
              type="submit"
              variant="contained"
              onClick={() => dispatch(authOperation.logOut())}
              sx={{
                marginLeft: "auto",
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                  backgroundColor: "#e3e2e2",
                  color: "black",
                },
              }}
            >
              LogOut
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid sx={{ display: "flex", placeItems: "center" }}>
          <Typography color="#EBF2FA" sx={{ marginRight: 5 }}>
            Hello, {name}
          </Typography>
          <Grid item xs={3} sx={{ marginRight: 12 }}>
            <Button
              type="submit"
              variant="contained"
              onClick={() => dispatch(authOperation.logOut())}
              sx={{
                marginLeft: "auto",
                backgroundColor: "#427AA1",
                color: "#EBF2FA",
                "&:hover": {
                  backgroundColor: "#EBF2FA",
                  color: "black",
                },
              }}
            >
              LogOut
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}
