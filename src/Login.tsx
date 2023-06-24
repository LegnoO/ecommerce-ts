import React from 'react';
import { Stack, Typography, Grid, Box } from '@mui/material';

const Login = () => {
  return (
    <>
      <Box sx={{ height: '100vh' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                height: '100%',
                backgroundImage: `url(
                    'https://preview.colorlib.com/theme/bootstrap/login-form-02/images/bg_1.jpg.webp'
                  )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
