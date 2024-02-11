import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../config/firebase';
import Olx from '../../assets/OlxLogo'
  
const defaultTheme = createTheme();

export default  function SignUp() {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userdata= {
        email: data.get('email'),
        password: data.get('password'),
        username: data.get('user'),
        contact:data.get('contact')
      }
      console.log(userdata)
      try{
        await signUp(userdata)
        navigate('/Login')
      }
      catch(e){
        console.log(e.message)
      }
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ p:-2 ,bgcolor: 'secondary.main',width:80,height:80 }}>
            <Olx />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="UserName"
                  name="user"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Phone"
                  label="PhoneNumber"
                  name="contact"
                  autoComplete="number"
                  type='number'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
               
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item sx={{margin:'auto'}}>
                <Link href="#" variant="body2"    onClick={() => SignUp()}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
