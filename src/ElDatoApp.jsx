// src/App.jsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Logo from './Logo';
import theme from './ThemeWithFonts';

const ElDatoApp = () => {
  return (
    <>
      <div>Hola Mundo</div>
    </>


    // <ThemeProvider theme={theme}>
    //   <div 
    //     className="App" 
    //     style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
    //   >
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       href="https://stathead.eldatomx.com"
    //       sx={{ mt: 2 }}
    //     >
    //       stathead.eldatomx
    //     </Button>
    //     <Logo />
    //   </div>
    // </ThemeProvider>
  );
};

export default ElDatoApp;

