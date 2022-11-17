import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperation from "../redux/auth/auth-operations";
import PersonPinIcon from "@mui/icons-material/PersonPin";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = { padding: "30px 20px", width: 400, margin: "100px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#427AA1" };
  const textField = { margin: "10px 0" };
  const boxButton = { display: "flex" };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperation.login({ email, password }));
    setEmail("");
    setPassword("");
    console.log(e);
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonPinIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign In</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to LogIn in your account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            style={textField}
            fullWidth
            label="Email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            type="password"
            style={textField}
            fullWidth
            label="Password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Box style={boxButton} justifyContent="center" alignItems="center">
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#427AA1",
                "&:hover": {
                  backgroundColor: "#EBF2FA",
                  color: "black",
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
}
