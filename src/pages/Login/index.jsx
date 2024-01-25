import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { login } from './actions';
import classes from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { encryptPayload } from '@utils/encryptPayload';

const defaultTheme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleChange = (value, type) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

  const handleSubmit = () => {
    const dataUser = {
      email: encryptPayload(user.email),
      password: encryptPayload(user.password),
    };
    dispatch(login(dataUser));
    navigate('/');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <Typography component="h1" variant="h5" className={classes.title}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // autoComplete="email"
              autoFocus
              onChange={(e) => handleChange(e.target.value, 'email')}
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              onChange={(e) => handleChange(e.target.value, 'password')}
              variant="filled"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
              Login
            </Button>
            <Box className={classes.footer}>
              <Link href="/register" variant="body2" className={classes.link}>
                Don't have an account? Sign Up
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
