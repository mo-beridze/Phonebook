import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperation from "../redux/auth/auth-operations";
import Avatar from "@mui/material/Avatar";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import authSelectors from "../redux/auth/auth-selector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorMessageStatus = useSelector(authSelectors.getErrorMessage);
  const [showNotification, setShowNotification] = useState(false);

  const paperStyle = { padding: "30px 20px", width: 400, margin: "100px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#427AA1" };
  const textField = { margin: "10px 0" };
  const boxButton = { display: "flex" };

  const notify = () =>
    toast.error("Password is shorter than the minimum allowed length 7", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeStatus = () => {
    if (errorMessageStatus === "Password is shorter") {
      setShowNotification(true);
    }
  };

  useEffect(() => {
    changeStatus();
  }, [changeStatus, errorMessageStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    console.log(e);
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonAddIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            style={textField}
            fullWidth
            label="Name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
              onClick={notify}
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
            {errorMessageStatus && (
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            )}
          </Box>
        </form>
      </Paper>
    </Grid>
  );
}
