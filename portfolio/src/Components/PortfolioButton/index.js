import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003049',
    },
    secondary: {
      main: '#ff9f00',
    },
  },
});

export default function PortfolioButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant= "contained">My Portfolio</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
    </ThemeProvider>
  );
}

