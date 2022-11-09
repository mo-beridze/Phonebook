import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from '../redux/auth/auth-operations';
import Avatar from '@mui/material/Avatar';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import contactsOperatios from 'components/redux/contacts/contacts-operations';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const paperStyle = { padding: '30px 20px', width: 400, margin: '40px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#427AA1' };
  const textField = { margin: '10px 0' };
  const boxButton = { display: 'flex' };

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
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
            onChange={e => {
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
            onChange={e => {
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
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <Box style={boxButton} justifyContent="center" alignItems="center">
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#427AA1',
                '&:hover': {
                  backgroundColor: '#EBF2FA',
                  color: 'black',
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
